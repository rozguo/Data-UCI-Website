import React from "react";
import "./events.css";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import PrevEvents from "./events-grid";
const Events = () => {
  const currentEvent = require("../../components/wicsXdataFIN2.png");
  return (
    <div className="events-view">
      <NavBar />
      <div className="upcoming-events">
        <h1>Upcoming Events</h1>
        <div className="upcoming-event-card">
          <div className="upcoming-event-pic">
            <img
              src={currentEvent}
              alt="Transportation with Kyler Chin announcement"
              id="event-styler"
            />
          </div>
          <p>
            Curious about the dynamic world of female leadership in the AI/ML
            field? Join WICS and Data @ UCI for an enlightening panel discussion
            where our accomplished female speakers will showcase their
            groundbreaking projects and offer invaluable insights. <br />
            <br />
            Don't miss this opportunity to gain a deeper understanding of the
            ever-evolving AI/ML landscape from some of the brightest minds in
            the industry.
            <br />
            <br />
            <br /> Date: <b>Monday, November 20th</b> <br />
            Time: <b>6:30PM - 7:30PM </b>
            <br />
            Location: <b>DBH 6011</b>
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
