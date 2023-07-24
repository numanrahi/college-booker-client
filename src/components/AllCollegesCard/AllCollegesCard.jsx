import React from "react";
import './AllCollegesCard.css'

const AllCollegesCard = ({ singleCollege }) => {
  const { id, name, image, admissionDate, researchHistory, events, sports } =
    singleCollege;

  return (
    <div className="w-50 col-6 p-3">
      <div className="p-3 class-card">
        <div>
          <img src={`${image}`} className="img-fluid class-img p-2 " alt="" />
        </div>
        <div>
          <div className="fs-3">Class Name: {name}</div>
          <div className="btn w-100 mx-auto text-white bg-color">Enroll</div>
        </div>
      </div>
    </div>
  );
};

export default AllCollegesCard;
