import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar.tsx";
import About from "./pages/About.tsx";
import Qualifying from "./pages/Qualifying.tsx";
import EventDetails from "./pages/EventDetails.tsx";
import Travel from "./pages/Travel.tsx";
import ForParents from "./pages/ForParents.tsx";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function HeroSection() {
  const location = useLocation();
  const [email, setEmail] = useState("");
  const signupHref = `https://horizons.hackclub.com/?utm_source=crux&email=${encodeURIComponent(email)}`;

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const nextEmail = searchParams.get("email") ?? searchParams.get("email_address") ?? "";
    setEmail(nextEmail);
  }, [location.search]);

  const handleSignupSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    window.open(signupHref, "_blank", "noopener,noreferrer");
  };

  return (
    <div id="hero">
      <div id="hero-content">
        <div id="hero-logo-wrapper">
          <img
            src="https://file.garden/aOD6skM02SFxAOxK/IMG_5319.png"
            alt="Horizons Crux"
            id="hero-logo"
          />
        </div>
        <p id="subtitle">Start now to join us in Sydney, July 10-12</p>
        <h1 id="hero-title">
          Build bold projects, Win awesome prizes
          <br />
          at Horizons Crux
        </h1>
        <p id="caption">Solo or in teams, for high school students ages 13-18.</p>
        <form id="hero-signup-strip" aria-label="Sign up for Horizons" onSubmit={handleSignupSubmit}>
          <input
            id="hero-signup-text"
            type="email"
            name="email"
            placeholder="horizons@hackclub.com"
            aria-label="Email address"
            autoComplete="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <button
            id="hero-signup-button"
            type="submit"
          >
            Start Now
          </button>
        </form>
      </div>
    </div>
  );
}

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
        href={`https://horizons.hackclub.com/?utm_source=crux`}
        target="_blank"
        rel="noreferrer"
      >
        Get Started
      </a>

      <div id="main-wrapper">
        <HeroSection />

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
            <h1>Sponsors & Partners</h1>
            <div id="sponsors-box">
              <p>Coming soon - Meet our amazing sponsors</p>
              <div id="sponsors-slot" aria-label="Sponsor logos and links" />
            </div>
            <hr style={{ margin: '2rem 0', borderColor: 'rgba(185, 255, 255, 0.2)' }} />
            
            <h2>With love from the Horizons team.</h2>
            <p>Hack Club is a 501(c)(3) nonprofit and network of 60k+ technical high schoolers. We believe you learn best by building so we're creating community and providing grants so you can make awesome projects. In the past few years, we've partnered with Nasa to run <a href="stardance.space">Stardance</a>, hosted <a href="https://github.com/hackclub/the-hacker-zephyr">the world's longest hackathon on land</a>, and ran <a href="kiwihacks.com">New Zealand's largest high school hackathon</a>.</p>
            <div id="footer-link-columns">
              <div>
                <h2>Hack club</h2>
                <a href="https://hackclub.com/philosophy/">Our Philosophy</a>
                <a href="https://hackclub.com/team/">Team and Board</a>
                <a href="https://hackclub.com/philanthropy/">Donate</a>
              </div>
              <div>
                <h2>Horizons</h2>
                <a href="https://horizons.hackclub.com">Horizons Homepage</a>
                <a href="https://horizons.hackclub.com/faq">FAQ</a>
                <a href="https://guides.horizons.hackclub.com/">Guides</a>
              </div>
              <div>
                <h2>Community</h2>
                <a href="https://slack.hackclub.com/">Slack</a>
                <a href="https://jams.hackclub.com/">Jams</a>
                <a href="https://hackclub.com/conduct/">Code Of Conduct</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
