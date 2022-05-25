import { useState } from "react";
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
// import SearchResults from "./Components/SearchResults";
import "./App.css";

function App() {
	
	const [username, setUserName] = useState("");
	const [text, setText] = useState(localStorage.getItem("userId")?"Logout":"Login");
 
	return (
		<div className="App">
			<Router>
				<Navbar text={text} setText={setText}/>
				<main>
					<Routes>
						<Route path="/" element={<Home userName = {username}/>} />
            <Route path="/saveyourworld" element={<SaveYourWorld />} />
						<Route path="/listings" element={<Index />} />
						<Route path="/listings/:id" element={<Show />} />
						<Route path="/listings/new" element={<New />} />
						<Route path="/listings/:id/edit" element={<Edit />} />
						<Route path="/createaccount" element={<CreateAccount setUserName={setUserName}/>} />
						<Route path="/userprofile/:id" element={<UserProfile userName ={username}/>} />
						<Route path="/login" element={<Login setUserName={setUserName} userName = {username} setText={setText}/>} />
            <Route path="/aboutus" element={<About />} />
             {/* <Route path="/search" element={<SearchResults />} /> */}
					</Routes>
				</main>
			  <Footer />
			</Router>
		</div>

 

 
    // <div className="App">
    //   <Router>
    //     <Navbar />
    //       <main>
    //         <Routes>
    //             <Route path="/" element={<Home userName = {username}/>} />
    //             {/* <Route path="/search" element={<SearchResults />} /> */}
    //             <Route path="/saveyourworld" element={<SaveYourWorld />} />
    //             <Route path="/listings" element={<Index />} />
    //             <Route path="/listings/:id" element={<Show />} />
    //             <Route path="/listings/new" element={<New />} />
    //             <Route path="/listings/:id/edit" element={<Edit />} />
    //             <Route path="/createaccount" element={<CreateAccount setUserName={setUserName}/>} />
    //             <Route path="/userprofile/:id" element={<UserProfile userName ={username}/>} />
    //             <Route path="/login" element={<Login setUserName={setUserName} userName = {username}/>} />
    //          </Routes>
    //       </main>
    // <>
    //   <Router>     
    //     <Navbar />
    //     <Routes>
    //       <Route path="/" element={<Home userName={username} />} />
    //       <Route path="/search" element={<SearchResults />} />
    //       <Route path="/saveyourworld" element={<SaveYourWorld />} />
    //       <Route path="/listings" element={<Index />} />
    //       <Route path="/listings/:id" element={<Show />} />
    //       <Route path="/listings/new" element={<New />} />
    //       <Route path="/listings/:id/edit" element={<Edit />} />
    //       <Route path="/createaccount" element={<CreateAccount />} />
    //       <Route
    //         path="/userprofile"
    //         element={<UserProfile userName={username} />}
    //       />
    //       <Route path="/login" element={<Login userName={username} />} />
    //     </Routes>
    //     <Footer />
    //   </Router>
    //   <Footer />
    // </div>
	);
}

export default App;
