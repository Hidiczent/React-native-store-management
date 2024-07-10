const productModel = require("../models/productModel");

// Handler for fetching all products
const getAllProducts = async (req, res) => {
  try {
    const products = await productModel.getAllProducts();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Handler for creating a new product
const createProduct = async (req, res) => {
  try {
    const product = await productModel.createProduct(req.body);
    res.json({ message: "Product created successfully", product });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Handler for updating a product
const updateProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedProduct = await productModel.updateProduct(id, req.body);
    res.json({ message: "Product updated successfully", updatedProduct });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Handler for deleting a product
const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    await productModel.deleteProduct(id);
    res.json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
};
