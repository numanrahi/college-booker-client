import React from "react";
import "./SingleCollegeCard.css";
import { Link } from "react-router-dom";

const SingleCollegeCard = ({ single }) => {
  const id = single?._id;
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
            <Link to={`/colleges/${id}`} className="btn btn-primary">
              Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCollegeCard;
