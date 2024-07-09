const express = require("express");
const router = express.Router();
const provinceController = require("../controllers/provinceController");

router.get("/", provinceController.getAllProvince); // Get all brands
router.get("/:id", provinceController.getProvinceId); // Get only brand IDs
router.post("/", provinceController.createProvince); // Create a new brand
router.put("/:id", provinceController.updateProvince); // Update an existing brand
router.delete("/:id", provinceController.deleteProvince); // Delete a brand

module.exports = router;
