const express = require("express");
const listings = express.Router();
const { getAllListings, getListing } = require("../queries/listings.js");

// get all listings
listings.get("/", async (req, res) => {
  console.log("trigger");
  try {
    const allListings = await getAllListings();
    console.log(allListings);
    if (allListings[0]) {
      res.status(200).json(allListings);
    } else {
      res.status(500).json({ error: "No listings found" });
    }
  } catch (err) {
    res.json(err);
  }
});

listings.get("/:id", async (req, res) => {
  const { id } = req.params;
  const listing = await getListing(id);
  if (listing) {
    res.json(listing);
  } else {
    res.status(404).json({ error: "Listing not found" });
  }
});

module.exports = listings;
