import React from "react";
import "./events.css";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import PrevEvents from "./events-grid";
const Events = () => {
  const currentEvent = require("../../components/data-finance.png");
  return (
    <div className="events-view">
      <NavBar />
      <div className="upcoming-events">
        <h1>Upcoming Events</h1>
        <div className="upcoming-event-card">
          <div className="upcoming-event-pic">
            <img
              src={currentEvent}
              alt="Data in Finance Announcement"
              id="event-styler"
            />
          </div>
          <p>
            Join us for an evening with data analysts Kienna Qin and Charlie
            Wang, as we delve into the dynamic world of data in finance.
            Discover how data science shapes financial strategies and
            decision-making. See you there!🤑
            <br />
            <br /> Date: <b>Tuesday, Jan 23rd</b> <br />
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
