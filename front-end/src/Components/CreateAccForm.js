import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
//import { Link } from "react-router-dom";

function CreateAccForm({accountUserName}){
    const [user,setUser]=useState({
        firstname:"",
        lastname:"",
        username:"",
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
            // console.log(res);
            accountUserName(user.username);
            navigate("/userprofile");
          }).catch((err)=>{
            console.log(err);
          })
    }; 

    return(
        <div>
             <form onSubmit={handleSubmit}>
            <label htmlFor="firstname">First Name:</label>
            <input
            id="firstname"
            value={user.firstname}
            type="text"
            onChange={handleTextChange}
            placeholder="first name"
            />
            <br />
            <label htmlFor="lastname">Last Name:</label>
            <input
            id="lastname"
            value={user.lastname}
            type="text"
            onChange={handleTextChange}
            placeholder="last name"
            />
            <br />
            <label htmlFor="username">User Name:</label>
            <input
            id="username"
            value={user.username}
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
            <div>
                <input type="Submit" value="Create Account"/>     
            </div>
        </form>
        </div>
    )
}

export default CreateAccForm;


