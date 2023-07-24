import React, { useEffect, useState } from "react";
import TopNavbar from "../TopNavbar/TopNavbar";
import AllCollegesCard from "../AllCollegesCard/AllCollegesCard";

const AllColleges = () => {
  const [all_colleges, set_allColleges] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/colleges")
      .then((res) => res.json())
      .then((data) => set_allColleges(data));
  }, []);

  return (
    <div>
      <TopNavbar></TopNavbar>
      <div>
        <div className="display-6 text-center my-5 text-char">
          Our All Colleges
        </div>
        <div className="row">
          {all_colleges?.map((singleCollege) => (
            <AllCollegesCard
              singleCollege={singleCollege}
              key={singleCollege.id}
            ></AllCollegesCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllColleges;
