import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function LoginForm ({setUserName}){
    const [user,setUser]=useState({
        username:"",
        password:""
    })

    const navigate = useNavigate();

    const handleTextChange = (event) => {
        setUser({ ...user, [event.target.id]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("test");
        setUserName(user.username);
        navigate("/");
    //     axios.post(`${process.env.REACT_APP_API_URL}/users`, user)
    //       .then((res)=>{
           
    //       }).catch((err)=>{
    //         console.log(err);
    //       })
    }; 
        return (
            <div>
            <form onSubmit={handleSubmit}>
            <label htmlFor="username">User Name:</label>
            <input required
            id="username"
            value={user.username}
            type="text"
            onChange={handleTextChange}
            placeholder="user name"
            />
            <br />
            <label htmlFor="password">Password:</label>
            <input required
            id="password"
            value={user.password}
            type="text"
            onChange={handleTextChange}
            placeholder="password"
            />
            <br />
                <input type="Submit" value="Log In"/>     
           
            <button className="createaccount">
           <Link to="/createaccount">Create Account</Link>
         </button>
        </form>
            </div>
        )
        }

export default LoginForm;