import { Link } from "react-router-dom";
import './Listing.css';


function Listing ({listing }) {
    return (
        <div id="listingCard">
            {/* <Link to={`/listings/${listing.category}`}><h6>{listing.category}</h6></Link> */}
            <Link to={`/listings/${listing.id}`}>
                <img className="image" src={listing.image} alt={listing.title}/>
                <h5>{listing.title}</h5>
                <p className="description">{listing.description}</p>
            </Link>
        </div> 
       
    )
}

export default Listing;