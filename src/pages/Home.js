import React from "react";
import Navbar from "../components/Navbar";
import FileUpload from "../components/FileUpload";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="overlay-content">
        <h2>Upload a Legal Document for AI-Powered Analysis</h2>
        <FileUpload />
      </div>
    </div>
  );
};

export default Home;
