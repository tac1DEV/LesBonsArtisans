const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const productRoute = require("./routes/product.route.js");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use("/api/products", productRoute);

mongoose
  .connect(
    "mongodb+srv://tac1DEV:M3DxMAbzW7JPZhcD@backenddb.d3oza.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB"
  )
  .then(() => {
    console.log("Connected to database !");
    app.listen(3001, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch(() => {
    console.log("Failed to connect to database !");
  });
