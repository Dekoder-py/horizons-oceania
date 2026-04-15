import "./App.css";

function App() {
  const eventCity = "Sydney";
  const eventName = "Horizons Crux";
  const venue = "VENUE TBD";
  const hours = 30;

  let hourRequirement = hours + " hours";

  return (
    <>
      <a href="https://hackclub.com/" id="hack-club-flag">
        <img
          src="https://assets.hackclub.com/flag-orpheus-top.svg"
          alt="Hack Club Flag"
        />
      </a>

      <div id="hero">
        <div id="title">
          <h2>Hack Club</h2>
          <h1>{eventName}</h1>
        </div>

        <p id="subtitle">{eventCity} | July 10 - 12, 2026</p>
        <p id="caption">
          Hackathons around the world. For high schoolers, by high schoolers.
        </p>

        <div className="down-arrow"></div>
      </div>
    </>
  );
}

export default App;

