import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            GIORGOS
          </Link>
          <ul className="nav-menu">
            <li className="nav-item">
              <Link to="/" className="nav-links">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/tropical" className="nav-links">
                To the Beach
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/waterfall" className="nav-links">
                Waterfall
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/sahara" className="nav-links">
                Sahara
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/newyork" className="nav-links">
                New York
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
