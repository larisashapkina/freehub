// DEPENDENCIES
const cors = require("cors");
const express = require("express");
const userController = require("./controllers/userController.js");
const listingController = require("./controllers/listingController.js");

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json());
require("dotenv").config();

// ROUTES
app.get("/", (req, res) => {
  res.send("Welcome to FreeHub");
});

app.use("/users", userController);
app.use("/listings", listingController);

// 404 PAGE
app.get("*", (req, res) => {
  res.status(404).send("Page not found");
});

// EXPORT
module.exports = app;
