import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "./FeaturedListing.css";
import ProductCard from "./productCard/ProductCard";

const API = process.env.REACT_APP_API_URL;

function FeaturedListing() {
  const [featuredlisting, setFeaturedlisting] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API}/listings`)
      .then((res) => {
        console.log(res.data);
        setFeaturedlisting(res.data);
      })
      .catch(() => {
        navigate("/not-found");
      });
  }, []);

  let featured = featuredlisting
    .filter((list) => list.id < 7)
    .map((listing) => {
      let { title, image, id } = listing;
      return (
        <Link to={`/listings/${id}`}>
          <ProductCard title = {title} image ={image} />
        </Link>
      );
    });
  return <div id="featured-listings-container">{featured}</div>;
}

export default FeaturedListing;
