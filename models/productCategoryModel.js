const pool = require('../database/connectdb');

const getAllProductCategory = async () => {
  try {
    const [rows] = await pool.query('SELECT * FROM Productcategory');
    return rows;
  } catch (err) {
    console.error('Error fetching all Productcategory:', err);
    throw err;
  }
};

const createProductCategory = async (name) => {
  try {
    const [result] = await pool.query('INSERT INTO Productcategory (name) VALUES (?)', [name]);
    const [rows] = await pool.query('SELECT * FROM Productcategory WHERE id = ?', [result.insertId]);
    return rows[0];
  } catch (err) {
    console.error('Error creating Productcategory:', err);
    throw err;
  }
};
// update
const updateProductCategory= async (id, name) => {
  try {
    await pool.query('UPDATE Productcategory SET name = ? WHERE id = ?', [name, id]);
    const [rows] = await pool.query('SELECT * FROM Productcategory WHERE id = ?', [id]);
    return rows[0];
  } catch (err) {
    console.error('Error updating Productcategory:', err);
    throw err;
  }
};

const deleteProductCategory= async (id) => {
  try {
    const [result] = await pool.query('DELETE FROM Productcategory WHERE id = ?', [id]);
    return result.affectedRows > 0;
  } catch (err) {
    console.error('Error deleting Productcategory:', err);
    throw err;
  }
};

const getAllProductCategoryIds = async () => {
  try {
    const [rows] = await pool.query('SELECT id FROM Productcategory');
    return rows.map(row => row.id);
  } catch (err) {
    console.error('Error fetching all Productcategory IDs:', err);
    throw err;
  }
};

module.exports = {
    getAllProductCategory,
    createProductCategory,
    updateProductCategory,
    deleteProductCategory,
    getAllProductCategoryIds,
};
