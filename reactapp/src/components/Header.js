import React from "react";
import { Link } from 'react-router-dom'; // Use Link to navigate
import logo from '../images/homePage/logoImage.png';
import hireMeIcon from '../images/homePage/hireMePic.png';

import '../App.css';

function HeaderComponents() {
  return (
    <div id="headerComponents" className="headerComponents">
      {/* Logo Section */}
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>

      {/* Hire Me Icon */}
      <div className="hireMeIcon">
        <a href="mailto:egulti4128@conestogac.on.ca" className="hireMeIconLink">
          <img
            src={hireMeIcon}
            alt="Hire Me Icon"
            className="hireMeIconImage"
            style={{ width: '100px', height: 'auto', verticalAlign: 'middle' }}
          />
          <span style={{ marginLeft: '20px', textDecoration: 'none' }}>Hire Me</span>
        </a>
      </div>

      {/* Navigate to the Menu Page */}
      <div id="menuButton" className="menuBtn">
        <Link to="/menu" className="tablink">Menu</Link> {/* Link to the Menu page */}
      </div>
    </div>
  );
}

export default HeaderComponents;
