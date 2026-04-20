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
        <img src="/logo_white_bg.png" height={450} />{" "}
        <p id="subtitle">{eventCity} | July 10 - 12, 2026</p>
        <p id="caption">
          Hackathons around the world. For high schoolers, by high schoolers.
        </p>
      </div>

      <div id="about">
        <h2>About</h2>
        <p>
          <a href="https://horizons.hackclub.com">Horizons</a> is a group of
          hackathons around the world. From July 10 to 12, join us in{" "}
          {eventCity} for
          {eventName}! <br />
          Horizons is organised by {" "}
          <a href="https://hackclub.com" referrerPolicy="no-referrer">
            Hack Club
          </a>{" "}
          (a 501(c)(3) nonprofit), by teenagers, for teenagers.
        </p>

        <p>
          Qualify for {eventName} by spending {hourRequirement} creating
          projects, and you'll get to join 100+ likeminded teenagers in{" "}
          {eventCity} to create something amazing!
        </p>

        <p>
          Food, snacks, and travel will be fully funded, plus, there'll be some
          awesome swag there! Flight stipends will be avalible too. The
          hackathon is open to anyone between <b>13 and 18 years old</b>.
        </p>

        <h3>What is Hack Club?</h3>
        <p>
          Hack Club is a 501(c)(3) nonprofit (EIN: 81-2908499) that helps high
          school students learn to code and build projects. We’re the largest
          teen-led coding community, with over 50,000 students building projects
          with their friends in Hack Club each year.
        </p>
        <p>Some of our past events include:</p>
        <ul>
          <li>
            Juice: a 2-month game jam followed by a 7-day pop-up cafe in
            Shanghai, China
          </li>
          <li>
            Undercity: a 4-day hardware hackathon in GitHub HQ, San Francisco
          </li>
          <li>
            Shiba: a 7-day pop-up arcade in Tokyo, Japan where teenagers built
            their own arcade machines
          </li>
        </ul>
        <p>
          ... and many more!
          <br />
          To learn more about Hack Club, visit the{" "}
          <a href="https://hackclub.com">main website</a> and {" "}
          <a href="https://hackclub.com/philosophy/">Hack Club Philosophy</a>.
        </p>
        <h3>Team and Contact</h3>
        <p>Horizons Crux is led by 8 teens from Australia and New Zealand!</p>
        <p>
          If you have any questions, feel free to reach out to us at {" "}
          <a href="mailto:crux@horizons.hackclub.com">
            crux@horizons.hackclub.com
          </a>
          .
        </p>
      </div>
    </>
  );
}

export default App;
