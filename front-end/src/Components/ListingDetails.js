import { useState, useEffect } from "react";
import { Link, useParams, useNavigate} from "react-router-dom";
import axios  from "axios";


const API = process.env.REACT_APP_API_URL;


function ListingDetails(){
  const [listing, setListing] = useState({});
  let { id } = useParams();
  //let navigate = useNavigate()

  useEffect(()=>{
    axios.get(API + "/listings/" + id)
      .then((res)=>{
        setListing(res.data);
      }).catch((err)=>{
        console.log(err);
      })
  }, [id, API]) ;

  return(
    <div>
      <h2>Category: {listing.category}</h2>
      <div>Title: {listing.title}</div>
      <div>Description: {listing.description}</div>
       <img className="image" src={listing.image} alt={listing.title}/>

       <div>
         <Link to={`/listings`}>
            <button>Back</button>
         </Link>
       </div>
    </div>
  )
}


export default ListingDetails;