const pool = require("../database/connectdb");

// Get all productsales
const getAllProductSales = async () => {
  try {
    const [rows] = await pool.query("SELECT * FROM productsale");
    return rows;
  } catch (err) {
    console.error("Error fetching all productsales:", err);
    throw err;
  }
};

// Create a new productsale
const createProductSale = async (productsale) => {
  const { product_id, paytype, amount, price, total_price, bank, user_id } =
    productsale;
  try {
    const [result] = await pool.query(
      "INSERT INTO productsale (product_id, paytype, amount, price, total_price, bank, user_id) VALUES (?, ?, ?, ?, ?, ?, ?)",
      [product_id, paytype, amount, price, total_price, bank, user_id]
    );
    const [rows] = await pool.query("SELECT * FROM productsale WHERE id = ?", [
      result.insertId,
    ]);
    return rows[0];
  } catch (err) {
    console.error("Error creating productsale:", err);
    throw err;
  }
};

// Update an existing productsale
const updateProductSale = async (id, productsale) => {
  const { product_id, paytype, amount, price, total_price, bank, user_id } =
    productsale;
  try {
    await pool.query(
      "UPDATE productsale SET product_id = ?, paytype = ?, amount = ?, price = ?, total_price = ?, bank = ?, user_id = ? WHERE id = ?",
      [product_id, paytype, amount, price, total_price, bank, user_id, id]
    );
    const [rows] = await pool.query("SELECT * FROM productsale WHERE id = ?", [
      id,
    ]);
    return rows[0];
  } catch (err) {
    console.error("Error updating productsale:", err);
    throw err;
  }
};

// Delete a productsale
const deleteProductSale = async (id) => {
  try {
    await pool.query("DELETE FROM productsale WHERE id = ?", [id]);
    return true;
  } catch (err) {
    console.error("Error deleting productsale:", err);
    throw err;
  }
};

module.exports = {
  getAllProductSales,
  createProductSale,
  updateProductSale,
  deleteProductSale,
};
