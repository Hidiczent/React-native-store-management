const pool = require("../database/connectdb");

// Get all districts
const getAllDistrict = async () => {
  try {
    const [rows] = await pool.query("SELECT * FROM district");
    return rows;
  } catch (err) {
    console.error("Error fetching all districts:", err);
    throw err;
  }
};

// Create a new district
const createDistrict = async (name, province_id) => {
  try {
    const [result] = await pool.query(
      "INSERT INTO district (name, province_id) VALUES (?, ?)",
      [name, province_id]
    );
    const [rows] = await pool.query("SELECT * FROM district WHERE id = ?", [
      result.insertId,
    ]);
    return rows[0];
  } catch (err) {
    console.error("Error creating district:", err);
    throw err;
  }
};

// Update an existing district
const updateDistrict = async (id, name, province_id) => {
  try {
    await pool.query(
      "UPDATE district SET name = ?, province_id = ? WHERE id = ?",
      [name, province_id, id]
    );
    const [rows] = await pool.query("SELECT * FROM district WHERE id = ?", [
      id,
    ]);
    return rows[0];
  } catch (err) {
    console.error("Error updating district:", err);
    throw err;
  }
};

// Delete a district
const deleteDistrict = async (id) => {
  try {
    const [result] = await pool.query("DELETE FROM district WHERE id = ?", [
      id,
    ]);
    return result.affectedRows > 0;
  } catch (err) {
    console.error("Error deleting district:", err);
    throw err;
  }
};

// Get all district IDs
const getAllDistrictIds = async () => {
  try {
    const [rows] = await pool.query("SELECT id FROM district");
    return rows.map((row) => row.id);
  } catch (err) {
    console.error("Error fetching all district IDs:", err);
    throw err;
  }
};

module.exports = {
  getAllDistrict,
  createDistrict,
  updateDistrict,
  deleteDistrict,
  getAllDistrictIds,
};
