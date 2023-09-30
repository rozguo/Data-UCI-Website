import React from "react";
import "./events.css";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import PrevEvents from "./events-grid";
const Events = () => {
  const currentEvent = require("../../components/intro-night.png");
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
            Ready to dive in the world of data?Join us for our Intro Night at
            Data @ UCI! Come meet the faces behind Data @ UCI as we unveil our
            plans for the upcoming quarter and engage in some Kahoot fun!
            <br />
            <b>
              Don't forget to RSVP{" "}
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLScQ8id_lOV2rV5YAPHgHrEFKMAqW3Xge1jP-cZzT-ISQg9boA/viewform"
                style={{ color: "white" }}
              >
                here
              </a>
              !
            </b>
            <br />
            <br /> Date: <b>Wednesday, October 4th!</b> <br />
            Time: <b>6PM - 7PM </b>
            <br />
            Location: <b>PSLH 100 </b>
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
