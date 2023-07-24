import Product from "../models/product";
import APIFilters from "../utils/APIFilters";
import { cloudinary, uploads } from "../utils/cloudinary";
import fs from "fs";
import ErrorHandler from "../utils/errorHandler";

export const newProduct = async (req, res, next) => {
  try {
    req.body.user = req.user._id;

    const product = await Product.create(req.body);
    res.status(201).json({
      product,
    });
  } catch (error) {
    console.error("Error creating new product:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const getProducts = async (req, res, next) => {
  try {
    const resPerPage = 5;
    const productsCount = await Product.countDocuments();

    const apiFilters = new APIFilters(Product.find(), req.query)
      .search()
      .filter();

    let products = await apiFilters.query;
    const filteredProductsCount = products.length;

    apiFilters.pagination(resPerPage);

    products = await apiFilters.query.clone();

    res.status(200).json({
      productsCount,
      resPerPage,
      filteredProductsCount,
      products,
    });
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const getProduct = async (req, res, next) => {
  try {
    const product = await Product.findById(req.query.id);

    if (!product) {
      return next(new ErrorHandler("Product not found.", 404));
    }

    res.status(200).json({
      product,
    });
  } catch (error) {
    console.error("Error fetching product:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const uploadProductImages = async (req, res, next) => {
  try {
    let product = await Product.findById(req.query.id);

    if (!product) {
      return next(new ErrorHandler("Product not found.", 404));
    }

    const uploader = async (path) => await uploads(path, "buyitnow/products");

    const urls = [];
    const files = req.files;

    for (const file of files) {
      const { path } = file;
      const imgUrl = await uploader(path);
      urls.push(imgUrl);
      fs.unlinkSync(path);
    }

    product = await Product.findByIdAndUpdate(req.query.id, {
      images: urls,
    });

    res.status(200).json({
      data: urls,
      product,
    });
  } catch (error) {
    console.error("Error uploading product images:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const updateProduct = async (req, res, next) => {
  try {
    let product = await Product.findById(req.query.id);

    if (!product) {
      return next(new ErrorHandler("Product not found.", 404));
    }

    product = await Product.findByIdAndUpdate(req.query.id, req.body);

    res.status(200).json({
      product,
    });
  } catch (error) {
    console.error("Error updating product:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const deleteProduct = async (req, res, next) => {
  try {
    let product = await Product.findById(req.query.id);

    if (!product) {
      return next(new ErrorHandler("Product not found.", 404));
    }

    // Deleting images associated with the product
    for (let i = 0; i < product.images.length; i++) {
      const res = await cloudinary.v2.uploader.destroy(
        product.images[i].public_id
      );
    }

    await product.deleteOne();

    res.status(200).json({
      success: true,
    });
  } catch (error) {
    console.error("Error deleting product:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const createProductReview = async (req, res, next) => {
  try {
    const { rating, comment, productId } = req.body;

    const review = {
      user: req?.user?._id,
      rating: Number(rating),
      comment,
    };

    let product = await Product.findById(productId);

    if (!product) {
      return next(new ErrorHandler("Product not found.", 404));
    }

    const isReviewed = product?.reviews?.find(
      (r) => r.user.toString() === req.user._id.toString()
    );

    if (isReviewed) {
      product?.reviews.forEach((review) => {
        if (review.user.toString() === req.user._id.toString()) {
          review.comment = comment;
          review.rating = rating;
        }
      });
    } else {
      product?.reviews.push(review);
    }

    product.ratings =
      product?.reviews?.reduce((acc, item) => item.rating + acc, 0) /
      product.reviews.length;

    await product?.save();

    res.status(200).json({
      success: true,
    });
  } catch (error) {
    console.error("Error creating product review:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
