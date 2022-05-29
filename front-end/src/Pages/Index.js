import Listings from "../Components/Listings";


function Index({
  searchInput,
  listingsSearch,
  filterResults,
  handleNavigation,
}) {
  return (
    <main>
      <div>
        <Listings
          searchInput={searchInput}
          filterResults={filterResults}
          listingsSearch={listingsSearch}
          handleNavigation={handleNavigation}
        />
      </div>
    </main>
  );
}

export default Index;
