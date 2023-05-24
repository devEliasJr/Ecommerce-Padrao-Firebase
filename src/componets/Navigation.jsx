//React Icons
import { FaCloudsmith, FaUserAlt } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";

// Router Dom
import { NavLink } from "react-router-dom";

// Style - CSS
import "./Navigation.css";
import { useState } from "react";

const Navigation = () => {
  return (
    <header>
      <nav className="header-container">
        <h2 className="header-logo">
          <FaCloudsmith /> logo
        </h2>
        <ul className="header-nav">
          <li className="header-nav-item">
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
          </li>
          <li className="header-nav-item">
            <NavLink className="nav-link" to="/">
              About
            </NavLink>
          </li>
          <li className="header-nav-item">
            <NavLink className="nav-link" to="/">
              Contact
            </NavLink>
          </li>
        </ul>
        <div className="header-login">
          <FaUserAlt /> Login
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
