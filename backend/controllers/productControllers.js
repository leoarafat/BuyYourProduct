import Product from "../models/productsModel";
import APIFilters from "../utils/APIFilters";

export const newProduct = async (req, res, next) => {
  const products = await Product.create(req.body);
  res.status(201).json({
    products,
  });
};

export const getProducts = async (req, res, next) => {
  const resPerPage = 2;
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
};
export const getProduct = async (req, res, next) => {
  const id = req.query.id;
  const product = await Product.findById(id);
  if (!product) {
    res.status(400).json({
      error: "Product not found. please try again",
    });
  }
  res.status(200).json({
    product,
  });
};
