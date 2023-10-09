import React from "react";
import "./contact.css";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faDiscord,
  faInstagram,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  return (
    <>
      <div className="contact-view">
        <NavBar />

        <div className="contact-section">
          <h1>Contact Us</h1>
          <div className="container">
            <div className="row">
              <div className="col-md-3 icon-container">
                <a href="https://www.linkedin.com/company/data-uci">
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    style={{ color: "white" }}
                    id="icon"
                  />
                </a>
              </div>
              <div className="col-md-3 icon-container">
                <a href="https://discord.gg/aNAgdGfYSe">
                  <FontAwesomeIcon
                    icon={faDiscord}
                    style={{ color: "white" }}
                    id="icon"
                  />
                </a>
              </div>
              <div className="col-md-3 icon-container">
                <a href="http://instagram.com/dataatuci">
                  <FontAwesomeIcon
                    icon={faInstagram}
                    style={{ color: "white" }}
                    id="icon"
                  />
                </a>
              </div>
              <div className="col-md-3 icon-container">
                <a href="https://www.tiktok.com/@dataatuci?_t=8gM0AxlLTgY&_r=1">
                  <FontAwesomeIcon
                    icon={faTiktok}
                    style={{ color: "white" }}
                    id="icon"
                  />
                </a>
              </div>
            </div>
          </div>

          <div className="email-section">
            <h1>Email Us</h1>
            <p className="about-us-desc" style={{ textAlign: "center" }}>
              Have any questions or suggestions? Interested in sponsoring our
              events? <br /> Feel free to email us here:
            </p>

            <a
              href="mailto:data.ucirvine@gmail.com"
              className="btn btn-primary blue-btn"
            >
              data.ucirvine@gmail.com
            </a>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Contact;
