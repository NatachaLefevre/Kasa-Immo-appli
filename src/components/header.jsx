import React from 'react';
import { Link } from 'react-router-dom';
import '../scss/header.scss';
import logoKasaHeader from '../assets/images/logo-kasa-accueil.png';
import logoKasaHeaderMobile from '../assets/images/logo-kasa-accueil-mobile.png';
import { useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const isAbout = location.pathname === '/about';

  return (
    <header>

      <img src={logoKasaHeader} alt="Logo Kasa Accueil" className="header-logo" />
      <img src={logoKasaHeaderMobile} alt="Logo Kasa Accueil Mobile" className="header-logo-mobile" />

      <nav>
        <Link to="/" className={isHome ? 'active' : ''}>Accueil</Link>
        <Link to="/about" className={isAbout ? 'active' : ''}>À Propos</Link>
      </nav>

    </header>
  );
};

export default Header;