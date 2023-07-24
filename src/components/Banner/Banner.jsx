import React from "react";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import "./Banner.css";
import { Player } from "@lottiefiles/react-lottie-player";

const Banner = () => {
  return (
    <div className="d-flex">
      <div>
        <div className="banner-text">
          Dream, <br /> Explore ! <br /> Book Your College Experience!
        </div>
        <Link to="/colleges" className="text-decoration-none">
          <div className="explore d-flex align-items-center gap-3">
            <span>Explore Our Colleges </span>
            <span>
              <BsArrowRight className="fs-4"></BsArrowRight>
            </span>
          </div>
        </Link>
      </div>
      <div className="mt-5 bg-white-cus-2">
        <Player
          autoplay
          loop
          src="https://lottie.host/c76b09de-b2ac-4419-bdf3-d0ce2e6eec39/MWedcL2CKG.json"
          style={{ height: "300px", width: "300px" }}
        ></Player>
        <div className="text-center">
          <Link className="text-decoration-none w-100 btn btn-primary">
            Admission now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
