import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function CreateAccForm() {
  let navigate = useNavigate();

  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    username: "",
    password: "",
    email: "",
  });

  const addUser = () => {
    axios
      .post(`${API}/users`, user)
      .then(
        () => {
          navigate(`/users`);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };

  const handleTextChange = (event) => {
    setUser({ ...user, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addUser();
  };
  //     axios
  //       .post(`${API}/users`, user)
  //       .then((res) => {
  //         console.log(res);
  //         navigate("/userprofile");
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   };

  return (
    <div className="New">
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
        <label htmlFor="password">Password:</label>
        <input
          id="password"
          value={user.password}
          type="text"
          onChange={handleTextChange}
          placeholder="password"
        />
        <br />
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
        {/* <Link to="/userprofile"> */}
          <input type="Submit" value="Create Account" />
        {/* </Link> */}
      </form>
    </div>
  );
}

export default CreateAccForm;
