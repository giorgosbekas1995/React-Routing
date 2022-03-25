import React from "react";
import "../App.css";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/videos/video-2.mp4" autoPlay loop muted />
      <h1>React-Routing </h1>
      <p>Small project</p>
    </div>
  );
}

export default HeroSection;
