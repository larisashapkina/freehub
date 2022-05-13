import './Navbar.css';
import { Link } from 'react-router-dom'


function Navbar(){
    return(
    <div className="navbar">
       <button className="logo">
            <Link to="/">Logo</Link>
       </button> 
       <button className="planet">
           <Link to="/savetheearth">Save the Planet Information</Link>
       </button>
       <button className="listings">
           <Link to="/listings">Listings</Link>
       </button>
       <button className="login">
           <Link to="/login">Login Page</Link>
         </button>
    </div>
    )
}

export default Navbar;