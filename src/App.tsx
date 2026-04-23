import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar.tsx";
import About from "./pages/About.tsx";
import Qualifying from "./pages/Qualifying.tsx";
import EventDetails from "./pages/EventDetails.tsx";
import Travel from "./pages/Travel.tsx";
import ForParents from "./pages/ForParents.tsx";

function App() {

  return (
    <Router>
      <a href="https://hackclub.com/" id="hack-club-flag">
        <img
          src="https://assets.hackclub.com/flag-orpheus-top.svg"
          alt="Hack Club Flag"
        />
      </a>

      <a
        id="hero-get-started-btn"
        href="https://horizons.hackclub.com"
        target="_blank"
        rel="noreferrer"
      >
        Get Started
      </a>

      <div id="main-wrapper">
        <div id="hero">
          <div id="hero-content">
            <div id="hero-logo-wrapper">
              <img
                src="/logo.png"
                alt="Horizons Crux"
                id="hero-logo"
              />
            </div>
            <p id="subtitle">Start now to join us in Sydney, July 10-12</p>
            <h1 id="hero-title">
              Build bold projects for free,
              <br />
              at Horizons Crux
            </h1>
            <p id="caption">Solo or in teams, for high school students ages 13-18.</p>
            <div id="hero-signup-strip" role="group" aria-label="Sign up for Horizons">
              <span id="hero-signup-text">orpheus@hackclub.com</span>
              <a
                id="hero-signup-button"
                href="https://horizons.hackclub.com"
                target="_blank"
                rel="noreferrer"
              >
                Start Now
              </a>
            </div>
          </div>
        </div>

        <NavBar />

        <div id="content-wrapper">
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/qualifying" element={<Qualifying />} />
            <Route path="/event-details" element={<EventDetails />} />
            <Route path="/travel" element={<Travel />} />
            <Route path="/for-parents" element={<ForParents />} />
          </Routes>
        </div>

        <footer id="page-footer">
          <div id="footer-content">
            <h2>Sponsors & Partners</h2>
            <p>Coming soon - Meet our amazing sponsors</p>
            <hr style={{ margin: '2rem 0', borderColor: 'rgba(185, 255, 255, 0.2)' }} />
            <p>Made with ❤️ by the Horizons Crux team</p> { /* TODO: add names */ }
            <p>&copy; 2026 Horizons Crux. A Hack Club event.</p>
            <p>For more info, visit <a href="https://hackclub.com">Hack Club</a></p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;

