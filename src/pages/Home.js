import React from "react";
import '../assets/styles/home.css';
import Navbar from "../components/Navbar";

const Home = () => {
  const handleClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  
  return (
    <div className="home" id="home">
      <Navbar transparent/>
    <div className="items">
          <div className="titles">
            <h1 className="title">I'm Bezawit Eshetu</h1>
            <h1 className="title">
              Frontend Developer | UI/UX Designer | Logo Designer
            </h1>
            <button className="btn" >
            <a href="#contact" onClick={(e) => handleClick(e, "contact")}>Get in Touch</a>
            </button>
          </div>
          </div>
    </div>
  );
};

export default Home;
