import FeaturedListing from "../Components/FeaturedListing";


function Home({userName}) {

    const greeting = localStorage.getItem("userId");

    return (
        <div>
            <h1>Welcome to FreeHub {greeting?userName:""}!</h1>
            <FeaturedListing/> 
        </div>
    )
}

export default Home;