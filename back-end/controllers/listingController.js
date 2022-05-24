const express = require("express");
const listings = express.Router();
const { getAllListings, getListing, newListing, updateListing, deleteListing } = require("../queries/listings.js");

// get all listings
listings.get("/", async (req, res) => {
  try {
    const allListings = await getAllListings();
    //console.log(allListings);
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

// UPDATE
listings.put("/:id", async (req, res) => {
  const { id } = req.params;
  const updatedListing = await updateListing(id, req.body);
  if (updatedListing.id) {
    res.status(200).json(updatedListing);
  } else {
    res.status(404).json("Listing not found");
  }
});

// DELETE
listings.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedListing = await deleteListing(id);
  if (deletedListing.id) {
    res.status(200).json(deletedListing);
  } else {
    res.status(404).json({ error: "Listing not found" });
  }
});

listings.post("/", async (req, res) => {
  const listing = await newListing(req.body);
  res.status(200).json(listing);
});

module.exports = listings;
