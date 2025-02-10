import React from "react";
import "../style/header.css";

const Header = () => {
  return (
    <header>
      <h1>QDW - Créations de site vitrine</h1>
      <nav>
        <ul>
          <li><a href="#">Accueil</a></li>
          <li><a href="#">À propos</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;