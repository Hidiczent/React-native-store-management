const Productcategory = require("../models/productCategoryModel");

const getAllProductCategory = async (req, res) => {
  try {
    const productcategory = await Productcategory.getAllProductCategory();
    res.status(200).json(productcategory);
  } catch (err) {
    console.error("Error getting all productcategory:", err);
    res.status(500).json({ error: err.message });
  }
};

const getAllProductCategoryIds = async (req, res) => {
  try {
    const productcategoryIds = await Productcategory.getAllProductCategoryIds();
    res.status(200).json(productcategoryIds);
  } catch (err) {
    console.error("Error getting all productcategory IDs:", err);
    res.status(500).json({ error: err.message });
  }
};

const createProductCategory = async (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ error: "Name is required" });
  }
  try {
    const productcategory = await Productcategory.createProductCategory(name);
    res.status(201).json(productcategory);
  } catch (err) {
    console.error("Error creating brand:", err);
    res.status(500).json({ error: err.message });
  }
};

const updateProductCategory = async (req, res) => {
  const { id, name } = req.body;
  if (!id || !name) {
    return res.status(400).json({ error: "ID and name are required" });
  }
  try {
    const productcategory = await Productcategory.updateBrand(id, name);
    res.status(200).json(productcategory);
  } catch (err) {
    console.error("Error updating productcategory:", err);
    res.status(500).json({ error: err.message });
  }
};

const deleteProductCategory = async (req, res) => {
  const { id } = req.body;
  if (!id) {
    return res.status(400).json({ error: "ID is required" });
  }
  try {
    const success = await Productcategory.deleteProductCategory(id);
    if (success) {
      res
        .status(200)
        .json({ message: "ProductCategory  deleted successfully" });
    } else {
      res.status(404).json({ message: "ProductCategory  not found" });
    }
  } catch (err) {
    console.error("Error deleting ProductCategory :", err);
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getAllProductCategory,
  getAllProductCategoryIds,
  createProductCategory,
  updateProductCategory,
  deleteProductCategory,
};
