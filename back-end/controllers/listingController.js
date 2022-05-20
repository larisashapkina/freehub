const express = require("express");
const listings = express.Router();
const { getAllListings, getListing, newListing } = require("../queries/listings.js");

// get all listings
listings.get("/", async (req, res) => {
  try {
    const allListings = await getAllListings();
    // console.log(allListings);
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
  // console.log("Trigger");
  const listing = await getListing(id);
  // console.log(listing)
  if (listing) {
    res.json(listing);
  } else {
    res.status(404).json({ error: "Listing not found" });
  }
});

listings.post("/", async (req, res) => {
  const listing = await newListing(req.body);
  res.status(200).json(listing);
});

module.exports = listings;
