// Router Dom
import { NavLink } from "react-router-dom";

// Style - CSS
import "./Navigation.css";
import { useState } from 'react';

const Navigation = () => {

  return (
    <header>
      <nav className="header-container">
        <h2 className="header-logo">logo</h2>
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
          <NavLink className="btn btn-link" to="/product-register">
            Login
          </NavLink>
          <div>
          </div>
          
          </nav>
    </header>
  );
};

export default Navigation;
