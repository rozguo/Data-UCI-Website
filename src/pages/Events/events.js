import React from "react";
import "./events.css";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import PrevEvents from "./events-grid";
const Events = () => {
  const currentEvent = require("../../components/netflix-talk.jpg");
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
            Join Data @ UCI as we dive into the world of data analysis with Anuj
            Desai, a Netflix data wizard. Let's explore career insights and
            decode the secrets behind streaming success! See you soon!
            <br />
            <br />
            <br /> Date: <b>Wednesday, October 11th!</b> <br />
            Time: <b>6PM - 7PM </b>
            <br />
            Location: <b>PSLH 100</b>
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
