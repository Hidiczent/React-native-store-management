const guestModel = require("../models/guestModel");

// Handler for fetching all users
const getAllGuest = async (req, res) => {
  try {
    const guest = await guestModel.getAllGuest();
    res.json(guest);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Handler for creating a new user
const createGuest = async (req, res) => {
  try {
    const guest = await guestModel.createGuest(req.body);
    res.json({ message: "User created successfully", guest });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Handler for updating a user
const updateGuest = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedguest = await guestModel.updateGuest(id, req.body);
    res.json({ message: "User updated successfully", updatedguest });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Handler for deleting a user
const deleteGuest = async (req, res) => {
  const { id } = req.params;
  try {
    await guestModel.deleteGuest(id);
    res.json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllGuest,
  createGuest,
  updateGuest,
  deleteGuest,
};
