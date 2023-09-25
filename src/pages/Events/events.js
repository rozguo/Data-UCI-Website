import React from "react";
import "./events.css";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import PrevEvents from "./events-grid";
const Events = () => {
  const currentEvent = require("../../components/AIF.jpg");
  return (
    <div className="events-view">
      <NavBar />
      <div className="upcoming-events">
        <h1>Upcoming Events</h1>
        <div className="upcoming-event-card">
          <div className="upcoming-event-pic">
            <img src={currentEvent} alt="AIF announcement" id="event-styler" />
          </div>
          <p>
            Hey Anteaters! Join us at the Anteater Involvement Fair! We're
            thrilled to announce that Data @ UCI will be hosting a booth at the
            Anteater Involvement Fair!
            <br />
            <br /> Date: <b>Monday, September 25th!</b> <br />
            Time: <b>11AM - 4PM </b>
            <br />
            Location: <b>Booth F184 </b>
            <br />
            <br />
            Come swing by our booth to discover the exciting world of data
            science and analytics right here at UCI! Whether you're a seasoned
            data enthusiast or just curious about what data can do, we have
            something for everyone!
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
