const express = require("express");
const listings = express.Router();

// INDEX
listings.get("/", (req, res) => {
  res.json({ status: "ok" });
});

module.exports = listings;
