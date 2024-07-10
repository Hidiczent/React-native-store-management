const express = require("express");
const router = express.Router();
const districtController = require("../controllers/districtController");

// Route to get all districts
router.get("/", districtController.getAllDistrict);

// Route to create a new district
router.post("/", districtController.createDistrict);

// Route to update a district by ID
router.put("/:id", districtController.updateDistrict);

// Route to delete a district by ID
router.delete("/:id", districtController.deleteDistrict);

// Route to get all district IDs
router.get("/ids", districtController.getAllDistrictIds);

module.exports = router;
