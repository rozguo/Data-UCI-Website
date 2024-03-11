import React from "react";
import "./datathon.css";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import "../header.css";

const Datathon = () => {
  const pic1 = require("../../components/datathon1.png");
  const pic2 = require("../../components/datathon2.png");

  return (
    <div className="datathon-view">
      <NavBar />

      <div className="datathon-header">
        <h1>Atlantis 2024</h1>
        <p style={{ marginBottom: "5vh" }}>
          <b>What is a datathon?</b>
          <br />
          Similar to hackathons, datathons provide students an opportunity to
          explore <br />
          the vast world of data by working on a data science project related to
          a real-world issue.
        </p>
      </div>

      <div className="container datathon-page" style={{ marginTop: "55px" }}>
        <div className="upcoming-datathon-section">
          <h2>Apply Now</h2>
          <p>
            Passionate about data and eager to share your expertise? Become a
            mentor for Data @ UCI’s Datathon! Join us in guiding the next
            generation of data enthusiasts. Apply on the Atlantis website!{" "}
            <br />
            Follow us on our Instagram and subscribe to our newsletter to stay
            updated!
          </p>
          <a
            href="https://datathon.dataatuci.com/"
            className="btn btn-primary blue-btn"
          >
            Application Link
          </a>
          <br />
          <a href="/contact" className="btn btn-primary blue-btn">
            Keep In Touch
          </a>
        </div>
      </div>
      <div className="prev-datathon-section">
        <h1>Embark 2023</h1>
        <div className="embark-imgs">
          <img
            src={pic1}
            id="datathon-pic"
            alt="Students sitting at desk with laptop"
          ></img>
          <img
            src={pic2}
            id="datathon-pic"
            alt="Students sitting in lecture hall"
          ></img>
        </div>

        <div className="embark-desc">
          <p>
            From April 15th to April 16th, Data @ UCI hosted EMBARK, our very
            first Datathon! We were thrilled to see so many talented students
            participate and showcase their data analysis skills! Their
            enthusiasm and dedication brought a new level of energy to the
            event. All throughout the day, participants worked hard on their
            projects making great progress on their presentations and submission
            posts.
            <br />
            <br />
            We would like to extend a special to thank our workshop hosts for
            sharing their expertise and providing valuable insights to our
            participants, and thank you to our members for coming together and
            being a part of EMBARK! Additionally, we would like to shoutout to
            our incredible sponsors for their invaluable support and
            contributions to EMBARK 2023! A special thank you to UCI Office of
            Data and Information Technology, Melissa Data, MathWorks,
            Stratascratch, Crowdstrike, UCI Antrepreneur Center, Guayaki,
            Notion, and Quokka for making this event a huge success.
          </p>
        </div>
      </div>
      <Footer id="f" />
    </div>
  );
};

export default Datathon;
