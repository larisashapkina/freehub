import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Error from "./loginError";

function LoginForm ({setUserName,setText}){
    const [username,setUserNamee]=useState("");
    const [password,setPassword]=useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const handleTextChange = (event) => {
        setUserNamee({ ...username, [event.target.id]: event.target.value });
        setPassword({ ...username, [event.target.id]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setUserName(username.username);
        axios.post(`${process.env.REACT_APP_API_URL}/users/login`, {username: username, password:password})
          .then((res)=>{
            localStorage.setItem("userId",`${res.data.id}`)
            setText("Logout");
            navigate(`/userprofile/${res.data.id}`);
          }).catch((err)=>{
            setError(err.response.data.error);
          })
         };

        return (
            <div>
                <Error error={error}/>
                <form onSubmit={handleSubmit}>
                <label htmlFor="username">User Name:</label>
                <input
                id="username"
                value={username.username}
                type="text"
                onChange={handleTextChange}
                placeholder="username name"
                />
                <br />
                <label htmlFor="password">Password:</label>
                <input
                id="password"
                value={password.password}
                type="text"
                onChange={handleTextChange}
                placeholder="password"
                />
                <br />
                <input type="Submit" value="Log In"/>
                <div>Don't have an account?</div>
                    <button className="createaccount">
                <Link to="/createaccount">Create Account</Link>
                </button>
                </form>
            </div>
        )
        }
export default LoginForm;













