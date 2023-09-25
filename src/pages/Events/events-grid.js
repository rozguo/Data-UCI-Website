const PrevEvents = () => {
  const prevEvent1 = require("../../components/potluck.jpg");
  const prevEvent2 = require("../../components/intro-data-eng.png");
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
            src={prevEvent1}
            alt="End of year party announcement"
            id="prev-event-pic"
          />
        </div>
        <div id="event-card">
          <img
            src={prevEvent2}
            alt="Intro to data engineering announcement"
            id="prev-event-pic"
          />
        </div>
      </div>
    </div>
  );
};

export default PrevEvents;
