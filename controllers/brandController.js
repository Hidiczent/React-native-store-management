const brandModel = require('../models/brandModel');

const getAllBrands = async (req, res) => {
  try {
    const brands = await brandModel.getAllBrands();
    res.status(200).json(brands);
  } catch (err) {
    console.error('Error getting all brands:', err);
    res.status(500).json({ error: err.message });
  }
};

const getBrandsId = async (req, res) => {
  try {
    const brandIds = await brandModel.getAllBrandIds();
    res.status(200).json(brandIds);
  } catch (err) {
    console.error('Error getting all brand IDs:', err);
    res.status(500).json({ error: err.message });
  }
};

const createBrand = async (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ error: 'Name is required' });
  }
  try {
    const brand = await brandModel.createBrand(name);
    res.status(201).json(brand);
  } catch (err) {
    console.error('Error creating brand:', err);
    res.status(500).json({ error: err.message });
  }
};

const updateBrand = async (req, res) => {
  const { id, name } = req.body;
  if (!id || !name) {
    return res.status(400).json({ error: 'ID and name are required' });
  }
  try {
    const brand = await brandModel.updateBrand(id, name);
    res.status(200).json(brand);
  } catch (err) {
    console.error('Error updating brand:', err);
    res.status(500).json({ error: err.message });
  }
};

const deleteBrand = async (req, res) => {
  const { id } = req.body;
  if (!id) {
    return res.status(400).json({ error: 'ID is required' });
  }
  try {
    const success = await brandModel.deleteBrand(id);
    if (success) {
      res.status(200).json({ message: 'Brand deleted successfully' });
    } else {
      res.status(404).json({ message: 'Brand not found' });
    }
  } catch (err) {
    console.error('Error deleting brand:', err);
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getAllBrands,
  getBrandsId,
  createBrand,
  updateBrand,
  deleteBrand,
};
