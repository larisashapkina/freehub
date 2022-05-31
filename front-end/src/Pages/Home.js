import "./Home.css";
import FeaturedListing from "../Components/FeaturedListing.js";

function Home() {
  //const greeting = localStorage.getItem("userId");
  const userName = localStorage.getItem("username");

  return (
    <div>
      <h3>Welcome {userName}!</h3>

      <div id="main-content">
        <div className="featured-listings">
          <FeaturedListing />
        </div>
        <div className="rethink">Rethink. Reduce. Reuse.</div>
      </div>

      <div id="home-image"></div>
    </div>
  );
}

export default Home;
