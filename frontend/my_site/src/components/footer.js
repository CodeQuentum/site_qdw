import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2025 MonSiteWeb. Tous droits réservés.</p>
        <nav>
          <ul>
            <li><a href="/about">À propos</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/privacy">Politique de confidentialité</a></li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;