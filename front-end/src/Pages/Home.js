import "./Home.css";
import FeaturedListing from "../Components/FeaturedListing.js";
import CompanyIntro from "../Components/companyIntro/CompanyIntro";

function Home() {
  //const greeting = localStorage.getItem("userId");
  const userName = localStorage.getItem("username");

  return (
    <div>
      <div id="main-content">
        {/* <h2 className="left">Welcome {userName}!</h2>  */}
        <CompanyIntro />       
        <FeaturedListing />
      </div>
      <div id="home-image"><h1 className="rethink">Rethink. Reduce. Reuse.</h1></div>
    </div>
  );
}

export default Home;
