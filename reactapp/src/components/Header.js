import { useState } from "react";
import React from "react";
import { Link } from 'react-router-dom';
function HeaderComponents() {

  // Initialize with 'Menu'
  const [activeTabName, setActiveTabName] = useState("Menu");

  const handleTabClick = (activeTabName) => {
    setActiveTabName(activeTabName);
  };

  return (

    <div id="menuDropDown" className="dropDownMenu">

      {/* Tab Buttons doing it without showing the actual button for designing purpose  */}
      <div id="menuButton" className="menuBtn">
        <div
          className={`tablink ${activeTabName === "Menu" ? "active" : ""}`}
          onClick={() => handleTabClick("Menu")}
        >
          Menu
        </div>
        <div
          className={`tablink ${activeTabName === "Close" ? "active" : ""}`}
          onClick={() => handleTabClick("Close")}
        >
          Close
          <div className="headerNavLink">
            <Link to="/" className="nav-link">Home</Link>
          </div>
          {/* i might can use this swith or the close button to close the menu and display home screen */}
        </div>
      </div>

      {/* Tab Content */}
      <div className="menuBtnOptions">
        {activeTabName === "Menu" && (
          <>
            <div className="menuBtnOptions">
              {activeTabName === "Menu" && (
                <div className="menuList">
                  <ul>
                    <li>HOME</li>
                    <li>ABOUT ME</li>
                    <li>MY PROJECTS</li>
                    <li>MY DOGGO</li>
                  </ul>
                </div>
              )}
            </div>
          </>
        )}

        {activeTabName === "Close" && <h1>Close</h1>}
      </div>
    </div>
  );
}

export default HeaderComponents;
