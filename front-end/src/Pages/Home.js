import "./Home.css";
import FeaturedListing from "../Components/FeaturedListing.js";

function Home() {
  //const greeting = localStorage.getItem("userId");
  const userName = localStorage.getItem("username");

  return (
    <div>
      <div id="main-content">
        <h2>Welcome {userName}!</h2>
        <h1>Rethink. Reduce. Reuse.</h1>
        <FeaturedListing />
      </div>
      <div id="home-image"></div>
    </div>
  );
}

export default Home;
