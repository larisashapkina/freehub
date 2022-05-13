import {BrowserRouter as Router,Routes, Route} from  "react-router-dom";

import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Index from "./Pages/Index";
import Show from "./Pages/Show";
import New from "./Pages/New";
import Edit from "./Pages/Edit";
import SavetheEarth from "./Pages/SavetheEarth";
import Login from "./Pages/Login";
import Footer from "./Components/Footer";
import UserProfile from "./Pages/UserProfile";



function App() {
  return (
    <div className="App">
        <Router>
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="savetheearth" element ={<SavetheEarth/>}/>
              <Route path="/listings" element={<Index />} />
              <Route path="/listings/:id" element={<Show />} />
              <Route path="/listings/new" element={<New />} />
              <Route path="/listings/:id/edit" element={ <Edit />} />
              <Route path="/login" element = {<Login/>}/>
              <Route path ="/userprofile" element = {<UserProfile/>}/>
            </Routes>
          </main>
        </Router>
        <Footer/>
    </div>
  );
}

export default App;
