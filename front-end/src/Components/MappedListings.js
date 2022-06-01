import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

function MappedListings({user}) {
  const [listingOptions, setListingOptions] = useState({});

  useEffect(()=>{
    axios.get(API + "/users/" + user.id + "/listings")
      .then((res)=>{
        console.log(res.data);
        setListingOptions(res.data);
      }).catch((err)=>{
        console.log(err);
      })
  }, [user.id, API]) ;


  const mappedListings = listingOptions.map((listing)=>{
    return (
            
            <li className="option">
            {listing.title}
            <img className="image" src={listing.image} alt={listing.title}/>
            </li>  
    )            
  })

  return {mappedListings};
}

export default MappedListings;