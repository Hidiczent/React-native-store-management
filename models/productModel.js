const pool = require("../database/connectdb");

// Get all products
const getAllProducts = async () => {
  try {
    const [rows] = await pool.query("SELECT * FROM product ");
    return rows;
  } catch (err) {
    console.error("Error fetching all products:", err);
    throw err;
  }
};

// Create a new product
const createProduct = async (product) => {
  const {
    name,
    amount,
    purchase_price,
    sale_price,
    brand_id,
    category_id,
    store_id,
  } = product;
  try {
    const [result] = await pool.query(
      "INSERT INTO product (name, amount, purchase_price, sale_price, brand_id, category_id, store_id) VALUES (?, ?, ?, ?, ?, ?, ?)",
      [
        name,
        amount,
        purchase_price,
        sale_price,
        brand_id,
        category_id,
        store_id,
      ]
    );
    const [rows] = await pool.query("SELECT * FROM product WHERE id = ?", [
      result.insertId,
    ]);
    return rows[0];
  } catch (err) {
    console.error("Error creating product:", err);
    throw err;
  }
};

// Update an existing product
const updateProduct = async (id, product) => {
  const {
    name,
    amount,
    purchase_price,
    sale_price,
    brand_id,
    category_id,
    store_id,
  } = product;
  try {
    await pool.query(
      "UPDATE product SET name = ?, amount = ?, purchase_price = ?, sale_price = ?, brand_id = ?, category_id = ?, store_id = ? WHERE id = ?",
      [
        name,
        amount,
        purchase_price,
        sale_price,
        brand_id,
        category_id,
        store_id,
        id,
      ]
    );
    const [rows] = await pool.query("SELECT * FROM product WHERE id = ?", [id]);
    return rows[0];
  } catch (err) {
    console.error("Error updating product:", err);
    throw err;
  }
};

// Soft delete a product
const deleteProduct = async (id) => {
  try {
    await pool.query(
      "UPDATE product SET is_delete = 1, deleted_at = NOW() WHERE id = ?",
      [id]
    );
    return true;
  } catch (err) {
    console.error("Error deleting product:", err);
    throw err;
  }
};

module.exports = {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
};
