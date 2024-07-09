// guestModel.js
const pool = require("../database/connectdb");

const getAllcosmeticsstore = async () => {
  try {
    const [rows] = await pool.query("SELECT * FROM cosmeticsstore");
    return rows;
  } catch (err) {
    console.error("Error fetching all cosmeticsstore:", err);
    throw err;
  }
};

const Createcosmeticsstore = async ({
  name,
  address,
  email,
  phone,
  check_in_time,
  check_out_time,
}) => {
  try {
    const [result] = await pool.query(
      "INSERT INTO cosmeticsstore (name, address, email, phone, check_in_time, check_out_time) VALUES (?, ?, ?, ?, ?, ?)",
      [name, address, email, phone, check_in_time, check_out_time]
    );
    const [rows] = await pool.query(
      "SELECT * FROM cosmeticsstore WHERE id = ?",
      [result.insertId]
    );
    return rows[0];
  } catch (err) {
    console.error("Error creating guest:", err);
    throw err;
  }
};

const updatecosmeticsstore = async (
  id,
  { name, address, email, phone, check_in_time, check_out_time }
) => {
  try {
    await pool.query(
      "UPDATE cosmeticsstore SET name = ?, address = ?, email = ?, phone = ?, check_in_time = ?, check_out_time = ? WHERE id = ?",
      [name, address, email, phone, check_in_time, check_out_time, id]
    );
    const [rows] = await pool.query(
      "SELECT * FROM cosmeticsstore WHERE id = ?",
      [id]
    );
    return rows[0];
  } catch (err) {
    console.error("Error updating guest:", err);
    throw err;
  }
};

const deletecosmeticsstore = async (id) => {
  try {
    const [result] = await pool.query(
      "DELETE FROM cosmeticsstore WHERE id = ?",
      [id]
    );
    return result.affectedRows > 0;
  } catch (err) {
    console.error("Error deleting guest:", err);
    throw err;
  }
};

const getAllcosmeticsstoreIds = async () => {
  try {
    const [rows] = await pool.query("SELECT id FROM cosmeticsstore");
    return rows.map((row) => row.id);
  } catch (err) {
    console.error("Error fetching all guest IDs:", err);
    throw err;
  }
};

module.exports = {
  getAllcosmeticsstore,
  Createcosmeticsstore,
  updatecosmeticsstore,
  deletecosmeticsstore,
  getAllcosmeticsstoreIds,
};
