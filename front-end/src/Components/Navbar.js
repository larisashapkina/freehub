import { Link } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";

function Navbar({
  text,
  setText,
  searchInput,
  handleSearchInput,
  handleSearch,
  setSearchInput,
  setSelectedCategory,
}) {
  //const userId = localStorage.getItem("userId");
  const logout = () => {
    localStorage.clear();
    setText("Login");
  };

  const resetChooseCategory = () => {
    setSearchInput("");
    setSelectedCategory("");
  };

  //      {/* <button className="logo"> */}
  //           <Link to="/">Logo</Link>
  //      {/* </button>  */}

  //      {/* <button className="planet"> */}
  //          <Link to="/savetheearth">Save the Planet</Link>
  //      {/* </button> */}

  //      {/* <button className="listings"> */}
  //          <Link to="/listings">Listings</Link>
  //      {/* </button> */}

  //      {localStorage.getItem("userId")?( <Link onClick={logout}to="/"> {text} </Link>):
  //      (<Link to="/login"> {text} </Link>)}

  //       {localStorage.getItem("userId")?(
  //       <Link to={`/userprofile/${localStorage.getItem("userId")}`}>My profile </Link>):("")
  //       }

  //      {/* {localStorage.getItem("userId")?(<button onClick={logout}
  //         className="login">
  //          <Link to="/"> {text} </Link>
  //        </button>):(<button className="login">
  //          <Link to="/login"> {text} </Link>
  //        </button>)} */}

  //       {/* {localStorage.getItem("userId")?( <button className="userprofile">
  //          <Link to={`/userprofile/${localStorage.getItem("userId")}`}>My profile </Link>
  //        </button>):("")
  //       }    */}
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
            className="searchInput"
            placeholder="Search for Free Stuff"
            onChange={handleSearchInput}
            value={searchInput}
          />
          &nbsp;&nbsp;
          <button
            id="search-button"
            type="submit"
            onClick={(e) => handleSearch(e)}
          >
            Search
          </button>
        </form>
      </div>
      <div id="nav-buttons">
        <Link to="/saveyourworld"><button>#ActInTime</button>&nbsp;</Link>
        <Link to="/listings" onClick={resetChooseCategory}>
          <button>Listings</button>&nbsp;
        </Link>
       
        
        {localStorage.getItem("userId") ? (
          <Link onClick={logout} to="/">
            <button>
            {" "}
            {text}{" "}
            </button>
            &nbsp;
          </Link>
        ) : (
          <Link to="/login"> <button>{text} </button>&nbsp; </Link>
        )}
        {localStorage.getItem("userId") ? (
          <Link to={`/userprofile/${localStorage.getItem("userId")}`}>
            <button>Profile{" "}</button>&nbsp;
          </Link>
        ) : (
          ""
        )}
      </div>
      <div id="climate">{/* <climate-clock /> */}</div>
    </div>
  );
}

export default Navbar;
