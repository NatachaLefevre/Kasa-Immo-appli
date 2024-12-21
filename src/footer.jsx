import React from 'react';
import './scss/footer.scss'
import logoKasaFooter from './assets/images/logo-kasa-blanc.png';

const Footer = () => {
  return (
    <footer>
      <img src={logoKasaFooter} alt="Logo Kasa" className="footer-logo" />
      <p>© 2024 Kasa. All rights reserved.</p>
    </footer>
  );
};

export default Footer;