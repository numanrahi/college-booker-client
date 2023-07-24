import React from "react";
import { Link } from "react-router-dom";
import './Footer.css'

const Footer = () => {
  return (
    <div className="my-5">
      <hr />
      <section className="d-flex justify-content-around">
        <div>
          <div className="fs-1">
            <img
              className="nav-img"
              src="https://media.istockphoto.com/id/1249802610/vector/college-educational-institute-school-icon-design.jpg?s=612x612&w=0&k=20&c=MRtthPKs4faM2wRhVZbaeydb0i98UkBcDm6GB4HOTa4="
              alt=""
            />
            College Booker
          </div>
        </div>
        <div className="d-flex">
          <div className="mx-5">
            <div className="fs-4">Fast Link</div>
            <div className="d-grid">
              <Link className="text-decoration-none" to="/">
                Home
              </Link>
              <Link className="text-decoration-none" to="/colleges">
                Colleges
              </Link>
              <Link className="text-decoration-none" to="/admission">
                Admission
              </Link>
              <Link className="text-decoration-none" to="/">
                My College
              </Link>
            </div>
          </div>
          <div className="mx-5">
            <div className="fs-4">Contact Info</div>
            <div className="d-grid">
              <div>Address: Sylhet, Bangladesh</div>
              <div>Phone: 01700-******</div>
              <div>email: arahi2994@gmail.com</div>
            </div>
          </div>
        </div>
        <div className="d-grid">
          <Link
            className="px-2 text-decoration-none"
            to="https://web.facebook.com/RahiX2020"
          >
            Facebook
          </Link>
          <Link
            className="px-2 text-decoration-none"
            to="https://www.instagram.com/abdullah_al_numan_rahi/"
          >
            Instagram
          </Link>
          <Link
            className="px-2 text-decoration-none"
            to="https://twitter.com/numan_rahi08"
          >
            Twitter
          </Link>
          <Link
            className="px-2 text-decoration-none"
            to="https://github.com/numanrahi"
          >
            Github
          </Link>
          <Link
            className="px-2 text-decoration-none"
            to="https://www.linkedin.com/in/abdullah-al-numan-rahi-610611249/"
          >
            LinkedIn
          </Link>
        </div>
      </section>
      <hr />
      <section className="d-flex justify-content-between">
        <div className="mx-5 mx-auto">
          All Rights Reserved | &copy;{" "}
          <span className="text-primary">College Booker</span>
        </div>
      </section>
    </div>
  );
};

export default Footer;
