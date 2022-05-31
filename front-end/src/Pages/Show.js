import ListingDetails from "../Components/ListingDetails"

function Show({userlistings}){
    return (
        <div>
            < ListingDetails userlistings = {userlistings} />
        </div>
    )
}

export default Show;