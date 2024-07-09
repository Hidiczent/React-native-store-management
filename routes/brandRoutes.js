const express = require('express');
const router = express.Router();
const brandController = require('../controllers/brandController');

router.get('/', brandController.getAllBrands); // Get all brands
router.get('/:id', brandController.getBrandsId); // Get only brand IDs
router.post('/', brandController.createBrand); // Create a new brand
router.put('/', brandController.updateBrand); // Update an existing brand
router.delete('/', brandController.deleteBrand); // Delete a brand

module.exports = router;
