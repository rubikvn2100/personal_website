import React from "react";
import BusinessCard from "../components/BusinessCard";
import "./Home.css";

function Home() {
  return (
    <div className="home-page">
      <div className="introduction">
        <div className="CV-card">
          <BusinessCard />
        </div>
      </div>
    </div>
  );
}

export default Home;
