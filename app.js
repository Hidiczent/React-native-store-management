// index.js
const express = require("express");
const app = express();
const port = 4200;
const cnnectdb = require("../my-app/database/connectdb");

const brandRoutes = require("./routes/brandRoutes");
const userRoutes = require("./routes/userRoutes");
const productcategoryRoutes = require("./routes/productCategoryRoutes");
const cosmeticsstoreRoustes = require("./routes/cosmeticsstoreRoustes");
const provinceRoustes = require("./routes/provinceRoutes");
// Middleware
app.use(express.json());
console.log(cnnectdb);

app.use("/brands", brandRoutes);
app.use("/users", userRoutes);
app.use("/productcategory", productcategoryRoutes);
app.use("/cosmetic", cosmeticsstoreRoustes);
app.use("/province", provinceRoustes);

app.get("/", (req, res) => {
  res.send("Server opened!");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
