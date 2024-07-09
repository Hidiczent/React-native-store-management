const express = require("express");
const router = express.Router();
const Cosmeticsstore = require("../controllers/cosmeticsstoreController");

router.get("/", Cosmeticsstore.getAllCosmeticsstore); // Get all brands
router.get("/:id", Cosmeticsstore.getCosmeticsstoretIds); // Get only brand IDs
router.post("/", Cosmeticsstore.Createcosmeticsstore); // Create a new brand
router.put("/:id", Cosmeticsstore.updatecosmeticsstore); // Update an existing brand
router.delete("/", Cosmeticsstore.deletecosmeticsstore); // Delete a brand

module.exports = router;
