import './SearchSection.css'

const SearchSection = () => {
  return (
    <div className="mx-auto my-5" style={{ maxWidth: "1200px" }}>
      <div className="fs-2 text-center py-3">
        Search your <span className="bg-warning px-2">Dream</span> College here
        !
      </div>

      <form
        //  onSubmit={handleSearch}
      >
        <div className="text-center text-secondary py-2 mb-5">
          Discover Your Dream College - Where Futures Take Flight!
        </div>
        <div className="search-bar">
          <input type="text" name="text" className="search-input" required />
          <input className="search" type="submit" value={"Search!"} />
        </div>
      </form>
    </div>
  );
};

export default SearchSection;
