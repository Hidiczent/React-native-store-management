// guestController.js
const guestModel = require("../models/cosmeticsstoreModel");

const getAllCosmeticsstore = async (req, res) => {
  try {
    const getAllCosmeticsstore = await guestModel.getAllcosmeticsstore();
    res.status(200).json(getAllCosmeticsstore);
  } catch (err) {
    console.error("Error getting all guests:", err);
    res.status(500).json({ error: err.message });
  }
};

const getCosmeticsstoretIds = async (req, res) => {
  try {
    const getcosmeticsstoretIds = await guestModel.getAllcosmeticsstoreIds();
    res.status(200).json(getcosmeticsstoretIds);
  } catch (err) {
    console.error("Error getting all guest IDs:", err);
    res.status(500).json({ error: err.message });
  }
};

const Createcosmeticsstore = async (req, res) => {
  const { name, address, email, phone, check_in_time, check_out_time } =
    req.body;
  if (!name) {
    return res.status(400).json({ error: "Name is required" });
  }
  try {
    const createcos = await guestModel.Createcosmeticsstore({
      name,
      address,
      email,
      phone,
      check_in_time,
      check_out_time,
    });
    res.status(201).json(createcos);
  } catch (err) {
    console.error("Error creating guest:", err);
    res.status(500).json({ error: err.message });
  }
};

const updatecosmeticsstore = async (req, res) => {
  const {id} = req.params
  const { name, address, email, phone, check_in_time, check_out_time } =
    req.body;
  if (!id || !name) {
    return res.status(400).json({ error: "ID and name are required" });
  }
  try {
    const updatecos = await guestModel.updatecosmeticsstore(id, {
      name,
      address,
      email,
      phone,
      check_in_time,
      check_out_time,
    });
    res.status(200).json(updatecos);
  } catch (err) {
    console.error("Error updating guest:", err);
    res.status(500).json({ error: err.message });
  }
};

const deletecosmeticsstore = async (req, res) => {
  const { id } = req.body;
  if (!id) {
    return res.status(400).json({ error: "ID is required" });
  }
  try {
    const success = await guestModel.deletecosmeticsstore(id);
    if (success) {
      res.status(200).json({ message: "Guest deleted successfully" });
    } else {
      res.status(404).json({ message: "Guest not found" });
    }
  } catch (err) {
    console.error("Error deleting guest:", err);
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getAllCosmeticsstore,
  getCosmeticsstoretIds,
  Createcosmeticsstore,
  updatecosmeticsstore,
  deletecosmeticsstore,
};
