import Listing from "./Listing";
// import axios from "axios";
// import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
import "./Listings.css";
// import FeaturedListing from "./FeaturedListing";

const API = process.env.REACT_APP_API_URL;

function Listings({
  listSearch,
  handleNavigation,
}) {
  // const [listings, setListings] = useState([]);

  // let { id } = useParams();

  // const filterResults = listings.filter((data) => {
  //   if (selectedCategory === "All") return true;
  //   return data.category === selectedCategory;
  // });

  return (
    <main>
      <div className="categories-menu">
        <button onClick={() => handleNavigation("All")}>All</button>
        <button onClick={() => handleNavigation("Furniture")}>Furniture</button>
        <button onClick={() => handleNavigation("Electronics")}>
          Electronics
        </button>
        <button onClick={() => handleNavigation("Clothing")}>Clothing</button>
        <button onClick={() => handleNavigation("Home")}>Home </button>
        <button onClick={() => handleNavigation("Motors")}>Motors</button>
        <button onClick={() => handleNavigation("Toys")}>Toys </button>
        <button onClick={() => handleNavigation("Beauty")}>Beauty </button>
        <button onClick={() => handleNavigation("Art")}>Art</button>
      </div>
      <div className="listings-container">
        {listSearch.map((listing) => {
          return <Listing key={listing.id} listing={listing} />;
        })}
      </div>
    </main>
  );
}
export default Listings;
