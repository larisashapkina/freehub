import Listing from "./Listing";
import axios from "axios";
import { useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import './Listings.css';


const API = process.env.REACT_APP_API_URL;

function Listings() {

    const [listings, setListings] = useState([]);

    let { id } = useParams();

    useEffect(() => {
        axios.get(`${API}/listings`)
        .then((response) => {
            console.log(response.data);
            setListings(response.data);
        });
        }, [id, API]);

    return(
    <div className="listings">
        {listings.map((listing)=>{
            return < Listing  key ={listing.id} listing = {listing}/>
        })}
    </div>
    )
}

export default Listings;