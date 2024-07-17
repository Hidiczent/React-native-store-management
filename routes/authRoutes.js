const express = require("express");
const router = express.Router();
const authController = require("../controllers/userController");

// Register new user
router.post("/register", authController.createUser);

// Login user
router.post("/login", authController.loginUser);

module.exports = router;
