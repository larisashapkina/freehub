const db = require("../db/dbConfig.js");

const getAllListings = async (user_id) => {
  try {
    const allListings = await db.any(
      "SELECT * FROM listings WHERE user_id=$1",
      user_id
    );
    return allListings;
  } catch (err) {
    return err;
  }
};

const getListing = async (id) => {
  try {
    const oneListing = await db.one("SELECT * FROM listings WHERE id=$1", id);
    return oneListing;
  } catch (error) {
    return error;
  }
};

const newListing = async (listing) => {
  try {
    const newListing = await db.one(
      "INSERT INTO listings (category, title, description, image, user_id) VALUES($1, $2, $3, $4, $5) RETURNING *",
      [
        listing.category,
        listing.title,
        listing.description,
        listing.image,
        listing.user_id,
      ]
    );
    return newListing;
  } catch (error) {
    return error;
  }
};

const deleteListing = async (id) => {
  try {
    const deletedListing = await db.one(
      "DELETE FROM listings WHERE id = $1 RETURNING *",
      id
    );
    return deletedListing;
  } catch (error) {
    return error;
  }
};

const updateListing = async (id, listing) => {
  try {
    const updatedListing = await db.one(
      "UPDATE listing SET category=$1, title=$2, description=$3, image=$4, user_id=$5 WHERE id=$6 RETURNING *",
      [
        listing.category,
        listing.title,
        listing.description,
        listing.image,
        listing.user_id,
        id,
      ]
    );
    return updatedListing;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllListings,
  getListing,
  newListing,
  deleteListing,
  updateListing,
};
