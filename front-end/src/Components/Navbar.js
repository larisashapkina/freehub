import { Link } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";

const SearchResults = () => {
  const [searchTerms, setSearchTerms] = useState("");

  const handleSearchInput = (event) => {
    setSearchTerms({ ...searchTerms, [event.target.id]: event.target.value });
  };

  return (
    <div id="navbar">
        <div id="logo">
          <Link to="/">FreeHub</Link>
        </div>
      <div id="nav-and-search">
        <form className="search-form">
          <input
            id="search-input"
            type="text"
            className="searchTerm"
            placeholder="Search for Free Stuff"
            value={searchTerms}
            onChange={handleSearchInput}
          />
          &nbsp;&nbsp;
          <button id="search-button" type="submit">
            Search
          </button>
        </form>
      </div>
      <div id="nav-buttons">
        <Link to="/saveyourworld">Save Your World</Link>&nbsp;&nbsp;
        <Link to="/login">Login</Link>&nbsp;&nbsp;
        <Link to="/userprofile">My Account</Link>&nbsp;&nbsp;
        <Link to="/listings">Listings</Link>&nbsp;&nbsp;
      </div>
    </div>
  );
};

export default SearchResults;
