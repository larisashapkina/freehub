import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./ListingDetails.css";

const API = process.env.REACT_APP_API_URL;

function ListingDetails() {
  const [listing, setListing] = useState({});
  let { id } = useParams();
  //let navigate = useNavigate()

  useEffect(() => {
    axios
      .get(API + "/listings/" + id)
      .then((res) => {
        setListing(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id, API]);

  return (
    <div>
      <div className="listing-details">
        <h3>{listing.title}</h3>
        <h5>{listing.category}</h5>
        <img className="image" src={listing.image} alt={listing.title} />
        <p>{listing.description}</p>
      </div>
      <div>
        <Link to={`/listings`}>
          <button>Back</button>
        </Link>
      </div>
    </div>
  );
}

export default ListingDetails;
