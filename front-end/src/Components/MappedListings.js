import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

function MappedListings({options}) {
  


  const mappedListings = options.map((listing)=> ( 
  <li key={listing.id} className="option">
  {listing.title}
  <img className="image" src={listing.image} alt={listing.title}/>
  </li> ))

  return <>{mappedListings}</>;
}

export default MappedListings;