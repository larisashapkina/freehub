import "./Home.css";
import FeaturedListing from "../Components/FeaturedListing.js"

function Home() {
    //const greeting = localStorage.getItem("userId");
    const userName = localStorage.getItem("username");
       
  return (
    <main>
    <h6>Welcome to FreeHub {userName}!</h6>
            <FeaturedListing/> 
      <div id="main-content">
        <div id="featured-listings">
          Rethink. Reduce. Reuse.
        </div>
          </div>
        <div id="home-image"></div>
    </main>
  );
}

export default Home;
