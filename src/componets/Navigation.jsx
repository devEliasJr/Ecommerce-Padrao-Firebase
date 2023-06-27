//React Icons
import {
  FaCloudsmith,
  FaUserAlt,
  FaWindowClose,
  FaPlusCircle,
  FaPlusSquare,
  FaSearch,
} from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

// Router Dom
import { NavLink, Navigate } from "react-router-dom";

// Style - CSS
import "./Navigation.css";
import "./Nav.css";

//Hooks
import { useEffect, useState } from "react";
//Context
import { useAuthentication } from "../hooks/useAuthentication";
import { useAuthValue } from "../context/AuthContext";

//Query

const Navigation = () => {
  const [mobmenu, setmobMenu] = useState("");
  const { user } = useAuthValue();
  const [query, setQuery] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (query) {
      return navigate(`/search?q=${query}`);
    }
  };

  useEffect(() => {
    navigate(`/`);
  }, [query]);

  return (
    <header>
      <div className="container-nav">
        <div className="container-nav-logo-search">
          <div className="container-nav-header-logo">
            <NavLink to="/">
              <FaCloudsmith /> Logo
            </NavLink>
          </div>
          <form onSubmit={handleSubmit} className="container-nav-header-search">
            <input
              type="text"
              maxLength={70}
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
              }}
            />
            <button className="btn">
              <FaSearch />
            </button>
          </form>
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
                  <NavLink to="/register">Cadastrar</NavLink>
                </li>
              </ul>
            )}

            {user && (
              <ul className="container-nav-menus-item menu">
                <li className="name">
                  <NavLink to="/my-profile">
                    <FaUserAlt />
                    {user.displayName ? ` ${user.displayName}` : " Painel"}
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
