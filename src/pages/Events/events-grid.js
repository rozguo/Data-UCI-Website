const PrevEvents = () => {
  const prevEvent1 = require("../../components/potluck.jpg");
  const prevEvent2 = require("../../components/intro-data-eng.png");
  const prevEvent3 = require("../../components/AIF.jpg");
  const prevEvent4 = require("../../components/intro-night.png");
  const prevEvent5 = require("../../components/netflix-talk.jpg");
  const prevEvent6 = require("../../components/intro-to-tech.jpeg");
  const prevEvent7 = require("../../components/cookie.jpg");
  const prevEvent8 = require("../../components/transportation.jpg");
  const prevEvent9 = require("../../components/intro-to-data-science.jpg");
  const prevEvent10 = require("../../components/wicsXdataFIN2.png");
  const prevEvent11 = require("../../components/w24-week1.png");
  const prevEvent12 = require("../../components/winter_workshop_announcement.png");
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <div class="event-grid">
        <div id="event-card">
          <img
            src={prevEvent12}
            alt="Data Winter Workshop Series announcement"
            id="prev-event-pic"
          />
        </div>
        <div id="event-card">
          <img
            src={prevEvent11}
            alt="Data Winter 2024 announcement"
            id="prev-event-pic"
          />
        </div>
        <div id="event-card">
          <img
            src={prevEvent10}
            alt="Data x UMC potluck announcement"
            id="prev-event-pic"
          />
        </div>
        <div id="event-card">
          <img
            src={prevEvent9}
            alt="Intro to data science announcement"
            id="prev-event-pic"
          />
        </div>
        <div id="event-card">
          <img
            src={prevEvent8}
            alt="Intro to tech recruitment announcement"
            id="prev-event-pic"
          />
        </div>
        <div id="event-card">
          <img
            src={prevEvent7}
            alt="Transportation with Kyler Chin announcement"
            id="prev-event-pic"
          />
        </div>
        <div id="event-card">
          <img
            src={prevEvent6}
            alt="Intro to tech recruitment announcement"
            id="prev-event-pic"
          />
        </div>
        <div id="event-card">
          <img
            src={prevEvent5}
            alt="Netflix Data @ UCI announcement"
            id="prev-event-pic"
          />
        </div>
        <div id="event-card">
          <img
            src={prevEvent4}
            alt="Intro to Data @ UCI announcement"
            id="prev-event-pic"
          />
        </div>
        <div id="event-card">
          <img src={prevEvent3} alt="AIF announcement" id="prev-event-pic" />
        </div>
        <div id="event-card">
          <img
            src={prevEvent2}
            alt="End of year party announcement"
            id="prev-event-pic"
          />
        </div>
        <div id="event-card">
          <img
            src={prevEvent1}
            alt="Intro to data engineering announcement"
            id="prev-event-pic"
          />
        </div>
      </div>
    </div>
  );
};

export default PrevEvents;
