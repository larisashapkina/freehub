const express = require("express");
const userListings = express.Router({ mergeParams: true });
const {
  getAllListingsByUser,
  // newListing,
  // deleteListing,
  // updateListing,
} = require("../queries/listings.js");

// get all listings by user
userListings.get("/", async (req, res) => {
  const { userId } = req.params;

  try {
    const AllListingsByUser = await getAllListingsByUser(userId);
    res.json(AllListingsByUser);
  } catch (err) {
    res.json(err);
  }
  // if (AllListingsByUser[0]) {
  //   res.status(200).json(AllListingsByUser);
  // } else {
  //   res.status(500).json({ error: "server error" });
  // }
});

// SHOW one listing by user's id
// userListings.get("/:id", async (req, res) => {
//   const { id } = req.params;
//   const listing = await getListing(id);
//   if (listing) {
//     res.json(listing);
//   } else {
//     res.status(404).json({ error: "not found" });
//   }
// });

// // CREATE
// userListings.post("/:userId/listings", async (req, res) => {
//   const listing = await newListing(req.body);
//   res.status(200).json(listing);
// });

// // UPDATE
// userListings.put("/:userId/listings/:id", async (req, res) => {
//   const { id } = req.params;
//   const updatedListing = await updateListing(id, req.body);
//   if (updatedListing.id) {
//     res.status(200).json(updatedListing);
//   } else {
//     res.status(404).json("Listing not found");
//   }
// });

// // DELETE
// userListings.delete("/:userId/listings/:id", async (req, res) => {
//   const { id } = req.params;

//   const deletedListing = await deleteListing(id);
//   if (deletedListing.id) {
//     res.status(200).json(deletedListing);
//   } else {
//     res.status(404).json({ error: "Listing not found" });
//   }
// });

module.exports = userListings;
