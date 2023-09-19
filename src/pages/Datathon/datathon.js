import React from "react";
import "./datathon.css";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import "../header.css";

const Datathon = () => {
  const pic1 = require("../../components/fish.jpeg");
  const pic2 = require("../../components/get-a-job.jpg");
  return (
    <>
      <NavBar />
      <header>
        <h1 id="trying" style={{ textAlign: "center" }}>
          Datathon 2024
        </h1>
      </header>

      <div className="datathon-page">
        <div className="upcoming-datathon-section">
          <h2>Upcoming Datathon</h2>
          <p>
            Data@UCI’s upcoming datathon for 2024 will be announced soon. <br />
            Follow us on our Instagram and subscribe to our newsletter to stay
            updated!
          </p>
          <a href="" className="btn btn-primary blue-btn">
            Newsletter Sign-up {">"}
          </a>
          <br />
          <a href="/contact" className="btn btn-primary blue-btn">
            Keep In Touch {">"}
          </a>
        </div>
        <div className="prev-datathon-section">
          <h2>Embark 2023 Recap</h2>
          <div className="embark-imgs">
            <img src={pic1} id="fish-pic" alt=""></img>
            <img src={pic2} id="fish-pic" alt=""></img>
          </div>

          <div className="embark-desc">
            <p>
              From April 15th to April 16th, Data @ UCI hosted EMBARK, our very
              first Datathon! We were thrilled to see so many talented students
              participate and showcase their data analysis skills! Their
              enthusiasm and dedication brought a new level of energy to the
              event. All throughout the day, participants worked hard on their
              projects making great progress on their presentations and
              submission posts.
            </p>
          </div>
        </div>
      </div>

      <Footer id="f" />
    </>
  );
};

export default Datathon;
