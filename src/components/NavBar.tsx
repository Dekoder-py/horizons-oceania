import { Link } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-links">
        <Link to="/">About</Link>
        <Link to="/qualifying">Qualifying</Link>
        <Link to="/event-details">Event Details</Link>
        <Link to="/travel">Travel</Link>
        <Link to="/for-parents">For Parents</Link>
      </div>
    </nav>
  );
}
