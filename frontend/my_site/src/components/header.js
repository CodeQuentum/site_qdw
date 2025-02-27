import React from "react";
import "../style/header.css";
import logo from "../assets/img/logo_qdw_header.png";

const Header = () => {
  return (
    <header>
      <img src={logo} className="app_logo" alt="logo"/>
      <p>QDW</p>
      <nav>
        <ul className="nav-links">
          <li><a href="#services">Services</a></li>
          <li><a href="#about">À propos</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;