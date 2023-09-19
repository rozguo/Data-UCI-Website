import React from "react";
import "./contact.css";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faDiscord,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  const banner = require("../../components/banner.png");
  return (
    <div className="contact-page">
      <NavBar />
      <header>
        <h1 id="trying" style={{ textAlign: "center" }}>
          Contact Us
        </h1>
      </header>

      <div className="contact-section">
        <h2>View Our Socials</h2>
        <div className="container">
          <div className="row">
            <div className="col-md-3 icon-container">
              <FontAwesomeIcon
                icon={faLinkedin}
                style={{ color: "white" }}
                id="icon"
              />
            </div>
            <div className="col-md-3 icon-container">
              <FontAwesomeIcon
                icon={faDiscord}
                style={{ color: "white" }}
                id="icon"
              />
            </div>
            <div className="col-md-3 icon-container">
              <FontAwesomeIcon
                icon={faInstagram}
                style={{ color: "white" }}
                id="icon"
              />
            </div>
            <div className="col-md-3 icon-container">
              <FontAwesomeIcon
                icon={faEnvelope}
                style={{ color: "white" }}
                id="icon"
              />
            </div>
          </div>
        </div>

        <div className="email-section">
          <h1>Email Us</h1>
          <p className="about-us-desc" style={{ textAlign: "center" }}>
            Have any questions or suggestions? Interested in sponsoring our
            events? <br /> Feel free to email us here:
          </p>

          <a className="btn btn-primary yellow-btn">data.ucirvine@gmail.com</a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
