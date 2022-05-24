import { Link} from "react-router-dom";
// import { useState, useEffect } from "react";
// import axios  from "axios";

const API = process.env.REACT_APP_API_URL;

function Listing ({listing }) {
    return (
        <div>
            <Link to={`/listings/${listing.id}`}>
                <h2>{listing.category}</h2>
                <div>{listing.title}</div>
                <div>{listing.description}</div>
                <img className="image" src={listing.image} alt={listing.title}/>
                <br/>
            </Link>
            {listing.user_id}
            
        </div>
        
       
    )
}

export default Listing;