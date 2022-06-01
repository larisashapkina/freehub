import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import MappedListings from "./MappedListings";
import "./ListingDetails.css";

const API = process.env.REACT_APP_API_URL;

function ListingDetails() {
  const [listing, setListing] = useState({});
  const[user, setUser] = useState({});
  let { id } = useParams();
  const userId = localStorage.getItem("userId");
  

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


  useEffect(()=>{
    axios.get(API + "/users/" + listing.user_id)
      .then((res)=>{
        console.log(res.data);
        setUser(res.data);
      }).catch((err)=>{
        console.log(err);
      })
  }, [listing.user_id, API]) ;



  return(
    <div className="user-listings-container">
    <div className="listing-card">
      <h1>Category: {listing.category}</h1>
      <h2>{listing.title}</h2>
      <h3>Description: {listing.description}</h3>
       <img className="listing-card-image" src={listing.image} alt={listing.title}/>
       <div className="links">
         <Link to={`/listings`}>
            <button className="listing-card-button">Back</button>
         </Link>
           <br/>
               {userId?(<a className="listing-contact-link" href={"mailto:"+ user.email}>Contact about this item</a>):"" }
       </div>

    </div>
    <div className="user-all-listings">
    <h2>Username: {user.username}</h2>
    {/* <h3>Other options:</h3>
    <ul className="mappedlistings">
      <MappedListings user={user}/>
    </ul> */}
    </div>
    </div>
  );
}

export default ListingDetails;

{/* return (
  <div>
    <div className="listing-details">
      <h6>{listing.category}</h6>
      <img className="image" src={listing.image} alt={listing.title} />
      <h6>{listing.title}</h6>
      <p>{listing.description}</p>
    </div>
    <div>
      <Link to={`/listings`}>
        <button>Back</button>
      </Link>
    </div> */}