const importProductModel = require("../models/importProductModel");

// Handler for fetching all import products
const getAllImportProducts = async (req, res) => {
  try {
    const products = await importProductModel.getAllImportProducts();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Handler for creating a new import product

// Handler for creating a new import product
const createImportProduct = async (req, res) => {
  try {
    console.log(req.body); // Debugging: Log the request body to verify `user_id` is present
    const product = await importProductModel.createImportProduct(req.body);
    res.json({ message: 'Import product created successfully', product });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createImportProduct,
  // Other controller methods...
};

// Handler for updating an import product
const updateImportProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedProduct = await importProductModel.updateImportProduct(
      id,
      req.body
    );
    res.json({
      message: "Import product updated successfully",
      updatedProduct,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Handler for deleting an import product
const deleteImportProduct = async (req, res) => {
  const { id } = req.params;
  try {
    await importProductModel.deleteImportProduct(id);
    res.json({ message: "Import product deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllImportProducts,
  createImportProduct,
  updateImportProduct,
  deleteImportProduct,
};
