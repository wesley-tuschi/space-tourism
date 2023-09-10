import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Logo from "../assets/shared/logo.svg";
import Hamburguer from "../assets/shared/icon-hamburger.svg";
import Close from "../assets/shared/icon-close.svg";
import "../styles/NavBar.css";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg">
     <div className="container-fluid no-padding">
            <a className="navbar-brand" href="/">
              <img src={Logo} alt="logo" className='logo'/>
            </a>
            <div className="line"></div>
            <div className='navbar-content'>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={toggleMenu}
            >
             <img src={isMenuOpen ?  Close : Hamburguer} alt="Menu" className='menu-button'/>
            </button>
            <div className={`collapse navbar-collapse ${isMenuOpen ? 'menu-open' : ''}`} id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                <a className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} href="/">
                    <b>00</b> HOME
                  </a>
                </li>
                <li className="nav-item">
                <a className={`nav-link ${location.pathname === '/destination' ? 'active' : ''}`} href="/destination">
                    <b>01</b> DESTINATION
                  </a>
                </li>
                <li className="nav-item">
                <a className={`nav-link ${location.pathname === '/crew' ? 'active' : ''}`} href="/crew">
                  <b>02</b> CREW
                  </a>
                </li>
                <li className="nav-item">
                <a className={`nav-link ${location.pathname === '/technology' ? 'active' : ''}`} href="/technology">
                  <b>03</b> TECHNOLOGY
                  </a>
                </li>
              </ul>
              </div>
            </div>
          </div>
    </nav>
  );
};

export default NavBar;
