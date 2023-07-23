import React from "react";
import TopNavbar from "../components/TopNavbar/TopNavbar";
import Banner from "../components/Banner/Banner";
import "./HomeLayout.css";
import CollegeCard from "../components/CollegeCard/CollegeCard";

const HomeLayout = () => {
  return (
    <div>
      <div className="bg-img">
        <TopNavbar></TopNavbar>
        <Banner></Banner>
      </div>
      <CollegeCard></CollegeCard>
    </div>
  );
};

export default HomeLayout;
