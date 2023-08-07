import React from "react";
import "./navbar.css";
import logo from "../../assets/img/logo.png";
import Button from "../Button";
import { Link } from "react-router-dom";
import Streams from "../Streams";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__left">
        <div className="navbar__left__logo">
          <Link to="/">
            <img src={logo} alt="" draggable="false" />
          </Link>
        </div>
        <div className="navbar__left__items">
          <div className="navbar__dropdown">
            <span>
              teams <i className="fa-solid fa-chevron-down"></i>
            </span>

            <div className="navbar__dropdown__content">
              <Link to="/teams/valorant">
                <p>valorant</p>
              </Link>
              <Link to="/teams/valorant-x">
                <p>valorant | fem</p>
              </Link>
              <p>fornite</p>
              <p>counter strike</p>
              <p>creators</p>
            </div>
          </div>
        </div>
      </div>
      <div className="navbar__right">
        <div className="navbar__dropdown">
          <span>
            EN <i className="fa-solid fa-chevron-down"></i>
          </span>

          <div className="navbar__dropdown__content dropdown__right">
            <p>EN</p>
            <p>ES</p>
          </div>
        </div>
        <Button text="shop" />
      </div>
    </nav>
  );
}
