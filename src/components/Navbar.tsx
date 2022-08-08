import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="router-link" id="navbar-name">
        Khoa Le
      </Link>

      <Link to="/" className="router-link" id="navbar-home-link">
        Home
      </Link>

      <Link to="/about" className="router-link">
        About me
      </Link>

      <Link to="/portfolios" className="router-link">
        Portfolios
      </Link>
      <div>
        <button id="navbar-contact-button">Contact</button>
      </div>
    </nav>
  );
}

export default Navbar;
