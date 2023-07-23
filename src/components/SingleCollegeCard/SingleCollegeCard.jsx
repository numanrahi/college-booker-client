import React from "react";
import "./SingleCollegeCard.css";

const SingleCollegeCard = ({ single }) => {
  console.log(single);
  return (
    <div className="col-4 border-5">
      <div className="college-card">
        <img className="college-image" src={single.image} alt="College Image" />
        <div className="college-info">
          <h2 className="college-name">{single.name}</h2>
          <p className="admission-dates">
            Admission Dates: {single.admissionDate}
          </p>
          <div className="events">
            <strong>Events:</strong>
            <ul>
              {single.events.map((event, index) => (
                <li key={index}>{event}</li>
              ))}
            </ul>
          </div>
          <p className="research-history">
            <strong>Research History:</strong> {single.researchHistory}
          </p>
          <div className="sports">
            <strong>Sports:</strong>
            <ul>
              {single.sports.map((sport, index) => (
                <li key={index}>{sport}</li>
              ))}
            </ul>
            <div className="btn btn-primary">Details</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCollegeCard;
