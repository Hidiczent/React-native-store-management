const pool = require('../database/connectdb');

const getAllBrands = async () => {
  try {
    const [rows] = await pool.query('SELECT * FROM Brand');
    return rows;
  } catch (err) {
    console.error('Error fetching all brands:', err);
    throw err;
  }
};

const createBrand = async (name) => {
  try {
    const [result] = await pool.query('INSERT INTO Brand (name) VALUES (?)', [name]);
    const [rows] = await pool.query('SELECT * FROM Brand WHERE id = ?', [result.insertId]);
    return rows[0];
  } catch (err) {
    console.error('Error creating brand:', err);
    throw err;
  }
};
// update
const updateBrand = async (id, name) => {
  try {
    await pool.query('UPDATE Brand SET name = ? WHERE id = ?', [name, id]);
    const [rows] = await pool.query('SELECT * FROM Brand WHERE id = ?', [id]);
    return rows[0];
  } catch (err) {
    console.error('Error updating brand:', err);
    throw err;
  }
};

const deleteBrand = async (id) => {
  try {
    const [result] = await pool.query('DELETE FROM Brand WHERE id = ?', [id]);
    return result.affectedRows > 0;
  } catch (err) {
    console.error('Error deleting brand:', err);
    throw err;
  }
};

const getAllBrandIds = async () => {
  try {
    const [rows] = await pool.query('SELECT id FROM Brand');
    return rows.map(row => row.id);
  } catch (err) {
    console.error('Error fetching all brand IDs:', err);
    throw err;
  }
};

module.exports = {
  getAllBrands,
  createBrand,
  updateBrand,
  deleteBrand,
  getAllBrandIds,
};
