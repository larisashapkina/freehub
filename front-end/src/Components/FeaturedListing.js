import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

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

  return (
    <div className="featured">
      {featuredlisting.map((listing) => (
        <div className="featured-details">
          <div>
            {" "}
            <Link to={`/listings/${listing.id}`}>
              <img className="image" src={listing.image} alt={listing.title} />
            </Link>
          </div>
          <h3>{listing.title}</h3>
          <p>{listing.description}</p>
        </div>
      ))}
    </div>
  );
}

export default FeaturedListing;
