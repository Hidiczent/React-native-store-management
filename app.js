// index.js
const express = require("express");
const app = express();
const port = 4200;
const connectdb = require("../my-app/database/connectdb");
const env = require("dotenv").config();
const brandRoutes = require("./routes/brandRoutes");
const userRoutes = require("./routes/userRoutes");
const productcategoryRoutes = require("./routes/productCategoryRoutes");
const cosmeticsstoreRoustes = require("./routes/cosmeticsstoreRoustes");
const provinceRoutes = require("./routes/provinceRoutes");
const districeRoutes = require("./routes/districtRoutes");
const guestRoutes = require("./routes/guestRoutes");
const ImportProductRoutes = require("./routes/importProductRoutes");
const productRoutes = require("./routes/productRoutes");
const productsalesRoutes = require("./routes/productSaleRoutes");

const authRoutes = require("./routes/authRoutes");

app.use(express.json());
// app.use(env);
console.log(connectdb);

app.use("/brands", brandRoutes);
app.use("/users", userRoutes);
app.use("/productcategory", productcategoryRoutes);
app.use("/cosmetic", cosmeticsstoreRoustes);
app.use("/province", provinceRoutes);
app.use("/districe", districeRoutes);
app.use("/guest", guestRoutes);
app.use("/ImportProduct", ImportProductRoutes);
app.use("/product", productRoutes);
app.use("/productsale", productsalesRoutes);
app.use("/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("Server opened!");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
