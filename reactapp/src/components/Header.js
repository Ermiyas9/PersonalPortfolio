import { useState } from "react";
import React from "react";
import { Link } from 'react-router-dom';
import logo from '../images/homePage/logoImage.png';
import hireMeIcon from '../images/homePage/hireMePic.png';


import '../App.css';

function HeaderComponents(props) {
  // Get the current page URL
  let currentPage = window.location.href;

  // State to toggle the menu
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    // Toggle between open and close
    setMenuOpen((prevMenuOpen) => !prevMenuOpen);
  };

  return (
    <div id="headerComponents" className="headerComponents">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>





     


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

      

      

     


      <div id="menuButton" className="menuBtn">
        {/* Toggle between "Menu" and "Close" */}
        <div
          className={`tablink ${menuOpen ? "active" : ""}`}
          onClick={handleMenuToggle}
        >
          {menuOpen ? "Close" : "Menu"}

          {/* Menu content when the menu is open */}
          <div className="menuItems">
            {menuOpen ? (
              // Close and open menu lists
              <ul>
                {/* Menu items with Links */}
                <li><Link to="/">HOME</Link></li>
                <li><Link to="/AboutMe">ABOUT ME</Link></li>
                <li><Link to="/projects">MY PROJECTS</Link></li>
                <li><Link to="/Doggo">MEET MY DOG</Link></li>
                <li><Link to="/WorkExprience">MY EXPERIENCE</Link></li>
                <li><Link to="/Hobbies">HOBBIES</Link></li>
              </ul>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderComponents;
