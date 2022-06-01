import "./Home.css";
import FeaturedListing from "../Components/FeaturedListing.js";

function Home() {
  //const greeting = localStorage.getItem("userId");
  const userName = localStorage.getItem("username");

  return (
    <div>
      <div id="main-content">
        <h2>Welcome {userName}!</h2>
          <div className="rethink">Rethink. Reduce. Reuse.</div>
            <div><FeaturedListing /></div>
        <div></div>
      </div>

      <div id="home-image"></div>
    </div>
  );
}

export default Home;
