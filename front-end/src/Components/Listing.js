import { Link } from "react-router-dom";


function Listing ({listing }) {
    return (
        <div>
            <Link to={`/listings/${listing.id}`}>
                <h2>{listing.category}</h2>
                <div>{listing.title}</div>
                <div>{listing.description}</div>
                <img className="image" src={listing.image} alt={listing.title}/>
            </Link>
        </div> 
       
    )
}

export default Listing;