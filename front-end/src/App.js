import { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Index from "./Pages/Index";
import Show from "./Pages/Show";
import New from "./Pages/New";
import Edit from "./Pages/Edit";
import SaveYourWorld from "./Pages/SaveYourWorld";
import CreateAccount from "./Pages/CreateAccount";
import About from "./Components/About";
import Footer from "./Components/Footer";
import UserProfile from "./Pages/UserProfile";
import Login from "./Pages/Login";
import "./App.css";
// import { useNavigate } from "react-router";

const API = process.env.REACT_APP_API_URL;

function App() {
  const [username, setUserName] = useState("");
  const [listings, setListings] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [listingsSearch, setListingsSearch] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [filterResults, setFilterResults] = useState([]);
  const [text, setText] = useState(
    localStorage.getItem("userId") ? "Logout" : "Login"
  );
  
  // const navigate = useNavigate();
  useEffect(() => {
    axios.get(`${API}/listings`).then((response) => {
      //console.log(response.data);
      setListings(response.data);
    });
  }, []);

  const handleNavigation = (category) => {
    setSearchInput("");
    // navigate(`/listings/${selectedCategory}`);
    setSelectedCategory(category);
  };

  useEffect(() => {
    if (selectedCategory === "All" || !selectedCategory) {
      setFilterResults(listings);
    } else {
      const results = listings.filter(
        (listing) => listing.category === selectedCategory
      );
      setFilterResults(results);
    }
}, [selectedCategory, listings]);

  function searchListings(searchInput, listings) {
    if (searchInput.length > 0) {
      return listings.filter((listing) => {
        return listing.title.toLowerCase().includes(searchInput.toLowerCase());
      });
    }
  }
  const handleSearchInput = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setSelectedCategory("");
    const listingsSearch = searchListings(searchInput, listings);
    setListingsSearch(listingsSearch);
  };

  return (
    <div className="App">
      <Router>
        <Navbar
          text={text}
          setText={setText}
          searchInput={searchInput}
          setSearchInput={setSearchInput}
          handleSearch={handleSearch}
          handleSearchInput={handleSearchInput}
          setSelectedCategory={setSelectedCategory}
        />
        <main>
          <Routes>
            <Route path="/" element={<Home userName={username} />} />
            {/* <Route path="/search" element={<SearchBar />} /> */}
            <Route path="/saveyourworld" element={<SaveYourWorld />} />
            <Route
              path="/listings"
              element={
                <Index
                  listSearch={searchInput ? listingsSearch : filterResults}
                  selectedCategory={selectedCategory}
                  handleNavigation={handleNavigation}
                />
              }
            />
            <Route path="/listings/:id" element={<Show />} />
            <Route path="/listings/new" element={<New />} />
            <Route path="/listings/:id/edit" element={<Edit />} />
            <Route
              path="/createaccount"
              element={<CreateAccount setUserName={setUserName} />}
            />
            <Route
              path="/userprofile/:id"
              element={<UserProfile userName={username} />}
            />
            <Route
              path="/login"
              element={
                <Login
                  setUserName={setUserName}
                  userName={username}
                  setText={setText}
                />
              }
            />
            <Route path="/aboutus" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
