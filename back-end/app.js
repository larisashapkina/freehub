// DEPENDENCIES
const cors = require("cors");
const express = require("express");
const usersController = require("./controllers/userController.js");

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

app.use("/users", usersController);

// 404 PAGE
app.get("*", (req, res) => {
  res.status(404).send("Page not found");
});

// EXPORT
module.exports = app;
