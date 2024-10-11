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

function HeaderComponents() {
  const [activeTabName, setActiveTabName] = useState("Menu");

  // Initialize current page state
  const [currentPage, setCurrentPage] = useState("currentPage"); 

  const handleTabClick = (tabName) => {
    setActiveTabName(tabName);
    if (tabName === "Close") {

      // Set current page when Close is clicked
      setCurrentPage("currentPage"); 
    }
  };

  // Get the current page path
const currentPath = window.location.pathname;


  // Conditional Rendering
  let content;
  if (activeTabName === "Menu") {
    content = (
      <div className="menuItems">

        <div className="socialMediaIconsContainer" style={{display: 'flex', flexDirection: 'row', gap: '20px',paddingBottom: '20px',paddingLeft:'5px'}}>

            {/* link to my gitHub */}
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

            {/* link to my LinkedIn */}
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

            {/* link to my Instagram */}
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

            {/* link to school email */}
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

            {/* link to personal email */}
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
        <div className="menuList" >
          <ul>
            <li>HOME</li>
            <li>ABOUT ME</li>
            <li>MY PROJECTS</li>
            <li>MY DOGGO</li>
          </ul> 
        </div>
      </div>  
  );
  } else if (activeTabName === "Close") {

    // Display current page when Close is clicked
    content = content = null;;
  }

  return (
    <div id="menuDropDown" className="dropDownMenu">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>

        <div id="menuButton" className="menuBtn">
          <div
            className={`tablink ${activeTabName === "Menu" ? "active" : ""}`}
            onClick={() => handleTabClick("Menu")}
          >
            Menu | 
          </div>
          <div
            className={`tablink ${activeTabName === "Close" ? "active" : ""}`}
            onClick={() => handleTabClick("Close")}
          >
            Close
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
          {content}
        </div>
    </div>

  );
}

export default HeaderComponents;
