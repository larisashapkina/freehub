import FeaturedListing from "../Components/FeaturedListing";


function Home({userName}) {
    return (
        <div>
            <h1>Welcome to FreeHub {userName}!</h1>
            <FeaturedListing/> 
        </div>
    )
}

export default Home;