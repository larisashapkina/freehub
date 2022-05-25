import './Navbar.css';
import { Link } from 'react-router-dom'


function Navbar({text, setText}){

  //const userId = localStorage.getItem("userId");
  const logout = ()=>{
    localStorage.clear()
    setText("Login")
  }

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

       {localStorage.getItem("userId")?(<button onClick={logout}
          className="login">
           <Link to="/"> {text} </Link>
         </button>):(<button className="login">
           <Link to="/login"> {text} </Link>
         </button>)}

        {localStorage.getItem("userId")?( <button className="userprofile">
           <Link to={`/userprofile/${localStorage.getItem("userId")}`}>My profile </Link>
         </button>):("")
        }   
    </div>
    )
}

export default Navbar;