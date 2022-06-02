import { Link, useNavigate } from "react-router-dom";
import Listing from "../Components/Listing";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./UserProfile.css";

const API = process.env.REACT_APP_API_URL;

function UserProfile() {
  const [userlistings, setUserlistings] = useState([]);
  let { id } = useParams();
  let navigate = useNavigate();
  const userName = localStorage.getItem("username");

  useEffect(() => {
    axios.get(`${API}/users/${id}/listings`).then((response) => {
      console.log(response.data);
      setUserlistings(response.data);
    });
  }, [id, API]);

  const handleDelete = (listingId) => {
    axios
      .delete(`${API}/listings/${listingId}`)
      .then((response) => {
        const newUserlisting = userlistings.filter((listing)=>
            listing.id!==listingId)
            setUserlistings(newUserlisting);
            // navigate(`/userprofile/${id}`)
        }).catch((err)=>{
            console.log(err);
        })
    }

    const mappedListings = userlistings.map((listing)=>{
        return <div className="userlistings">
                <div>{listing.title}</div>
                <img className="image" src={listing.image} alt={listing.title}/>
                <button onClick ={()=>handleDelete(listing.id)}>Delete</button>
                <Link to ={`/listings/${listing.id}/edit`}><button>Edit</button>
                </Link>
                
            </div>               
    })
    return(
        <div>
             <button className="New-listing">
                <Link to="/listings/new">New Listing</Link>
           </button>
          Hey {userName}!
          {mappedListings}
          
        </div>
    )

  // const mappedListings = userlistings.map((listing) => {
  //   return (
  //     <div className="userlistings">
  //       <img className="image" src={listing.image} alt={listing.title} />
  //       {listing.title}
  //       <button
  //         onClick={() =>
  //           window.confirm(
  //             "Are you sure you want to delete listing? You won't be able undo this action!"
  //           ) 
  //         }
  //       >
  //         Delete
  //       </button>
  //       {/* <button onClick={() => handleDelete(listing.id)}>Delete</button> */}
  //       <button>Edit</button>
  //     </div>
  //   );
  // });
  // return (
  //   <div>
  //     Hey {userName}!
  //     <button className="New-listing">
  //       <Link to="/listings/new">New Listing</Link>
  //     </button>
  //     <div className="listings-container">{mappedListings}</div>
  //   </div>
  // );
}

export default UserProfile;
