import React from "react";
import "../assets/styles/navigation.css";

const Navbar = ({ transparent }) => {
  const handleClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={`navbar ${transparent ? 'transparent' : ''}`} id="navbar">
      <div className="header">
        <ul className="navigation">
          <li className="navitems">
            <a href="/" >Home</a>
          </li>
          <li className="navitems">
            <a href="#about" onClick={(e) => handleClick(e, "about")}>About</a>
          </li>
          <li className="navitems">
            <a href="#service" onClick={(e) => handleClick(e, "service")}>Service</a>
          </li>
          <li className="navitems">
            <a href="#blog" onClick={(e) => handleClick(e, "blog")}>Blog</a>
          </li>
          <li className="navitems">
            <a href="#contact" onClick={(e) => handleClick(e, "contact")}>Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
