const express = require("express");
const users = express.Router();

// INDEX - Ask Greg if we need an index of users?
users.get("/", (req, res) => {
  res.json({ status: "ok" });
});

module.exports = users;
