import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";



// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Header = props => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <Link className="navbar-brand" to="/">
      Daniela Shvartsman
    </Link>
       <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li
          className={
            window.location.pathname === "/about" 
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to = "/about"
          className = "nav-link">
            About
          </Link>
        </li>
        <li
          className={
            window.location.pathname === "/contact"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to = "/contact"
          className = "nav-link">
            Contact
          </Link>
        </li>
        </ul>
      </div>

    <button
      className="navbar-toggler"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"/>
    </button>

  </nav>
);

export default Header;
