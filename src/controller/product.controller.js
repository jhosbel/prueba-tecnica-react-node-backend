const Product = require("../models/product.model");

exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: "Error fetching products" });
  }
};
