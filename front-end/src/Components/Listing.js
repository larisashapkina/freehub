import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios  from "axios";



const API = process.env.REACT_APP_API_URL;

function Listing ({listing }) {
    // console.log(listing);
    const [user,setUser]=useState({
        // firstname:"",
        // lastname:"",
        // username:"",
        // email:"",
        // password:""
    })

    let  { id } =useParams();

    useEffect(()=>{
        axios.get(API + "/users/")
          .then((res)=>{
            console.log(res.data);
            setUser(res.data);
          }).catch((err)=>{
            console.log(err);
          })
      }, [id, API]) ;
   


    return (
        <div>
            <Link to={`/listings/${listing.id}`}>
                <h2>{listing.category}</h2>
                <div>{listing.title}</div>
                <div>{listing.description}</div>
                <img className="image" src={listing.image} alt={listing.title}/>
                <br/>
                {/* {listing.user_id} */}
            </Link>
            <button>Contact about this item
                <a href="mailto:{user.email}">{user.email}</a>
            </button>
        </div>
        
       
    )
}

export default Listing;