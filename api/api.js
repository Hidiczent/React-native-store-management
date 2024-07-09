// const express = require('express');
// const bodyParser = require('body-parser');
// const pool = require('./connectdb');

// const app = express();
// const port = 3000;

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// // Basic route
// app.get('/', (req, res) => {
//   res.send('Welcome to the Cosmetics Store API');
// });

// // CRUD operations for Brand
// app.get('/brands', async (req, res) => {
//   try {
//     const result = await pool.query('SELECT * FROM Brand');
//     res.status(200).json(result.rows);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// app.post('/brands', async (req, res) => {
//   const { name } = req.body;
//   try {
//     const result = await pool.query('INSERT INTO Brand (name) VALUES ($1) RETURNING *', [name]);
//     res.status(201).json(result.rows[0]);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// app.put('/brands/:id', async (req, res) => {
//   const { id } = req.params;
//   const { name } = req.body;
//   try {
//     const result = await pool.query('UPDATE Brand SET name = $1 WHERE id = $2 RETURNING *', [name, id]);
//     res.status(200).json(result.rows[0]);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// app.delete('/brands/:id', async (req, res) => {
//   const { id } = req.params;
//   try {
//     await pool.query('DELETE FROM Brand WHERE id = $1', [id]);
//     res.status(204).send();
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// // CRUD operations for Product Category
// app.get('/product-categories', async (req, res) => {
//   try {
//     const result = await pool.query('SELECT * FROM ProductCategory');
//     res.status(200).json(result.rows);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// app.post('/product-categories', async (req, res) => {
//   const { name } = req.body;
//   try {
//     const result = await pool.query('INSERT INTO ProductCategory (name) VALUES ($1) RETURNING *', [name]);
//     res.status(201).json(result.rows[0]);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// app.put('/product-categories/:id', async (req, res) => {
//   const { id } = req.params;
//   const { name } = req.body;
//   try {
//     const result = await pool.query('UPDATE ProductCategory SET name = $1 WHERE id = $2 RETURNING *', [name, id]);
//     res.status(200).json(result.rows[0]);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// app.delete('/product-categories/:id', async (req, res) => {
//   const { id } = req.params;
//   try {
//     await pool.query('DELETE FROM ProductCategory WHERE id = $1', [id]);
//     res.status(204).send();
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// // CRUD operations for Cosmetics Store
// app.get('/cosmetics-stores', async (req, res) => {
//   try {
//     const result = await pool.query('SELECT * FROM CosmeticsStore');
//     res.status(200).json(result.rows);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// app.post('/cosmetics-stores', async (req, res) => {
//   const { name, address, email, phone, check_out_time, check_in_time } = req.body;
//   try {
//     const result = await pool.query(
//       'INSERT INTO CosmeticsStore (name, address, email, phone, check_out_time, check_in_time) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
//       [name, address, email, phone, check_out_time, check_in_time]
//     );
//     res.status(201).json(result.rows[0]);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// app.put('/cosmetics-stores/:id', async (req, res) => {
//   const { id } = req.params;
//   const { name, address, email, phone, check_out_time, check_in_time } = req.body;
//   try {
//     const result = await pool.query(
//       'UPDATE CosmeticsStore SET name = $1, address = $2, email = $3, phone = $4, check_out_time = $5, check_in_time = $6 WHERE id = $7 RETURNING *',
//       [name, address, email, phone, check_out_time, check_in_time, id]
//     );
//     res.status(200).json(result.rows[0]);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// app.delete('/cosmetics-stores/:id', async (req, res) => {
//   const { id } = req.params;
//   try {
//     await pool.query('DELETE FROM CosmeticsStore WHERE id = $1', [id]);
//     res.status(204).send();
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// // CRUD operations for Product
// app.get('/products', async (req, res) => {
//   try {
//     const result = await pool.query('SELECT * FROM Product');
//     res.status(200).json(result.rows);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// app.post('/products', async (req, res) => {
//   const { name, amount, purchase_price, sale_price, brand_id, category_id, is_delete, deleted_at, store_id } = req.body;
//   try {
//     const result = await pool.query(
//       'INSERT INTO Product (name, amount, purchase_price, sale_price, brand_id, category_id, is_delete, deleted_at, store_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *',
//       [name, amount, purchase_price, sale_price, brand_id, category_id, is_delete, deleted_at, store_id]
//     );
//     res.status(201).json(result.rows[0]);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// app.put('/products/:id', async (req, res) => {
//   const { id } = req.params;
//   const { name, amount, purchase_price, sale_price, brand_id, category_id, is_delete, deleted_at, store_id } = req.body;
//   try {
//     const result = await pool.query(
//       'UPDATE Product SET name = $1, amount = $2, purchase_price = $3, sale_price = $4, brand_id = $5, category_id = $6, is_delete = $7, deleted_at = $8, store_id = $9 WHERE id = $10 RETURNING *',
//       [name, amount, purchase_price, sale_price, brand_id, category_id, is_delete, deleted_at, store_id, id]
//     );
//     res.status(200).json(result.rows[0]);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// app.delete('/products/:id', async (req, res) => {
//   const { id } = req.params;
//   try {
//     await pool.query('DELETE FROM Product WHERE id = $1', [id]);
//     res.status(204).send();
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// // CRUD operations for Import Product
// app.get('/import-products', async (req, res) => {
//   try {
//     const result = await pool.query('SELECT * FROM ImportProduct');
//     res.status(200).json(result.rows);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// app.post('/import-products', async (req, res) => {
//   const { product_id, amount, price, total_price, date_of_import, user_id } = req.body;
//   try {
//     const result = await pool.query(
//       'INSERT INTO ImportProduct (product_id, amount, price, total_price, date_of_import, user_id) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
//       [product_id, amount, price, total_price, date_of_import, user_id]
//     );
//     res.status(201).json(result.rows[0]);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// app.put('/import-products/:id', async (req, res) => {
//   const { id } = req.params;
//   const { product_id, amount, price, total_price, date_of_import, user_id } = req.body;
//   try {
//     const result = await pool.query(
//       'UPDATE ImportProduct SET product_id = $1, amount = $2, price = $3, total_price = $4, date_of_import = $5, user_id = $6 WHERE id = $7 RETURNING *',
//       [product_id, amount, price, total_price, date_of_import, user_id, id]
//     );
//     res.status(200).json(result.rows[0]);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// app.delete('/import-products/:id', async (req, res) => {
//   const { id } = req.params;
//   try {
//     await pool.query('DELETE FROM ImportProduct WHERE id = $1', [id]);
//     res.status(204).send();
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// // CRUD operations for Product Sale
// app.get('/product-sales', async (req, res) => {
//   try {
//     const result = await pool.query('SELECT * FROM ProductSale');
//     res.status(200).json(result.rows);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// app.post('/product-sales', async (req, res) => {
//   const { product_id, paytype, amount, price, total_price, bank, user_id } = req.body;
//   try {
//     const result = await pool.query(
//       'INSERT INTO ProductSale (product_id, paytype, amount, price, total_price, bank, user_id) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
//       [product_id, paytype, amount, price, total_price, bank, user_id]
//     );
//     res.status(201).json(result.rows[0]);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// app.put('/product-sales/:id', async (req, res) => {
//   const { id } = req.params;
//   const { product_id, paytype, amount, price, total_price, bank, user_id } = req.body;
//   try {
//     const result = await pool.query(
//       'UPDATE ProductSale SET product_id = $1, paytype = $2, amount = $3, price = $4, total_price = $5, bank = $6, user_id = $7 WHERE id = $8 RETURNING *',
//       [product_id, paytype, amount, price, total_price, bank, user_id, id]
//     );
//     res.status(200).json(result.rows[0]);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// app.delete('/product-sales/:id', async (req, res) => {
//   const { id } = req.params;
//   try {
//     await pool.query('DELETE FROM ProductSale WHERE id = $1', [id]);
//     res.status(204).send();
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// // CRUD operations for Users
// app.get('/users', async (req, res) => {
//   try {
//     const result = await pool.query('SELECT * FROM Users');
//     res.status(200).json(result.rows);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// app.post('/users', async (req, res) => {
//   const { first_name, email, last_name, password, gender, birth_day, phone, roles, village, is_delete, deleted_at, district_id, store_id } = req.body;
//   try {
//     const result = await pool.query(
//       'INSERT INTO Users (first_name, email, last_name, password, gender, birth_day, phone, roles, village, is_delete, deleted_at, district_id, store_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13) RETURNING *',
//       [first_name, email, last_name, password, gender, birth_day, phone, roles, village, is_delete, deleted_at, district_id, store_id]
//     );
//     res.status(201).json(result.rows[0]);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// app.put('/users/:id', async (req, res) => {
//   const { id } = req.params;
//   const { first_name, email, last_name, password, gender, birth_day, phone, roles, village, is_delete, deleted_at, district_id, store_id } = req.body;
//   try {
//     const result = await pool.query(
//       'UPDATE Users SET first_name = $1, email = $2, last_name = $3, password = $4, gender = $5, birth_day = $6, phone = $7, roles = $8, village = $9, is_delete = $10, deleted_at = $11, district_id = $12, store_id = $13 WHERE id = $14 RETURNING *',
//       [first_name, email, last_name, password, gender, birth_day, phone, roles, village, is_delete, deleted_at, district_id, store_id, id]
//     );
//     res.status(200).json(result.rows[0]);
//   } catch (err) {
//     res.status500).json(err);
//   }
// });

// app.delete('/users/:id', async (req, res) => {
//   const { id } = req.params;
//   try {
//     await pool.query('DELETE FROM Users WHERE id = $1', [id]);
//     res.status(204).send();
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// // CRUD operations for Guest
// app.get('/guests', async (req, res) => {
//   try {
//     const result = await pool.query('SELECT * FROM Guest');
//     res.status(200).json(result.rows);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// app.post('/guests', async (req, res) => {
//   const { first_name, last_name, email, phone, birth_day, is_delete, deleted_at, store_id } = req.body;
//   try {
//     const result = await pool.query(
//       'INSERT INTO Guest (first_name, last_name, email, phone, birth_day, is_delete, deleted_at, store_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *',
//       [first_name, last_name, email, phone, birth_day, is_delete, deleted_at, store_id]
//     );
//     res.status(201).json(result.rows[0]);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// app.put('/guests/:id', async (req, res) => {
//   const { id } = req.params;
//   const { first_name, last_name, email, phone, birth_day, is_delete, deleted_at, store_id } = req.body;
//   try {
//     const result = await pool.query(
//       'UPDATE Guest SET first_name = $1, last_name = $2, email = $3, phone = $4, birth_day = $5, is_delete = $6, deleted_at = $7, store_id = $8 WHERE id = $9 RETURNING *',
//       [first_name, last_name, email, phone, birth_day, is_delete, deleted_at, store_id, id]
//     );
//     res.status(200).json(result.rows[0]);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// app.delete('/guests/:id', async (req, res) => {
//   const { id } = req.params;
//   try {
//     await pool.query('DELETE FROM Guest WHERE id = $1', [id]);
//     res.status(204).send();
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// // CRUD operations for District
// app.get('/districts', async (req, res) => {
//   try {
//     const result = await pool.query('SELECT * FROM District');
//     res.status(200).json(result.rows);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// app.post('/districts', async (req, res) => {
//   const { name, province_id } = req.body;
//   try {
//     const result = await pool.query(
//       'INSERT INTO District (name, province_id) VALUES ($1, $2) RETURNING *',
//       [name, province_id]
//     );
//     res.status(201).json(result.rows[0]);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// app.put('/districts/:id', async (req, res) => {
//   const { id } = req.params;
//   const { name, province_id } = req.body;
//   try {
//     const result = await pool.query(
//       'UPDATE District SET name = $1, province_id = $2 WHERE id = $3 RETURNING *',
//       [name, province_id, id]
//     );
//     res.status(200).json(result.rows[0]);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// app.delete('/districts/:id', async (req, res) => {
//   const { id } = req.params;
//   try {
//     await pool.query('DELETE FROM District WHERE id = $1', [id]);
//     res.status(204).send();
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// // CRUD operations for Province
// app.get('/provinces', async (req, res) => {
//   try {
//     const result = await pool.query('SELECT * FROM Province');
//     res.status(200).json(result.rows);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// app.post('/provinces', async (req, res) => {
//   const { name } = req.body;
//   try {
//     const result = await pool.query('INSERT INTO Province (name) VALUES ($1) RETURNING *', [name]);
//     res.status(201).json(result.rows[0]);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// app.put('/provinces/:id', async (req, res) => {
//   const { id } = req.params;
//   const { name } = req.body;
//   try {
//     const result = await pool.query('UPDATE Province SET name = $1 WHERE id = $2 RETURNING *', [name, id]);
//     res.status(200).json(result.rows[0]);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// app.delete('/provinces/:id', async (req, res) => {
//   const { id } = req.params;
//   try {
//     await pool.query('DELETE FROM Province WHERE id = $1', [id]);
//     res.status(204).send();
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// // Start the server
// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });
