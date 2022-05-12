import { useState } from "react";

function LoginForm(){

    const [user,setUser]=useState({
        firstName:"",
        lastName:"",
        userName:"",
        email:"",
        password:""
    })

    const handleTextChange = (event) => {
        setUser({ ...user, [event.target.id]: event.target.value });
    };


    return(
        <form >
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
            <input type="Submit" 
            value="Login"/>
        </form>
    )
}

export default LoginForm;

