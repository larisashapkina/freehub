import Listings from "../Components/Listings";

function Home() {
  return (
    <main>
      <div id="main-content">
        <div id="home-image"></div>
        <div id="categories-menu">Browse by Category</div>
        <div id="featured-listings">
          Featured Listings (Carousel?)
          {/* <FeaturedListing /> */}
        </div>
        <div id="home-listings-container">
          Browse All Listings
          <div id="listings-banner-image">
            {/* <div id="listings-banner-image-text"></div> */}
          </div>
          <Listings />
        </div>
      </div>
    </main>
  );
}

export default Home;
