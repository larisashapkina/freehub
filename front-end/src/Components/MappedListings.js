import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

function MappedListings({ options }) {
  const mappedListingsByUser = options.map((listing) => (
    <li key={listing.id} className="option">
      {listing.title}
      <img className="img" src={listing.image} alt={listing.title} />
    </li>
  ));

  return <>{mappedListingsByUser}</>;
}

export default MappedListings;
