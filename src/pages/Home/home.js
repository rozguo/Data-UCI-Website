import React from "react";
import "./home.scss";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer.js";

const Home = () => {
  const imageSrc = require("../../components/logo.png");
  const pic1 = require("../../components/fish.jpeg");
  const pic2 = require("../../components/get-a-job.jpg");
  const pic3 = require("../../components/plankton.jpg");
  return (
    <>
      <NavBar />
      <div className="container landing-screen">
        <div className="row h-100 test d-flex justify-content-center align-items-center text-center space-between-auto">
          <div className="col-sm-12 d-md-none">
            <h1 style={{ fontSize: "45px", fontWeight: "400" }}>Data @ UCI</h1>
            <img src={imageSrc} className="logo-img" />
            <p style={{ fontSize: "25px" }}>
              A community for Anteaters to explore the world of data and their
              place in it.
            </p>
            <a href="/events" className="btn btn-primary blue-btn">
              Get Involved
              {">"}
            </a>
          </div>

          <div className="col-md-6 d-none d-md-block">
            <img
              src={imageSrc}
              className="logo-img"
              style={{ width: "100%" }}
            />
          </div>

          <div className="col-md-6 d-none d-md-block">
            <h1
              style={{
                fontSize: "45px",
                fontWeight: "400",
              }}
            >
              Data @ UCI
            </h1>
            <p style={{ fontSize: "25px" }}>
              A community for Anteaters to explore the world of data and their
              place in it.
            </p>
            <a href="/events" className="btn btn-primary get-involved-btn">
              Get Involved
              {">"}
            </a>
          </div>
        </div>
      </div>

      <div className="description-screen">
        <div className="need-padding">
          <div className="row">
            <div className="col-md-6 description-screen-row">
              <img src={pic1} className="test-pic float-end" />
            </div>
            <div className="col-md-6 description-screen-row">
              <p className="test-desc text-md-end">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur porta sem vitae felis mattis, non feugiat risus
                pellentesque. Maecenas molestie eget tortor ac faucibus. Sed ac
                mauris non nibh rhoncus tristique.{" "}
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 order-md-2 description-screen-row">
              <img src={pic2} className="test-pic float-start" />
            </div>
            <div className="col-md-6 order-md-1 description-screen-row">
              <p className="test-desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur porta sem vitae felis mattis, non feugiat risus
                pellentesque. Maecenas molestie eget tortor ac faucibus. Sed ac
                mauris non nibh rhoncus tristique.{" "}
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 description-screen-row">
              <img src={pic3} className="test-pic float-end" />
            </div>
            <div className="col-md-6 description-screen-row">
              <p className="test-desc text-md-end">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur porta sem vitae felis mattis, non feugiat risus
                pellentesque. Maecenas molestie eget tortor ac faucibus. Sed ac
                mauris non nibh rhoncus tristique.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="about-us">
        <div className="row about-us-test d-flex justify-content-center text-center align-items-center">
          <h1 style={{ fontSize: "45px", fontWeight: "400" }}>About Us</h1>
          <p>
            Throughout each quarter, Data@UCI strives to create useful,
            insightful and fun events to enrich each members' interest and
            knowledge of data, as well as expand their professional circle.
            Workshops serve as an opportunity for honing important skills to use
            in your future career in data. Panels allow for networking with
            industry professionals and graduates. We also host more
            social-focused activities to allow our members to relax and have fun
            while simultaneously growing UCI's data community.
          </p>
          <a href="/about" className="btn btn-primary yellow-btn">
            Learn More {">"}
          </a>
        </div>
      </div>

      <div className="interested">
        <div className="row interested-section d-flex flex-column justify-content-center text-center align-items-center">
          <h1 style={{ fontSize: "45px", fontWeight: "400" }}>Interested?</h1>
          <p>
            Connect with us here! Don’t forget to view out events tab for
            upcoming workshops and socials!
          </p>
          <a href="/join" className="btn btn-primary blue-btn">
            Keep In Touch
            {">"}
          </a>
          <a href="/events" className="btn btn-primary blue-btn">
            View Events
            {">"}
          </a>
        </div>
      </div>
      <Footer id="f" />
    </>
  );
};

export default Home;
