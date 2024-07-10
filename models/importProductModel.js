const pool = require("../database/connectdb");

// Get all import products
const getAllImportProducts = async () => {
  try {
    const [rows] = await pool.query("SELECT * FROM importproduct");
    return rows;
  } catch (err) {
    console.error("Error fetching all import products:", err);
    throw err;
  }
};

// Create a new import product
const createImportProduct = async (product) => {
  const { product_id, amount, price, total_price, user_id } = product;
  try {
    const [result] = await pool.query(
      "INSERT INTO importproduct (product_id, amount, price, total_price, date_of_import, user_id) VALUES (?, ?, ?, ?, NOW(), ?)",
      [product_id, amount, price, total_price, user_id]
    );
    const [rows] = await pool.query(
      "SELECT * FROM importproduct WHERE id = ?",
      [result.insertId]
    );
    return rows[0];
  } catch (err) {
    console.error("Error creating import product:", err);
    throw err;
  }
};
// Update an existing import product
const updateImportProduct = async (id, product) => {
  const { product_id, amount, price, total_price, date_of_import, user_id } =
    product;
  try {
    await pool.query(
      "UPDATE importproduct SET product_id = ?, amount = ?, price = ?, total_price = ?, date_of_import = ?, user_id = ? WHERE id = ?",
      [product_id, amount, price, total_price, date_of_import, user_id, id]
    );
    const [rows] = await pool.query(
      "SELECT * FROM importproduct WHERE id = ?",
      [id]
    );
    return rows[0];
  } catch (err) {
    console.error("Error updating import product:", err);
    throw err;
  }
};

// Delete an import product
const deleteImportProduct = async (id) => {
  try {
    await pool.query("DELETE FROM importproduct WHERE id = ?", [id]);
    return true;
  } catch (err) {
    console.error("Error deleting import product:", err);
    throw err;
  }
};

module.exports = {
  getAllImportProducts,
  createImportProduct,
  updateImportProduct,
  deleteImportProduct,
};
