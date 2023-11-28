import React from "react";
import "./events.css";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import PrevEvents from "./events-grid";
const Events = () => {
  const currentEvent = require("../../components/dataUMC-potluck.png");
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
            Join us for an evening of collaboration and camaraderie as the data
            enthusiasts from UCI and UMC come together for a Potluck Collab!
            <br />
            <br />
            Don't miss out on this delightful fusion of data and dining – mark
            your calendar and join us for a memorable evening! Please let us
            know what your bringing through the{" "}
            <a href="https://docs.google.com/forms/d/e/1FAIpQLScE193ORRDp0cVa9tOZ1_nkCVcdxpfYnKnD1qtb8FgB1KNWMQ/viewform">
              {" "}
              RSVP link
            </a>
            !
            <br />
            <br /> Date: <b>Wednesday, November 29th</b> <br />
            Time: <b>6:30PM - 7:30PM </b>
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
