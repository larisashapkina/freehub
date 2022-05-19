import { Link } from 'react-router-dom';

function UserProfile({userName}){

    return(
        <div>
          Hello {userName}!
            <button className="New-listing">
                <Link to="/listings/new">New Listing</Link>
            </button>
            
        </div>
    )
}

export default UserProfile;