const PrevEvents = () => {
  const prevEvent1 = require("../../components/potluck.jpg");
  const prevEvent2 = require("../../components/intro-data-eng.png");
  const prevEvent3 = require("../../components/AIF.jpg");
  const prevEvent4 = require("../../components/intro-night.png");
  const prevEvent5 = require("../../components/netflix-talk.jpg");
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
