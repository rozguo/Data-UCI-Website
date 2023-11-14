import React from "react";
import "./events.css";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import PrevEvents from "./events-grid";
const Events = () => {
  const currentEvent = require("../../components/intro-to-data-science.jpg");
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
            Join us this Wednesday for our Intro to Data Science workshop! We
            will guide you through a data set as we use Pandas, Seaborn, and
            Sci-kit Learn!
            <br />
            <br />
            <a href=" https://www.kaggle.com/code/celestialsquid/data-uci-titanic-workshop-template">
              Link to Kaggle template. Please make a Kaggle account and copy
              template before event starts.
            </a>
            <br />
            <br />
            <br /> Date: <b>Wednesday, November 15th!</b> <br />
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
