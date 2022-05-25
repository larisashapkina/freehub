import FeaturedListing from "../Components/FeaturedListing";


function Home() {

    //const greeting = localStorage.getItem("userId");
    const userName = localStorage.getItem("username");

    return (
        <div>
            <h1>Welcome to FreeHub {userName}!</h1>
            <FeaturedListing/> 
        </div>
    )
}

export default Home;