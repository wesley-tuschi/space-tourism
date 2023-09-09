import React, {useState} from 'react';
import Logo from "../assets/shared/logo.svg"
import Hamburguer from "../assets/shared/icon-hamburger.svg"
import Close from "../assets/shared/icon-close.svg"
import "../css/Home.css";
const Home = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

    return (
        <div className="main vh-100">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              <img src={Logo} alt="logo" />
            </a>
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
             <img src={isMenuOpen ? Close : Hamburguer} alt="Menu" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    00 Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/destination">
                    01 Destination
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/crew">
                    02 Crew
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/technology">
                    03 Technology
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      
        <div className="container">
          <h2>So, you want to travel to</h2>
          <h1>Space</h1>
      
          <p>
            Let’s face it; if you want to go to space, you might as well genuinely go to
            outer space and not hover kind of on the edge of it. Well sit back, and relax
            because we’ll give you a truly out of this world experience!
          </p>
        </div>
      
        <button className="btn btn-primary">Explore</button>
      </div>
      
    );
}

export default Home;
