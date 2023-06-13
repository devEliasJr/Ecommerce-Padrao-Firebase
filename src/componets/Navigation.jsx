//React Icons
import { FaCloudsmith, FaUserAlt, FaWindowClose } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";

// Router Dom
import { NavLink } from "react-router-dom";

// Style - CSS
import "./Navigation.css";

//Hooks
import { useEffect, useState } from "react";
//Context
import { useAuthentication } from "../hooks/useAuthentication";
import { useAuthValue } from "../context/authContext";

const Navigation = () => {
  const [mobmenu, setmobMenu] = useState("");
  const { user } = useAuthValue();
  console.log(user.displayName)

  return (
    <header>
      <div className="header-container">
        <div className="header-logo">
          <FaCloudsmith /> logo
        </div>
        {true && (
          <nav className="nav-container">
            <ul className="header-nav" style={{ display: mobmenu }}>
              <li className="header-nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
              </li>
              <li className="header-nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li className="header-nav-item">
                <NavLink className="nav-link" to="/">
                  Contact
                </NavLink>
              </li>
            </ul>
            {mobmenu === "flex" && (
              <i
                className="close-icon"
                onClick={() => {
                  setmobMenu("");
                }}
              >
                <FaWindowClose />
              </i>
            )}
          </nav>
        )}
        {!user &&
        <div className="header-login" onClick={() => {}}>
          <NavLink to="/login">
            <FaUserAlt /> Login
          </NavLink>
        </div>}

        {user &&
        <div className="header-login" onClick={() => {}}>
          <NavLink to="/dashboard">
            <FaUserAlt /> {`${user.displayName}`}
          </NavLink>
        </div>}

        <div
          className="header-menu-mob"
          onClick={() => {
            setmobMenu("flex");
          }}
        >
          <AiOutlineMenu />
        </div>
      </div>
    </header>
  );
};

export default Navigation;
