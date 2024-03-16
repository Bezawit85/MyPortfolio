import React from "react";
import "../assets/styles/about.css";
import Navbar from "../components/Navbar";

const About = () => {
  return (
    <div className="about" id="about">
      <Navbar />
      <div className="section2">
        <p className="topic">MY JOURNEY</p>
        <div className="times">
          <div className="box">
            <p className="detail">
              <h2 className="headline">Academic</h2><br />
              <strong>Debre Berhan University:</strong> <hr />I actively
              participated on school projects. we worked on a project called
              ItemReunite, facilitating the time a person finds his lost item by
              allowing users to post and search for detailed descriptions of
              their belongings, replacing traditional notice board methods.
            </p>
          </div>
          <div className="box" id="box2">
            <p className="detail">
              <h2 className="headline"> Internship</h2><br />
              <strong>Kifiya Financial Technology / Internship: </strong> <hr />
              I have 3 months of experience working as a MERN stack developer
              during campus internship, where I developed an intern accepting
              website. I Used technologies like MongoDB, Express.js, React, and
              Node.js, and have a strong understanding of full-stack
              development.
            </p>
          </div>
          <div className="box" id="box3">
            <p className="detail">
              <h2 className="headline">Full-Time Job</h2><br />
              <strong>Bazra Motors / Frontend Developer: </strong> <hr />I am
              building an Admin dashboard in React.js for Bazra Motors. I work
              with backend developers to connect the frontend and backend
              smoothly, Constantly developing building and deploying changes. I
              join team talks, pick up new tech fast, and adjust to changes in
              the industry.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
