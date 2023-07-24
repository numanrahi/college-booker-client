import React from "react";
import { Link } from "react-router-dom";
import "./TopNavbar.css";

const TopNavbar = () => {
  return (
    <div className="d-flex bg-white-cus justify-content-around py-3">
      <div className="fs-5">
        <img className="nav-img"
          src="https://media.istockphoto.com/id/1249802610/vector/college-educational-institute-school-icon-design.jpg?s=612x612&w=0&k=20&c=MRtthPKs4faM2wRhVZbaeydb0i98UkBcDm6GB4HOTa4="
          alt=""
        />
        College Booker
      </div>
      <div className="d-flex">
        <Link to="/" className="px-2 text-decoration-none text-black fs-5">
          Home
        </Link>
        <Link
          to="/colleges"
          className="px-2 text-decoration-none text-black fs-5"
        >
          Colleges
        </Link>
        <Link to="/admission" className="px-2 text-decoration-none text-black fs-5">
          Admission
        </Link>
        <Link className="px-2 text-decoration-none text-black fs-5">
          My College
        </Link>
      </div>
      <div>
        <Link to="/login" className="btn btn-primary">
          Login
        </Link>
      </div>
    </div>
  );
};

export default TopNavbar;
