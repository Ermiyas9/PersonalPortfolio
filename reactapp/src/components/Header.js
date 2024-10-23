import React from "react";
import { Link } from 'react-router-dom'; 


import '../App.css';

function HeaderComponents({hireMeIcon,logo}) {
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
          <span style={{ marginLeft: '15px', textDecoration: 'none' }}>Hire Me</span>
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
