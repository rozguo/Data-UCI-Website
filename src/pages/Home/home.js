import React from "react";
import "./home.css";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer.js";

const Home = () => {
  const imageSrc = require("../../components/logo.png");
  const pic1 = require("../../components/landing-pic1.png");
  const pic2 = require("../../components/melissa-audience.png");
  const pic3 = require("../../components/landing-pic3.png");
  return (
    <>
      <NavBar />
      <div className="container landing-screen">
        <div className="row h-100 test d-flex justify-content-center align-items-center text-center space-between-auto">
          <div className="col-sm-12 d-md-none">
            <h1
              style={{
                fontSize: "3rem",
                fontWeight: "400",
                marginBottom: "1rem",
              }}
            >
              Data @ UCI
            </h1>
            <img src={imageSrc} alt="Data@UCI's logo" className="logo-img" />
            <p style={{ fontSize: "20px" }}>
              A community for Anteaters to explore the world of data and their
              place in it.
            </p>
            <a href="/events" className="btn btn-primary blue-btn">
              Get Involved {">"}
            </a>
          </div>

          <div className="col-md-6 d-none d-md-block">
            <img
              src={imageSrc}
              alt="Data@UCI's logo"
              className="logo-img"
              style={{ width: "100%" }}
            />
          </div>

          <div className="col-md-6 d-none d-md-block">
            <h1
              style={{
                fontSize: "4.5rem",
                fontWeight: "400",
                marginBottom: "1rem",
              }}
            >
              Data @ UCI
            </h1>
            <p style={{ fontSize: "25px" }}>
              A community for Anteaters to explore the world of data and their
              place in it.
            </p>
            <a href="/events" className="btn btn-primary blue-btn">
              Get Involved {">"}
            </a>
          </div>
        </div>
      </div>

      <div className="description-screen">
        <div className="description-screen-container">
          <div className="row">
            <div className="col-md-6 description-screen-row">
              <div className="desc-img-container">
                <img
                  src={pic1}
                  alt="Students standing around Data@UCI Banner"
                  className="test-pic"
                />
              </div>
            </div>
            <div className="col-md-6 description-screen-row right-align">
              <p className="test-desc">
                Throughout each quarter, Data@UCI strives to create useful,
                insightful and fun events to enrich each members' interest and
                knowledge of data.
              </p>
              <div id="right-btn">
                <a href="/events" className="btn btn-primary yellow-btn ">
                  View Events {">"}
                </a>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 order-md-2 description-screen-row">
              <div className="desc-img-container2">
                <img
                  src={pic2}
                  alt="Students sitting in lecture hall"
                  className="test-pic"
                />
              </div>
            </div>
            <div className="col-md-6 order-md-1 description-screen-row left-align">
              <p className="test-desc">
                Last year, Data@UCI hosted EMBARK, UCI's very first datathon.
                Follow us for more information about the upcoming 2024 datathon!
              </p>
              <div id="left-btn">
                <a href="/datathon" className="btn btn-primary yellow-btn">
                  Datathon 2024 {">"}
                </a>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 description-screen-row">
              <div className="desc-img-container">
                <img src={pic3} alt="Data@UCI board" className="test-pic" />
              </div>
            </div>
            <div className="col-md-6 description-screen-row right-align">
              <p className="test-desc">
                Stay in the loop with all things Data@UCI! Sign up for our
                newsletter with our interest form to stay updated on club
                eventss and professional opportunites!
              </p>
              <div id="right-btn">
                <a
                  href="https://forms.gle/MjJQvXrmMaLW8d638"
                  className="btn btn-primary yellow-btn"
                >
                  Interest Form {">"}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="about-us" style={{ padding: "75px" }}>
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

      <div className="interested" style={{ padding: "75px" }}>
        <div className="row interested-section d-flex flex-column justify-content-center text-center align-items-center">
          <h1 style={{ fontSize: "45px", fontWeight: "400" }}>Interested?</h1>
          <p>
            Connect with us here! Don’t forget to view out events tab for
            upcoming workshops and socials!
          </p>
          <a href="/contact" className="btn btn-primary blue-btn">
            Keep In Touch {">"}
          </a>
          <a
            href="https://forms.gle/MjJQvXrmMaLW8d638"
            className="btn btn-primary blue-btn"
          >
            Newsletter Sign-up {">"}
          </a>
        </div>
      </div>
      <Footer id="f" />
    </>
  );
};

export default Home;
