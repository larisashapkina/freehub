import { Link } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";

function Navbar({ text, setText }) {
  //const userId = localStorage.getItem("userId");
  const logout = () => {
    localStorage.clear();
    setText("Login");
  };

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
        <div id="search">
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
              Search Free Stuff!
            </button>
          </form>
        </div>
        <div id="nav-buttons">
          <Link to="/saveyourworld">Save Your World</Link>&nbsp;&nbsp;
          <Link to="/listings">Listings</Link>&nbsp;&nbsp;
          {localStorage.getItem("userId") ? (
            <button onClick={logout} className="login">
              <Link to="/"> {text} </Link>
            </button>
          ) : (
            <button className="login">
              <Link to="/login"> {text} </Link>
            </button>
          )}
          {localStorage.getItem("userId") ? (
            <button className="userprofile">
              <Link to={`/userprofile/${localStorage.getItem("userId")}`}>
                My profile{" "}
              </Link>
            </button>
          ) : (
            ""
          )}
        </div>
        {/* <div id="climate"><climate-clock /></div> */}
        );
      </div>
    );
  };
}

export default Navbar;
