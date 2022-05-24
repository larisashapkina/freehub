import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Index from "./Pages/Index";
import Show from "./Pages/Show";
import New from "./Pages/New";
import Edit from "./Pages/Edit";
import SavetheEarth from "./Pages/SavetheEarth";
import CreateAccount from "./Pages/CreateAccount";
import Footer from "./Components/Footer";
import UserProfile from "./Pages/UserProfile";
import Login from "./Pages/Login";

function App() {
	
	const [username, setUserName] = useState("");
	const [text,setText] = useState("Login");
 
	return (
		<div className="App">
			<Router>
				<Navbar text={text} setText={setText}/>
				<main>
					<Routes>
						<Route path="/" element={<Home userName = {username}/>} />
						<Route path="savetheearth" element={<SavetheEarth />} />
						<Route path="/listings" element={<Index />} />
						<Route path="/listings/:id" element={<Show />} />
						<Route path="/listings/new" element={<New />} />
						<Route path="/listings/:id/edit" element={<Edit />} />
						<Route path="/createaccount" element={<CreateAccount setUserName={setUserName}/>} />
						<Route path="/userprofile/:id" element={<UserProfile userName ={username}/>} />
						<Route path="/login" element={<Login setUserName={setUserName} userName = {username} setText={setText}/>} />
						{/* <Route path="/logout"/> */}
					</Routes>
				</main>
			</Router>
			<Footer />
		</div>
	);
}

export default App;
