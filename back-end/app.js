// DEPENDENCIES
const cors = require("cors");
const express = require("express");
const userController = require("./controllers/userController.js");
const listingController = require("./controllers/listingController.js");
// const userListingsController = require("./controllers/userListingsController.js");

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json());
require("dotenv").config();
app.use("/users", userController);
app.use("/listings", listingController);
// app.use("/users/:id/listings", userListingsController);

// ROUTES
app.get("/", (req, res) => {
	res.send("<h1>Welcome to FreeHub</h1>");
});

// 404 PAGE
app.get("*", (req, res) => {
	res.status(404).send("Page not found");
});

// EXPORT
module.exports = app;
