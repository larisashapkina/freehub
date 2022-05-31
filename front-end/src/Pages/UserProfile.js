import { Link, useNavigate } from 'react-router-dom';
import Listing from '../Components/Listing';
import axios from "axios";


const API = process.env.REACT_APP_API_URL;

function UserProfile({userlistings, id}){
    // const [userlistings, setUserlistings] = useState([]);
    // let { id } = useParams();
    let navigate = useNavigate();
    const userName = localStorage.getItem("username");

    // useEffect(() => {
    //     axios.get(`${API}/users/${id}/listings`)
    //     .then((response) => {
    //         console.log(response.data);
    //         setUserlistings(response.data);
    //     });
    //     }, [id, API]);

   const handleDelete = (listingId)  =>{
        axios.delete(`${API}/listings/${listingId}`)
        .then((response)=>{
            navigate(`/userprofile/${id}`)
        }).catch((err)=>{
            console.log(err);
        })
    }       
    console.log(userlistings);
    const mappedListings = userlistings.map((listing)=>{
        return <div className="userlistings">
                <div>{listing.title}</div>
                <img className="image" src={listing.image} alt={listing.title}/>
                <button onClick ={()=>handleDelete(listing.id)}>Delete</button>
                <button>Edit</button>
            </div>               
    })
    return(
        <div>
             <button className="New-listing">
                <Link to="/listings/new">New Listing</Link>
           </button>
          Hey {userName}!
          {mappedListings}
          
        </div>
    )
}

export default UserProfile;