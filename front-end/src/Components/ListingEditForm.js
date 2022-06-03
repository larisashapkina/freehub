import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
//import {Link} from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function ListingEditForm(){
      const[userListing, setUserListing] = useState({
          category:"",
          title:"",
          description:"",
          image:""
      })
      let { id } = useParams();
      const navigate = useNavigate();
      const handleTextChange = (event) => {
          setUserListing({ ...userListing, [event.target.id]: event.target.value });
      };
      useEffect(() => {
        axios.get(`${API}/listings/${id}`)
        .then((response) => {
            // console.log(response.data);
            setUserListing(response.data);
        });
        }, [id, API]);

      const handleSubmit = (event) => {
          event.preventDefault();
          axios.put(`${API}/listings/${id}`, userListing)
            .then((res)=>{
              navigate(`/userprofile/${localStorage.getItem("userId")}`);
            }).catch((err)=>{
              console.log(err);
            })
      };
      
      return (
        <div>
      Edit Listing
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          Category:
          <select id="listing-category" name="category">
            <option>--Select Category--</option>
            <option>Furniture</option>
            <option>Electronics</option>
            <option>Clothing</option>
            <option>Home</option>
            <option>Motors</option>
            <option>Toys</option>
            <option>Beauty</option>
            <option>Art</option>
          </select>
        </label>
        <label htmlFor="title">Title:</label>
        <input
          id="title"
          type="text"
          onChange={handleTextChange}
          value={userListing.title}
          placeholder="Title"
          />
        <label htmlFor="description">Description:</label>
        <input
          id="description"
          type="text"
          value={userListing.description}
          placeholder="Description"
          onChange={handleTextChange}
          />
        <label htmlFor="image">Image:</label>
        <input
          id="image"
          value={userListing.image}
          type="text"
          onChange={handleTextChange}
          placeholder="Image"
          />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
}
export default ListingEditForm;
