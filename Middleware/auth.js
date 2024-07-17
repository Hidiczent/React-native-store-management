const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const secret = process.env.JWT_SECRET;

const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  console.log(`Original password: ${password}, Hashed password: ${hashedPassword}`);
  return hashedPassword;
};

const comparePassword = async (password, hashedPassword) => {
  const isMatch = await bcrypt.compare(password, hashedPassword);
  console.log(`Comparing password: ${password} with hashedPassword: ${hashedPassword}, Result: ${isMatch}`);
  return isMatch;
};

const generateToken = (user) => {
  return jwt.sign({ id: user.id, email: user.email }, secret, {
    expiresIn: "1h",
  });
};

module.exports = {
  hashPassword,
  comparePassword,
  generateToken,
};
