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
app.use("/users", userController);
app.use("/listings", listingController);

// ROUTES
app.get("/", (req, res) => {
	res.send("Welcome to FreeHub");
});

// 404 PAGE
app.get("*", (req, res) => {
	res.status(404).send("Page not found");
});

// EXPORT
module.exports = app;
