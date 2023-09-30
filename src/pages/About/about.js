import React from "react";
import { useState } from "react";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import Board from "./board-grid";
import "./about.css";

const About = () => {
  const mds = require("../../components/dark-mds-logo.png");
  const [isExpanded, setIsExpanded] = useState(false);

  const showText = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="about-view">
      <NavBar />
      <div className="container">
        <div className="about-header">
          <h1>Our Mission</h1>
          <p style={{ marginBottom: "5rvh" }}>
            Data@UCI aims to nurture a community of Anteaters exploring their
            place in an increasingly data-driven world. Through workshops,
            professional panels, and speaker events, we provide resources and a
            network for students to grow their analytical skills and gain a
            deeper appreciation for data — helping them to succeed in college
            and in their careers. We are a student-run organization ultimately
            dedicated to the UCI and larger Orange County communities.
          </p>
        </div>
      </div>
      <div className="board-section">
        <h1>Meet the Board</h1>
        <Board />
      </div>
      <div className="mds-section">
        <h1
          style={{
            color: "#173D6E",
            fontFamily: "arial",
          }}
        >
          A Special Thanks To Our Sponser
        </h1>
        <div>
          <div className="mds-logo-container" id="mds">
            <img src={mds} alt="MDS logo" />
          </div>
        </div>
        <div className="mds-desc">
          <p>
            The Master of Data Science (MDS) program is designed to cultivate
            expertise in contemporary data science methodologies. By integrating
            the foundational principles of Statistics and Computer Science, our
            program equips and empowers students with the necessary skills to
            thrive in the age of artificial intelligence disruption. Candidates
            may select from our full-time (15-month) or part-time (24-month)
            pathway, both instructed by esteemed faculty members and researchers
            possessing extensive experience in data science.
            <br />
          </p>
          <p
            className={`collapsible ${isExpanded ? "expanded" : ""}`}
            style={{ display: isExpanded ? "block" : "none" }}
            id="wrapper"
          >
            The curriculum emphasizes hands-on training in applied probability,
            mathematical statistics, statistical modeling, computing, machine
            learning, data management, visualization, and artificial
            intelligence. The UCI MDS program distinguishes itself with a robust
            foundation in data science, incorporating a balanced curriculum that
            accentuates both computer science and statistics. Furthermore, our
            program encompasses two capstone project courses, providing students
            with invaluable experience in addressing real-world challenges
            through data science techniques. As intelligent systems consume vast
            amounts of data, data science will be instrumental to the innovation
            of powerful and versatile AI systems. Graduates of the program will
            be equipped to adapt to the advancements of an AI-driven future.
          </p>
          <div style={{ paddingTop: "1rem" }}>
            <button
              onClick={showText}
              className="expand-text-btn"
              style={{ backgroundColor: isExpanded ? "#f9c805" : "#ffeca4" }}
            >
              {isExpanded ? "Read Less" : "Read More"}
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
