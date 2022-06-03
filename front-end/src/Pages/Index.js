import Listings from "../Components/Listings";

function Index({ listSearch, handleNavigation }) {
  return (
    <main>
      <div>
        <Listings
          listSearch={listSearch}
          handleNavigation={handleNavigation}
        />
      </div>
    </main>
  );
}

export default Index;
