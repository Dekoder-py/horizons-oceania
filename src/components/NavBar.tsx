import "./NavBar.css";

export default function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="#">
          <img src="/logo.png" alt="Horizons logo" />
        </a>
      </div>
      <div className="navbar-links">
        <a href="#about">About</a>
      </div>
    </nav>
  );
}
