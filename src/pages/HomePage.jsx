import React from "react";
import FeaturedJobs from "../components/FeaturedJobs";
import SearchBar from "../components/SearchBar";
import { Link } from "react-router-dom";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to the Job Portal</h1>
      <SearchBar />
      <FeaturedJobs />
    </div>
  );
};

export default HomePage;
