import { useState, useEffect } from "react";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState("");
  const [listings, setListings] = useState([]);

  useEffect(() => {
    axios.get(`${API}/listings`).then((response) => {
      //console.log(response.data);
      setListings(response.data);
    });
  }, [API]);

  const handleSearchInput = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  if (searchInput.length > 0) {
    listings.filter((listings) => {
      return listings.includes(searchInput);
    });
  }

  const searchResults = listings.filter((data) => {
    if (searchInput == "") return true;
    return data == searchInput;
  });
};

export default SearchBar;
