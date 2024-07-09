const pool = require("../database/connectdb");

const getAllProvince = async () => {
  try {
    const [rows] = await pool.query("SELECT * FROM province");
    return rows;
  } catch (err) {
    console.error("Error fetching all provinces:", err);
    throw err;
  }
};

const createProvince = async (name) => {
  try {
    const [result] = await pool.query(
      "INSERT INTO province (name) VALUES (?)",
      [name]
    );
    const [rows] = await pool.query("SELECT * FROM province WHERE id = ?", [
      result.insertId,
    ]);
    return rows[0];
  } catch (err) {
    console.error("Error creating province:", err);
    throw err;
  }
};
// update
const updateProvince = async (id, name) => {
  try {
    await pool.query("UPDATE province SET name = ? WHERE id = ?", [name, id]);
    const [rows] = await pool.query("SELECT * FROM province WHERE id = ?", [
      id,
    ]);
    return rows[0];
  } catch (err) {
    console.error("Error updating province:", err);
    throw err;
  }
};

const deleteProvince = async (id) => {
  try {
    const [result] = await pool.query("DELETE FROM province WHERE id = ?", [
      id,
    ]);
    return result.affectedRows > 0;
  } catch (err) {
    console.error("Error deleting province:", err);
    throw err;
  }
};

const getAllProvinceIds = async () => {
  try {
    const [rows] = await pool.query("SELECT id FROM province");
    return rows.map((row) => row.id);
  } catch (err) {
    console.error("Error fetching all province IDs:", err);
    throw err;
  }
};

module.exports = {
  getAllProvince,
  createProvince,
  updateProvince,
  deleteProvince,
  getAllProvinceIds,
};
