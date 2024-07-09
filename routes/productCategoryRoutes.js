const express = require("express");
const router = express.Router();
const productCategoryControllers = require("../controllers/productCategoryController");

router.get("/", productCategoryControllers.getAllProductCategory); // Get all brands
router.get("/:id", productCategoryControllers.getAllProductCategoryIds); // Get only brand IDs
router.post("/", productCategoryControllers.createProductCategory); // Create a new brand
router.put("/", productCategoryControllers.updateProductCategory); // Update an existing brand
router.delete("/", productCategoryControllers.deleteProductCategory); // Delete a brand

module.exports = router;
