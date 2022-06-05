import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import MappedListings from "./MappedListings";
import "./ListingDetails.css";

const API = process.env.REACT_APP_API_URL;

function ListingDetails() {
  const [listing, setListing] = useState({});
  const [user, setUser] = useState({});
  let { id } = useParams();
  const userId = localStorage.getItem("userId");
  const [options, setOptions] = useState([]);

  useEffect(() => {
    axios
      .get(API + "/listings/" + id)
      .then((res) => {
        setListing(res.data);

        axios
          .get(`${API}/users/${res.data.user_id}/listings`)
          .then((resp) => {
            setOptions(resp.data);
          })
          .catch((err) => {
            console.log(err);
          });

        axios
          .get(API + "/users/" + res.data.user_id)
          .then((response) => {
            setUser(response.data);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, [id, API]);

  // useEffect(() => {
  //   axios
  //     .get(API + "/users/" + listing.user_id)
  //     .then((res) => {
  //       console.log(res.data);
  //       setUser(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, [listing.user_id, API]);

  return (
    <div>
      <div className="details">
        <h6>{listing.category}</h6>
        <img className="detailsimage" src={listing.image} alt={listing.title} />
        <h6>{listing.title}</h6>
        <p>{listing.description}</p>
      </div>
      <div>
        <Link to={`/listings`}>
          <button>Back</button>
        </Link>
        <br />
        {userId ? <a href={"mailto:" + user.email}>Contact</a> : ""}
      </div>
      <div id="other-listings-container">
        <h2>{user.username}'s Other Listings:</h2>
        <ul>
          <MappedListings options={options} />
        </ul>
      </div>
    </div>
  );
}

export default ListingDetails;
