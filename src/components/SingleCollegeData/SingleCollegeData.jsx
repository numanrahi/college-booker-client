import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./SingleCollegeData.css";
import TopNavbar from "../TopNavbar/TopNavbar";
import Footer from "../Footer/Footer";

const SingleCollegeData = () => {
  const ID = useParams();

  const [info, setInfo] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://college-booker-server-ten.vercel.app/colleges")
      .then((res) => res.json())
      .then((data) => setInfo(data));
  }, [data]);

  useEffect(() => {
    const selectCollege = info?.find((college) => college?._id === ID.ID);
    setData(selectCollege);
  }, [ID.ID, info]);

  const events = data?.events;
  const name = data?.name;
  const admissionDate = data?.admissionDate;
  const researchHistory = data?.researchHistory;
  const image = data?.image;
  const sports = data?.sports;

  return (
    <div>
      <div className="bg-detail">
        {" "}
        <TopNavbar></TopNavbar>
      </div>
      <div>
        <div className="col-11 col-md-6 mx-auto">
          <div className="college-card-home rounded-4 p-4">
            <div>
              <img className="img-fluid rounded-4" src={image} alt="img" />
            </div>
            <hr />
            <div className="box-text-card">
              <div>
                <div className="text-two fs-3 text-secondary">{name}</div>
              </div>
              <hr />
              <div>
                Admission dates :{" "}{admissionDate}
              </div>
              <div>
                Events :
                <span className="fw-bold event">{events?.[0]}, </span>
                <span className="fw-bold event">{events?.[1]}, </span>
                <span className="fw-bold event">{events?.[2]}</span>
              </div>
              <div>
                <div>
                  Research History :{" "}
                  <span className="fw-bold">{researchHistory}</span>
                </div>
              </div>
              <div>
                Sports : <span className="fw-bold event">{sports?.[0]}</span> ,{" "}
                <span className="fw-bold event">{sports?.[1]}</span> ,{" "}
                <span className="fw-bold event">{sports?.[2]}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default SingleCollegeData;
