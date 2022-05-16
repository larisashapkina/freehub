import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function CreateAccForm(){
    const [user,setUser]=useState({
        firstName:"",
        lastName:"",
        userName:"",
        email:"",
        password:""
    })


    const navigate = useNavigate();

    const handleTextChange = (event) => {
        setUser({ ...user, [event.target.id]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post(`${process.env.REACT_APP_API_URL}/users`, user)
          .then((res)=>{
            console.log(res);
            navigate("/userprofile");
            
          }).catch((err)=>{
            console.log(err);
          })
    }; 

    return(
        <form onSubmit={handleSubmit}>
        <label htmlFor="firstname">First Name:</label>
            <input
            id="firstName"
            value={user.firstName}
            type="text"
            onChange={handleTextChange}
            placeholder="first name"
            />
            <br />
            <label htmlFor="lastname">Last Name:</label>
            <input
            id="lastName"
            value={user.lastName}
            type="text"
            onChange={handleTextChange}
            placeholder="last name"
            />
            <br />
            <label htmlFor="username">User Name:</label>
            <input
            id="userName"
            value={user.userName}
            type="text"
            onChange={handleTextChange}
            placeholder="user name"
            />
            <br />
            <label htmlFor="email">E-mail:</label>
            <input
            id="email"
            value={user.email}
            type="text"
            onChange={handleTextChange}
            placeholder="email"
            />
            <br />
            <label htmlFor="password">Password:</label>
            <input
            id="password"
            value={user.password}
            type="text"
            onChange={handleTextChange}
            placeholder="password"
            />
            <br />
            <Link to="/userprofile">
                <input type="Submit" value="Create Account"/>     
            </Link>
           
        </form>
    )
}

export default CreateAccForm;


