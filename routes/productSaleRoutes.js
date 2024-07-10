const express = require('express');
const router = express.Router();
const productsaleController = require('../controllers/productSaleController');

router.get('/', productsaleController.getAllProductSales);
router.post('/', productsaleController.createProductSale);
router.put('//:id', productsaleController.updateProductSale);
router.delete('//:id', productsaleController.deleteProductSale);

module.exports = router;
