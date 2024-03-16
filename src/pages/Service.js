import React from "react";
import "../assets/styles/service.css";
import Navbar from "../components/Navbar";

const About = () => {
  return (
    <div className="service" id="service">
      <Navbar />
<div className="contain">
      <div className="right">
        <h1>👋 Hey there!</h1>
        <p style={{ fontSize: "20px" }}>
          I am a Frontend web developer with 1 year experience.</p>
          
          <h3> Services</h3>
          <ul className="highlight">
            <li> - Innovative ideas</li>
            <li>- Website developement</li>
            <li>- Graphics Design</li>
          </ul>

          <h3>Career highlights</h3>
          <ul className="highlight">
            <li>- Developed MERN stack fully responsive website</li>
            <li>
              - Improved user experience through innovative design solutions
            </li>
          </ul>
        
      </div>
      </div>
    </div>
  );
};

export default About;
