import React from "react";
import "./events.css";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import PrevEvents from "./events-grid";
const Events = () => {
  const currentEvent = require("../../components/transportation.jpg");
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
            Join us for Kyler Chin's Public Transport Python and Data Workshop!
            Get ready to dive into the world of data analysis and Python
            programming, specifically tailored for public transport enthusiasts.
            Whether you're a beginner or an experienced coder, this workshop has
            something for everyone.
            <br />
            <br />
            <br /> Date: <b>Wednesday, November 1st!</b> <br />
            Time: <b>6:30PM - 7:30PM </b>
            <br />
            Location: <b>PSCB 140</b>
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
