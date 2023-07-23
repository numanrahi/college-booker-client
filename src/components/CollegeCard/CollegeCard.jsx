import React, { useEffect, useState } from "react";
import SingleCollegeCard from "../SingleCollegeCard/SingleCollegeCard";

const CollegeCard = () => {
  const [colleges, setColleges] = useState([]);

  useEffect(() => {
    fetch("college.json")
      .then((res) => res.json())
      .then((data) => {
        const sortedColleges = data.sort((a, b) => b.researchHistory - a.researchHistory);
        const top3Colleges = sortedColleges.slice(0, 3);
        setColleges(top3Colleges);
      });
  }, []);

  return (
    <div>
      <div className="fs-2 text-center py-3">Top Colleges of the year</div>
      <div className="row">
        {colleges?.map((single) => (
          <SingleCollegeCard
            single={single}
            key={single.id}
          ></SingleCollegeCard>
        ))}
      </div>
    </div>
  );
};

export default CollegeCard;
