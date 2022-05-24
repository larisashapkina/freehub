import { Link } from 'react-router-dom';
import Listing from '../Components/Listing';
import axios from "axios";
import { useState, useEffect} from "react";
import { useParams } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function UserProfile({userName}){
    const [userlistings, setUserlistings] = useState([]);
    let { id } = useParams();

    useEffect(() => {
        axios.get(`${API}/users/${id}/listings`)
        .then((response) => {
            console.log(response.data);
            setUserlistings(response.data);
        });
        }, [id, API]);

   const handleDelete = ()  =>{
        axios.delete(API + "/users/{")
    }       


    const mappedListings = userlistings.map((listing)=>{
        return <div className="userlistings">
                <div>{listing.title}</div>
                <img className="image" src={listing.image} alt={listing.title}/>
                <button>Delete</button>
                <button>Edit</button>
            </div>
     
            
                
    })
    return(
        <div>
          Hello {userName}!
          {mappedListings}
           <button className="New-listing">
                <Link to="/listings/new">New Listing</Link>
             </button>
        </div>
    )
}
export default UserProfile;