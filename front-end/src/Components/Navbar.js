import './Navbar.css';
//import {Link} from 'react-router-dom'


function Navbar(){
    return(
    <div className="navbar">
       <button className="logo">Logo</button> 
       <button className="products"> Products</button>
       <button className="login">Login </button>
    </div>


    )
}

export default Navbar;