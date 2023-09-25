import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faDiscord,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer>
      <div className="container footer-container">
        <div className="row footer-socials">
          <div className="col-sm-12 d-flex justify-content-evenly">
            <a href="https://www.linkedin.com/company/data-uci">
              <FontAwesomeIcon
                icon={faLinkedin}
                style={{ color: "black" }}
                id="footer-icon"
              />
            </a>
            <a href="https://discord.gg/aNAgdGfYSe">
              <FontAwesomeIcon
                icon={faDiscord}
                style={{ color: "black" }}
                id="footer-icon"
              />
            </a>
            <a href="http://instagram.com/dataatuci">
              <FontAwesomeIcon
                icon={faInstagram}
                style={{ color: "black" }}
                id="footer-icon"
              />
            </a>
            <a href="mailto:data.ucirvine@gmail.com">
              <FontAwesomeIcon
                icon={faEnvelope}
                style={{ color: "black" }}
                id="footer-icon"
              />
            </a>
          </div>
        </div>
        <div className="row footer-links">
          <div className="col-sm-12 d-flex justify-content-evenly">
            <a href="/about" id="footer-link">
              About
            </a>
            <a href="/events" id="footer-link">
              Events
            </a>
            <a href="/datathon" id="footer-link">
              Datathon
            </a>
            <a href="/contact" id="footer-link">
              Contact
            </a>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <p
              id="footer-rights"
              style={{ textAlign: "center", fontSize: "10px!important" }}
            >
              © 2023 Data@UCI. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
