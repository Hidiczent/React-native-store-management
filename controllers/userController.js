const userModel = require("../models/userModel");
const auth = require("../Middleware/auth");

const getAllUsers = async (req, res) => {
  try {
    const users = await userModel.getAllUsers();
    res.status(200).json(users);
  } catch (err) {
    console.error("Error getting all users:", err);
    res.status(500).json({ error: err.message });
  }
};

const createUser = async (req, res) => {
  const user = req.body;
  try {
    // Hash the password
    user.password = await auth.hashPassword(user.password);
    console.log(`Original password: ${req.body.password}, Hashed password: ${user.password}`); // Log original and hashed password

    // Create the user
    const newUser = await userModel.createUser(user);
    console.log(`User created with hashed password in DB: ${newUser.password}`); // Log hashed password from DB
    res.status(201).json(newUser);
  } catch (err) {
    console.error("Error creating user:", err);
    res.status(500).json({ error: err.message });
  }
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  const user = req.body;
  try {
    const updatedUser = await userModel.updateUser(id, user);
    res.status(200).json(updatedUser);
  } catch (err) {
    console.error("Error updating user:", err);
    res.status(500).json({ error: err.message });
  }
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const success = await userModel.deleteUser(id);
    if (success) {
      res.status(200).json({ message: "User deleted successfully" });
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (err) {
    console.error("Error deleting user:", err);
    res.status(500).json({ error: err.message });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    console.log(`Attempting login for email: ${email}`);
    const user = await userModel.getUserByEmail(email);
    if (!user) {
      console.log(`No user found for email: ${email}`);
      return res.status(400).json({ message: "Invalid email or password" });
    }

    console.log(`User found: ${user.email}`);
    console.log(`Stored hashed password: ${user.password}`);
    console.log(`Password from request: ${password}`);
    const validPassword = await auth.comparePassword(password, user.password);
    console.log(`Comparing password: ${password} with hashedPassword: ${user.password}, Result: ${validPassword}`);
    console.log(`Password valid: ${validPassword}`);

    if (!validPassword) {
      console.log("Password comparison failed");
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const token = auth.generateToken(user);
    res.json({ message: "Logged in successfully", token });
  } catch (error) {
    console.error(`Login error for email: ${email}`, error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllUsers,
  createUser,
  updateUser,
  deleteUser,
  loginUser,
};
