import React from "react";
import "./AllCollegesCard.css";

const AllCollegesCard = ({ singleCollege }) => {
  return (
    <div className="col-md-6 mb-4 border-5">
      <div className="college-card">
        <img
          className="college-image"
          src={singleCollege.image}
          alt="College Image"
        />
        <div className="college-info">
          <h2 className="college-name">{singleCollege.name}</h2>
          <p className="admission-dates">
            Admission Dates: {singleCollege.admissionDate}
          </p>
          <div className="events">
            <strong>Events:</strong>
            <ul>
              {singleCollege.events.map((event, index) => (
                <li key={index}>{event}</li>
              ))}
            </ul>
          </div>
          <p className="research-history">
            <strong>Research History:</strong> {singleCollege.researchHistory}
          </p>
          <div className="sports">
            <strong>Sports:</strong>
            <ul>
              {singleCollege.sports.map((sport, index) => (
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

export default AllCollegesCard;
