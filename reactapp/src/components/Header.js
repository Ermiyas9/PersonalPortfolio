import { useState } from "react";
import React from "react";

function HeaderComponents() {

    // Initialize with 'Menu'
  const [activeTab, setActiveTab] = useState("Menu"); 


  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (

    <div id="headerTab" className="headerTab">

      {/* Tab Buttons */}
      <div id="menuButton" className="menuBtn">
        
        <button
          className={`tablink ${activeTab === "Menu" ? "active" : ""}`}
          onClick={() => handleTabClick("Menu")}
        >
          Menu
        </button>
        <button
          className={`tablink ${activeTab === "HireMe" ? "active" : ""}`}
          onClick={() => handleTabClick("HireMe")}
        >
          Hire Me
        </button>
      </div>

      {/* Tab Content */}
      <div className="tabContent">
        {activeTab === "Menu" && <h1>Menu</h1>}
        {activeTab === "HireMe" && <h1>Hire Me</h1>}
      </div>
    </div>
  );
}

export default HeaderComponents;
