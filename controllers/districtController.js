const districtModel = require("../models/districtModel");

// Handler for fetching all districts
const getAllDistrict = async (req, res) => {
  try {
    const districts = await districtModel.getAllDistrict();
    res.json(districts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Handler for creating a new district
const createDistrict = async (req, res) => {
  const { name, province_id } = req.body;
  try {
    const district = await districtModel.createDistrict(name, province_id);
    res.json({ message: "District created successfully", district });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Handler for updating a district
const updateDistrict = async (req, res) => {
  const { id } = req.params;
  const { name, province_id } = req.body;
  try {
    const updatedDistrict = await districtModel.updateDistrict(id, name, province_id);
    if (updatedDistrict) {
      res.json({ message: "District updated successfully", updatedDistrict });
    } else {
      res.status(404).json({ message: "District not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Handler for deleting a district
const deleteDistrict = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await districtModel.deleteDistrict(id);
    if (deleted) {
      res.json({ message: "District deleted successfully" });
    } else {
      res.status(404).json({ message: "District not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Handler for fetching all district IDs
const getAllDistrictIds = async (req, res) => {
  try {
    const ids = await districtModel.getAllDistrictIds();
    res.json(ids);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllDistrict,
  createDistrict,
  updateDistrict,
  deleteDistrict,
  getAllDistrictIds,
};
