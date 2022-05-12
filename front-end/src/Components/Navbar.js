import './Navbar.css';
import {Link} from 'react-router-dom'


function Navbar(){
    return(
    <div className="navbar">
       <button className="logo">
           <Link to="/">Logo</Link>
           </button> 
       <button className="planet">Save the Earth</button>
       <button className="listings"> Listings</button>
       <button className="login">Login </button>
       
    </div>

     
    )
}

export default Navbar;