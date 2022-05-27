import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
//import {Link} from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function ListingEditForm(){
      const[userListing, setUserListings] = useState({
          category:"",
          title:"",
          description:"",
          image:""
      })
      let { id } = useParams();
      const navigate = useNavigate();
      const handleTextChange = (event) => {
          setUserListings({ ...userListing, [event.target.id]: event.target.value });
      };
      useEffect(() => {
        axios.get(`${API}/users/${id}/listings`)
        .then((response) => {
            console.log(response.data);
            setUserListings(response.data);
        });
        }, [id, API]);
      const handleSubmit = (event) => {
          event.preventDefault();
          axios.put(`${process.env.REACT_APP_API_URL}/users/${id}/listings/${id}`, userListing)
            .then((res)=>{
              navigate("/listings");
            }).catch((err)=>{
              console.log(err);
            })
      };
      return(
          <div>
              New Listing Form
              <form onSubmit={handleSubmit}>
                  <label htmlFor="name">Category:
                  <select id ="listing-category" name="category">
                      <option>--Select a category--</option>
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
                  maxlength="50"
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
      )
  }
export default ListingEditForm;



















