import React from "react";
import "./events.css";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import PrevEvents from "./events-grid";
const Events = () => {
  const currentEvent = require("../../components/intro-to-tech.jpeg");
  return (
    <div className="events-view">
      <NavBar />
      <div className="upcoming-events">
        <h1>Upcoming Events</h1>
        <div className="upcoming-event-card">
          <div className="upcoming-event-pic">
            <img
              src={currentEvent}
              alt="Intro Night announcement"
              id="event-styler"
            />
          </div>
          <p>
            Join us Data @UCI in learning how to land an internship or post grad
            role, and become more confident in applying yourself in the
            industry!
            <br />
            <br />
            <br /> Date: <b>Wednesday, October 18th!</b> <br />
            Time: <b>6PM - 7PM </b>
            <br />
            Location:{" "}
            <b>
              <a href="https://uci.zoom.us/j/98612025293#success">Zoom Link</a>
            </b>{" "}
            / PSLH 100
            <br />
            <br />
          </p>
        </div>
      </div>
      <div className="prev-events">
        <h1>Previous Events</h1>
        <div className="prev-events-card">
          <PrevEvents />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Events;
