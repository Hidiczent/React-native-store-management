const pool = require("../database/connectdb");

// Get all guest
const getAllGuest = async () => {
  try {
    const [rows] = await pool.query("SELECT * FROM guest ");
    return rows;
  } catch (err) {
    console.error("Error fetching all guest:", err);
    throw err;
  }
};

// Create a new user
const createGuest = async (user) => {
  const { first_name, last_name, email, phone, birth_day, store_id } = user;
  try {
    const [result] = await pool.query(
      "INSERT INTO guest (first_name, last_name, email, phone, birth_day, store_id) VALUES (?, ?, ?, ?, ?, ?)",
      [first_name, last_name, email, phone, birth_day, store_id]
    );
    const [rows] = await pool.query("SELECT * FROM guest WHERE id = ?", [
      result.insertId,
    ]);
    return rows[0];
  } catch (err) {
    console.error("Error creating user:", err);
    throw err;
  }
};

// Update an existing user
const updateGuest = async (id, user) => {
  const { first_name, last_name, email, phone, birth_day, store_id } = user;
  try {
    await pool.query(
      "UPDATE guest SET first_name = ?, last_name = ?, email = ?, phone = ?, birth_day = ?, store_id = ? WHERE id = ?",
      [first_name, last_name, email, phone, birth_day, store_id, id]
    );
    const [rows] = await pool.query("SELECT * FROM guest WHERE id = ?", [id]);
    return rows[0];
  } catch (err) {
    console.error("Error updating user:", err);
    throw err;
  }
};

// Soft delete a user
const deleteGuest = async (id) => {
  try {
    await pool.query(
      "UPDATE guest SET is_delete = 1, deleted_at = NOW() WHERE id = ?",
      [id]
    );
    return true;
  } catch (err) {
    console.error("Error deleting user:", err);
    throw err;
  }
};

module.exports = {
  getAllGuest,
  createGuest,
  updateGuest,
  deleteGuest,
};
