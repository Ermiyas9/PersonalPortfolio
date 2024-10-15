import { useState } from "react";
import React from "react";
import { Link } from 'react-router-dom';
import logo from '../images/homePage/logoImage.png';
import hireMeIcon from '../images/homePage/hireMePic.png';
import githubIcon from '../images/homePage/githubImage.png';
import linkedInIcon from '../images/homePage/linkInImage.png';
import instaImageIcon from '../images/homePage/instaImage.png';
import outlookImageIcon from '../images/homePage/outlookImage.png';
import emailIcon from '../images/homePage/emailImage.png';

import '../App.css';
import HomePage from "./HomePage";


function stylingComponents()
{


}

function HeaderComponents({ children }) {
  // State to toggle the menu
  const [menuOpen, setMenuOpen] = useState(false); 

  const handleMenuToggle = () => {

     // Toggle between open and close
    setMenuOpen((prevMenuOpen) => !prevMenuOpen);
  };

  return (
    <div id="menuDropDown" className="dropDownMenu">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>

      <div id="menuButton" className="menuBtn">

        {/* Toggle between "Menu" and "Close" */}
        <div
          className={`tablink ${menuOpen ? "active" : ""}`}
          onClick={handleMenuToggle}
        >
          {menuOpen ? "Close" : "Menu"}
        </div>
      </div>

      <div className="hireMeIcon">
        <a 
          href="mailto:egulti4128@conestogac.on.ca" 
          className="hireMeIconLink"
        >
          <img 
            src={hireMeIcon} 
            alt="Hire Me Icon" 
            className="hireMeIconImage"
            style={{ width: '100px', height: 'auto', verticalAlign: 'middle' }} 
          />
          <span style={{ marginLeft: '20px', textDecoration: 'none' }}>Hire Me</span>
        </a>
      </div>
      
      <div className="menuBtnOptions">
        {menuOpen ? (

          // Menu content when the menu is open
          <div className="menuItems">
            <div className="socialMediaIconsContainer" style={{ display: 'flex', flexDirection: 'row', gap: '20px', paddingBottom: '20px', paddingLeft: '5px' }}>
              
              {/* Social media icons */}
              <div className="githubIcon">
                <a 
                  href="https://github.com/Ermiyas9"
                  className="socialMediaIcons" 
                  style={{ textDecoration: 'none', display: 'inline-block' }}
                >
                  <img 
                    src={githubIcon} 
                    alt="GitHub" 
                    className="socialMediaIcons" 
                    style={{ verticalAlign: 'middle' }} 
                  />
                </a>
              </div>
              <div className="linkedInIcon">
                <a 
                  href="https://www.linkedin.com/in/ermiyas-gulti-4ab51521a/" 
                  className="socialMediaIcons" 
                  style={{ textDecoration: 'none', display: 'inline-block' }}
                >
                  <img 
                    src={linkedInIcon} 
                    alt="LinkedIn" 
                    className="socialMediaIcons" 
                    style={{ verticalAlign: 'middle' }} 
                  />
                </a>
              </div>
              <div className="emailIcon">
                <a 
                  href="https://www.instagram.com/Ermiyas_g9" 
                  className="socialMediaIcons" 
                  style={{ textDecoration: 'none', display: 'inline-block' }}
                >
                  <img 
                    src={instaImageIcon} 
                    alt="Instagram" 
                    className="socialMediaIcons" 
                    style={{ verticalAlign: 'middle' }} 
                  />
                </a>
              </div>
              <div className="emailIcon">
                <a 
                  href="mailto:egulti4128@conestogac.on.ca" 
                  className="socialMediaIcons" 
                  style={{ textDecoration: 'none', display: 'inline-block' }}
                >
                  <img 
                    src={outlookImageIcon} 
                    alt="School Email" 
                    className="socialMediaIcons" 
                    style={{ verticalAlign: 'middle' }} 
                  />
                </a>
              </div>
              <div className="emailIcon">
                <a 
                  href="mailto:enduethio@gmail.com" 
                  className="socialMediaIcons" 
                  style={{ textDecoration: 'none', display: 'inline-block' }}
                >
                  <img 
                    src={emailIcon} 
                    alt="Personal Email" 
                    className="socialMediaIcons" 
                    style={{ verticalAlign: 'middle' }} 
                  />
                </a>
              </div>
            </div>
            <div className="menuList">
              <ul>
                {/* Menu items with Links */}
                <li><Link to="/">HOME</Link></li>
                <li><Link to="/aboutMe">ABOUT ME</Link></li>
                <li><Link to="/projects">MY PROJECTS</Link></li>
                <li><Link to="/doggo">MY DOGGO</Link></li>
              </ul>
            </div>
          </div>
        ) : null} {/* Render nothing if the menu is closed */}
      </div>
    </div>
  );
}

export default HeaderComponents;
