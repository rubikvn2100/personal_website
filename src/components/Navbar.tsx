import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      {/* <img src={process.env.PUBLIC_URL + "/avatar/avatar_32.jpg"} /> */}

      <Link to="/" className="router-link">
        <span className="material-symbols-outlined">home</span>
      </Link>

      <Link to="/" className="router-link">
        L. Khoa
      </Link>

      <Link to="/about" className="router-link">
        About me
      </Link>

      <Link to="/project" className="router-link">
        Projects
      </Link>
    </nav>
  );
}

export default Navbar;
