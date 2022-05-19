import './Navbar.css';
import { Link } from 'react-router-dom'


function Navbar(){
    return(
    <div className="navbar">
       <button className="logo">
            <Link to="/">Logo</Link>
       </button> 
       <button className="planet">
           <Link to="/savetheearth">Save the Planet</Link>
       </button>
       <button className="listings">
           <Link to="/listings">Listings</Link>
       </button>
         <button className="login">
           <Link to="/login">Login/Create Account </Link>
         </button>
         <button className="myprofile">
           <Link to="/userprofile">My profile </Link>
         </button>

    </div>
    )
}

export default Navbar;