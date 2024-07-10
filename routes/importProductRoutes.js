const express = require('express');
const router = express.Router();
const importProductController = require('../controllers/importProductController');

// Get all import products
router.get('/', importProductController.getAllImportProducts);

// Create a new import product
router.post('/', importProductController.createImportProduct);

// Update an existing import product
router.put('/:id', importProductController.updateImportProduct);

// Delete an import product
router.delete('/:id', importProductController.deleteImportProduct);

module.exports = router;
