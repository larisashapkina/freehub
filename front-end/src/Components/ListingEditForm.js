import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import './ListingEditForm.css';

const API = process.env.REACT_APP_API_URL;

function ListingEditForm(){

  let { id } = useParams();
  let navigate = useNavigate();

  const [listing, setListing] = useState({
    category:"",
    title:"",
    description:"",
    image:""
  });

  const updateListing = (updatedListing) => {
    axios
      .put(`${API}/listings/${id}`, updatedListing)
      .then(
        () => {
          navigate(`/listings/${id}`);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };

  const handleTextChange = (event) => {
    setListing({ ...listing, [event.target.id]: event.target.value });
  };


  useEffect(() => {
    axios.get(`${API}/listings/${id}`).then(
      (response) => setListing(response.data),
      (error) => navigate(`/listing-not-found`)
    );
  }, [id, navigate]);

  const handleSubmit = (event) => {
    event.preventDefault();
    updateListing(listing, id);
  };

  return (
    <div className="edit-listing-form">
      Edit Listing
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Category: 
        <select id ="edit-category" name="category">
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
        value={listing.title}
        placeholder="Title"
        />
        <label htmlFor="description">Description:</label>
        <input
        id="description"
        type="text"
        value={listing.description}
        placeholder="Description"
        onChange={handleTextChange}
        />
        <label htmlFor="image">Image:</label>
        <input
        id="image"
        value={listing.image}
        type="text"
        onChange={handleTextChange}
        placeholder="Image"
        />
        <br />
        <input type="submit" />
    </form>
      <Link to={`/listings/${id}`}>
        <button>Cancel Edit</button>
      </Link>
    </div>
  );
}

export default ListingEditForm;
