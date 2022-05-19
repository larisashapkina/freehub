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
      .then((res) => setFeaturedlisting(res.data))
      .catch(() => navigate("/not-found"));
  }, []);
  return (
    <div className="feature">
      {featuredlisting.map((listing) => (
                    <div className="feature-details">
                     <div> <Link to={`/listings/${listing.id}`}><img className="image" src={listing.image} alt={listing.title}/></Link>
                      
                     </div>
                      <div>{listing.title}</div>
                      <div>{listing.description}</div>
                
                  </div>
           ))}
    </div>
  );
}

export default FeaturedListing;