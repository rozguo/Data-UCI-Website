import React from "react";
import "./events.css";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import PrevEvents from "./events-grid";
const Events = () => {
  const currentEvent = require("../../components/winter_workshop_announcement.png");
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
            Want to see data science in action? Add another project to your
            resume? Learn in-demand skills for industry? Gotten angry because a
            food delivery was late? If you answered yes to any of these
            questions, tune in for Data@UCI’s first ever workshop series!
            <br />
            <br /> Date: <b>Week 2, 4, 6, 8</b> <br />
            Time: <b>6:00PM - 7:00PM </b>
            <br />
            Location: <b>PCSB 140</b>
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
