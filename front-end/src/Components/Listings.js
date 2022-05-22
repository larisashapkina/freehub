import Listing from "./Listing";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Listings.css";

const API = process.env.REACT_APP_API_URL;

function Listings() {
  const [listings, setListings] = useState([]);
  const [seletedCategory, setSeletedCategory] = useState("");
  let { id } = useParams();
  useEffect(() => {
    axios.get(`${API}/listings`).then((response) => {
      console.log(response.data);
      setListings(response.data);
    });
  }, [id, API]);

  // const filterResult=(catItem)=>{
  //         const result =  listings.filter((dat)=>{
  //         return dat.category===catItem;
  //     })
  //     setListings(result);
  // }
  const filterResults = listings.filter((data) => {
    if (seletedCategory === "") return true;
    return data.category === seletedCategory;
  });
  return (
    <div>
      <div className="categories-menu">
        <button onClick={() => setSeletedCategory("")}>All</button>
        <button onClick={() => setSeletedCategory("Furniture")}>
          Furniture
        </button>
        <button onClick={() => setSeletedCategory("Electronics")}>
          Electronics
        </button>
        <button onClick={() => setSeletedCategory("Clothing")}>Clothing</button>
        <button onClick={() => setSeletedCategory("Home")}>Home </button>
        <button onClick={() => setSeletedCategory("Motors")}>Motors</button>
        <button onClick={() => setSeletedCategory("Toys")}>Toys </button>
        <button onClick={() => setSeletedCategory("Beauty")}>Beauty </button>
        <button onClick={() => setSeletedCategory("Art")}>Art</button>
      </div>
      <div className="listings-container">
        {filterResults.map((listing) => {
          return <Listing key={listing.id} listing={listing} />;
        })}
      </div>
    </div>
  );
}
export default Listings;
