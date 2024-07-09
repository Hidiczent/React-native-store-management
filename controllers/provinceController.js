const provinceModel = require("../models/provinceModel");

const getAllProvince = async (req, res) => {
  try {
    const province = await provinceModel.getAllProvince();
    res.status(200).json(province);
  } catch (err) {
    console.error("Error getting all brands:", err);
    res.status(500).json({ error: err.message });
  }
};

const getProvinceId = async (req, res) => {
  try {
    const provinceIds = await provinceModel.getAllProvinceIds();
    res.status(200).json(provinceIds);
  } catch (err) {
    console.error("Error getting all brand IDs:", err);
    res.status(500).json({ error: err.message });
  }
};

const createProvince = async (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ error: "Name is required" });
  }
  try {
    const porovince = await provinceModel.createProvince(name);
    res.status(201).json(porovince);
  } catch (err) {
    console.error("Error creating brand:", err);
    res.status(500).json({ error: err.message });
  }
};

const updateProvince = async (req, res) => {
  const {id} =  req.params
  const {name} = req.body;
  if (!id || !name) {
    return res.status(400).json({ error: "ID and name are required" });
  }
  try {
    const porovince = await provinceModel.updateProvince(id, name);
    res.status(200).json(porovince);
  } catch (err) {
    console.error("Error updating brand:", err);
    res.status(500).json({ error: err.message });
  }
};

const deleteProvince = async (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res.status(400).json({ error: "ID is required" });
  }
  try {
    const success = await provinceModel.deleteProvince(id);
    if (success) {
      res.status(200).json({ message: "Brand deleted successfully" });
    } else {
      res.status(404).json({ message: "Brand not found" });
    }
  } catch (err) {
    console.error("Error deleting brand:", err);
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getAllProvince,
  getProvinceId,
  createProvince,
  updateProvince,
  deleteProvince,
};
