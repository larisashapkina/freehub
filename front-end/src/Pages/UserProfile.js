import CreateAccForm from "../Components/CreateAccForm";

function UserProfile({userName}){

    return(
        <div>
          Hello {userName}!
            <button>New Listing</button>
            
        </div>
    )
}

export default UserProfile;