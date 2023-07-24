import React, { useEffect, useState } from "react";
import "./AllCollegesCard.css";

const AllCollegesCard = ({ singleCollege }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("https://college-booker-server-ten.vercel.app/reviews")
      .then((res) => res.json())
      .then((data) => {
        const real_data = data.filter(
          (single) => single?.collegeId === singleCollege.id
        );
        setReviews(real_data);
      });
  }, [singleCollege.id]);

  const review_num = reviews?.reduce(
    (sum, obj) => sum + parseInt(obj?.rating),
    0
  );
  const review_length = reviews?.length;
  const avg_review = parseInt(review_num / review_length);

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
            <div>
              <div>Review: {avg_review}</div>
            </div>
            <div className="btn btn-primary">Details</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllCollegesCard;
