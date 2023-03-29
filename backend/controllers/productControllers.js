import Product from "../models/productsModel";

export const newProduct = async (req, res, next) => {
  const products = await Product.create(req.body);
  res.status(201).json({
    products,
  });
};

export const getProduct = async (req, res, next) => {
    const products = await Product.find();
    res.status(200).json({
      products,
    });
  };