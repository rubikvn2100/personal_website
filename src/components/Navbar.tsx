import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function NavbarLinks() {
  return (
    <>
      {" "}
      <Link to="/" className="router-link navbar-home-link">
        Home
      </Link>
      <Link to="/about" className="router-link">
        About me
      </Link>
      {/* <Link to="/portfolios" className="router-link">
        Portfolios
      </Link>
      <Link to="/contact" className="router-link">
        Contact
      </Link> */}
      {/* <div>
        <button className="navbar-contact-button">Contact</button>
      </div> */}
    </>
  );
}

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className="navbar">
      <div className="navbar-main-section">
        <div className="navbar-brand">
          <span>Khoa</span>
          <span>Le</span>
          <span>S.E.</span>
        </div>
        <span
          className="material-symbols-outlined toggle-button"
          onClick={() => setShowMenu(!showMenu)}
        >
          menu
        </span>
        <div className="navbar-links">
          <NavbarLinks />
        </div>
      </div>
      {showMenu && (
        <div className="navbar-dropdown-menu">
          <div className="navbar-links">
            <NavbarLinks />
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
