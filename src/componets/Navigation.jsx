//React Icons
import {
  FaCloudsmith,
  FaUserAlt,
  FaWindowClose,
  FaPlusCircle,
  FaPlusSquare,
} from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";

// Router Dom
import { NavLink } from "react-router-dom";

// Style - CSS
import "./Navigation.css";
import "./Nav.css";

//Hooks
import { useEffect, useState } from "react";
//Context
import { useAuthentication } from "../hooks/useAuthentication";
import { useAuthValue } from "../context/AuthContext";

const Navigation = () => {
  const [mobmenu, setmobMenu] = useState("");
  const { user } = useAuthValue();

  return (
    <header>
      <div className="container-nav">
        <div className="container-nav-logo-search">
          <div className="container-nav-header-logo">
            <NavLink to="/">
              <FaCloudsmith /> Logo
            </NavLink>
          </div>
          <div className="container-nav-header-search">
            <input type="text" />
            <button>Buscar</button>
          </div>
        </div>

        <nav className="container-nav-menus">
          <div className="container-nav-menus sub">
            <ul className="container-nav-menus-item menu">
              <li className="container-nav-menus-item">
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
              </li>
              <li className="container-nav-menus-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li className="container-nav-menus-item">
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="container-nav-menus login">
            {!user && (
              <ul className="container-nav-menus-item menu">
                <li className="log">
                  <NavLink to="/login">
                    <FaUserAlt /> Entre
                  </NavLink>
                </li>
                <li className="reg">
                  <NavLink to="/register">
                    Cadastrar
                  </NavLink>
                </li>
              </ul>
            )}

            {user && (
              <ul className="container-nav-menus-item menu">
                <li className="name">
                  <NavLink to="/my-profile">
                    <FaUserAlt /> {`${user.displayName}`}
                  </NavLink>
                </li>
                <li className="dash">
                  <NavLink to="/dashboard">Meus produtos</NavLink>
                </li>
                <li className="new">
                  <NavLink to="/product-register">Novo</NavLink>
                </li>
              </ul>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navigation;
