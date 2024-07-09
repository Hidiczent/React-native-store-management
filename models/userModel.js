const pool = require('../database/connectdb');

const getAllUsers = async () => {
  try {
    const [rows] = await pool.query('SELECT * FROM users');
    return rows;
  } catch (err) {
    console.error('Error fetching all users:', err);
    throw err;
  }
};

const createUser = async (user) => {
  const {
    first_name, email, last_name, password, gender,
    birth_day, phone, roles, village, is_delete,
    deleted_at, district_id, store_id
  } = user;

  try {
    const [result] = await pool.query(
      'INSERT INTO users (first_name, email, last_name, password, gender, birth_day, phone, roles, village, is_delete, deleted_at, district_id, store_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
      [first_name, email, last_name, password, gender, birth_day, phone, roles, village, is_delete, deleted_at, district_id, store_id]
    );
    const [rows] = await pool.query('SELECT * FROM users WHERE id = ?', [result.insertId]);
    return rows[0];
  } catch (err) {
    console.error('Error creating user:', err);
    throw err;
  }
};

const updateUser = async (id, user) => {
  const {
    first_name, email, last_name, password, gender,
    birth_day, phone, roles, village, is_delete,
    deleted_at, district_id, store_id
  } = user;

  try {
    await pool.query(
      'UPDATE users SET first_name = ?, email = ?, last_name = ?, password = ?, gender = ?, birth_day = ?, phone = ?, roles = ?, village = ?, is_delete = ?, deleted_at = ?, district_id = ?, store_id = ? WHERE id = ?',
      [first_name, email, last_name, password, gender, birth_day, phone, roles, village, is_delete, deleted_at, district_id, store_id, id]
    );
    const [rows] = await pool.query('SELECT * FROM users WHERE id = ?', [id]);
    return rows[0];
  } catch (err) {
    console.error('Error updating user:', err);
    throw err;
  }
};

const deleteUser = async (id) => {
  try {
    const [result] = await pool.query('DELETE FROM users WHERE id = ?', [id]);
    return result.affectedRows > 0;
  } catch (err) {
    console.error('Error deleting user:', err);
    throw err;
  }
};

module.exports = {
  getAllUsers,
  createUser,
  updateUser,
  deleteUser,
};
