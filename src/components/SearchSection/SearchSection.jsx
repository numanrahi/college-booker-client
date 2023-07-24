// import './SearchSection.css'

// const SearchSection = () => {
//   return (
//     <div className="mx-auto my-5" style={{ maxWidth: "1200px" }}>
//       <div className="fs-2 text-center py-3">
//         Search your <span className="bg-warning px-2">Dream</span> College here
//         !
//       </div>

//       <form
//         //  onSubmit={handleSearch}
//       >
//         <div className="text-center text-secondary py-2 mb-5">
//           Discover Your Dream College - Where Futures Take Flight!
//         </div>
//         <div className="search-bar">
//           <input type="text" name="text" className="search-input" required />
//           <input className="search" type="submit" value={"Search!"} />
//         </div>
//       </form>
//     </div>
//   );
// };

// export default SearchSection;

import React, { useState } from "react";
import "./SearchSection.css"; // Make sure you have the CSS file for styling.

const SearchSection = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [collegeData, setCollegeData] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      // const response = await fetch(`/api/search?college=${searchQuery}`);
      const response = await fetch("https://college-booker-server-ten.vercel.app/colleges");
      const data = await response.json();
      setCollegeData(data);
    } catch (error) {
      console.error("Error searching for college:", error);
    }
  };

  return (
    <div className="mx-auto my-5" style={{ maxWidth: "1200px" }}>
      <div className="fs-2 text-center py-3">
        Search your <span className="bg-warning px-2">Dream</span> College here!
      </div>

      <form onSubmit={handleSearch}>
        <div className="text-center text-secondary py-2 mb-5">
          Discover Your Dream College - Where Futures Take Flight!
        </div>
        <div className="search-bar">
          <input
            type="text"
            name="text"
            className="search-input"
            required
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <input className="search" type="submit" value={"Search!"} />
        </div>
      </form>

      {collegeData && (
        <div className="college-card">
          {/* Display the college card information here */}
          <h2>{collegeData.name}</h2>
          {/* Add other college details you want to display */}
        </div>
      )}
    </div>
  );
};

export default SearchSection;
