import React from "react";
import TopNavbar from "../components/TopNavbar/TopNavbar";
import Banner from "../components/Banner/Banner";
import "./HomeLayout.css";
import CollegeCard from "../components/CollegeCard/CollegeCard";
import GallerySection from "../components/GallarySection/GallerySection";
import ResearchSection from "../components/ResearchSection/ResearchSection";
import SearchSection from "../components/SearchSection/SearchSection";

const HomeLayout = () => {
  return (
    <div>
      <div className="bg-img">
        <TopNavbar></TopNavbar>
        <Banner></Banner>
      </div>
      <SearchSection></SearchSection>
      <CollegeCard></CollegeCard>
      <GallerySection></GallerySection>
      <ResearchSection></ResearchSection>
    </div>
  );
};

export default HomeLayout;
