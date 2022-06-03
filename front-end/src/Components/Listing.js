import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "./Listing.css";

const API = process.env.REACT_APP_API_URL;

function Listing({ listing }) {
  const [user, setUser] = useState({});
  let { id } = useParams();

  useEffect(() => {
    axios
      .get(API + "/users/")
      .then((res) => {
        console.log(res.data);
        setUser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id, API]);

  return (
    <div id="listingCard">
      <div id="listing-category">
        <Link to={`/listings/${listing.category}`}>
          <div>{listing.category}</div>
        </Link>
      </div>
      <Link to={`/listings/${listing.id}`}>
        <img className="image" src={listing.image} alt={listing.title} />
        <div className="list-title">{listing.title}</div>
        <p className="description">{listing.description}</p>
      </Link>
    </div>
  );
}

export default Listing;
