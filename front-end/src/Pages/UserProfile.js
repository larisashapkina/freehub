import { Link, useNavigate } from 'react-router-dom';
import Listing from '../Components/Listing';
import axios from "axios";
import { useState, useEffect} from "react";
import { useParams } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function UserProfile(){
    const [userlistings, setUserlistings] = useState([]);
    let { id } = useParams();
    let navigate = useNavigate();
    const userName = localStorage.getItem("username");

    useEffect(() => {
        axios.get(`${API}/users/${id}/listings`)
        .then((response) => {
            console.log(response.data);
            setUserlistings(response.data);
        });
        }, [id, API]);

   const handleDelete = ()  =>{
        axios.delete(`${API} + /users/${id}/listings/${id}`)
        .then((response)=>{
            navigate(`/users/${id}/listings`)
        }).catch((err)=>{
            console.log(err);
        })
    }       


    const mappedListings = userlistings.map((listing)=>{
        return <div className="userlistings">
                <div>{listing.title}</div>
                <img className="image" src={listing.image} alt={listing.title}/>
                <button onClick ={handleDelete}>Delete</button>
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