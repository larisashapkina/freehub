import "./Home.css";
import FeaturedListing from "../Components/FeaturedListing.js";

function Home() {
  //const greeting = localStorage.getItem("userId");
  const userName = localStorage.getItem("username");

  return (
    <div>
      <div id="main-content">
        <h1 className="left">Welcome {userName}!</h1>
        <h1 className="right">Rethink. Reduce. Reuse.</h1>
        <FeaturedListing />
      </div>
      <div id="home-image"></div>
    </div>
  );
}

export default Home;
