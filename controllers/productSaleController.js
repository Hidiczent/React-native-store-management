const productsaleModel = require("../models/productSaleModel");

// Handler for fetching all productsales
const getAllProductSales = async (req, res) => {
  try {
    const productsales = await productsaleModel.getAllProductSales();
    res.json(productsales);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Handler for creating a new productsale
const createProductSale = async (req, res) => {
  try {
    const productsale = await productsaleModel.createProductSale(req.body);
    res.json({ message: "Product sale created successfully", productsale });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Handler for updating a productsale
const updateProductSale = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedProductSale = await productsaleModel.updateProductSale(
      id,
      req.body
    );
    res.json({
      message: "Product sale updated successfully",
      updatedProductSale,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Handler for deleting a productsale
const deleteProductSale = async (req, res) => {
  const { id } = req.params;
  try {
    await productsaleModel.deleteProductSale(id);
    res.json({ message: "Product sale deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllProductSales,
  createProductSale,
  updateProductSale,
  deleteProductSale,
};
