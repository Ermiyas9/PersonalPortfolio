import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom'; 
import '../App.css';

function MenuLists() {
  
  // Start with menu open
  const [menuOpen, setMenuOpen] = useState(true); 
  const navigate = useNavigate();

  const handleMenuToggle = () => {
    if (menuOpen) {
      // When the user clicks 'Close', navigate to the previous page
      navigate(-1);
    } else {
      // Open the menu
      setMenuOpen(true);
    }
  };

  return (
    <div id="menuButton">
      {/* Menu is open initially, button will display 'Close' */}
      <div style={{ fontWeight: 'bold', fontFamily: 'Courier New, monospace', fontSize: '80px',alignSelf:'center'}}
        className={`tablink ${menuOpen ? "active" : ""}`}
        onClick={handleMenuToggle} 
      >
        {/* Showing Close and display menu lists  from the start cos i have menu button on the prev page */}
        Close
      </div>

      {/* Menu is open initially, showing menu list */}
      <div className="menuItems">
        <ul className="firstList">
          <li><Link to="/"className="firstList">HOME</Link></li>
          <li><p className="listMsg" >Back to Home page? </p></li>
          <li><Link to="/AboutMe">ABOUT ME</Link></li>
          <li><Link to="/projects">MY PROJECTS</Link></li>
        </ul>
        <ul className="secondList">
          <li><Link to="/Doggo">MEET MY DOG</Link></li>
          <li><Link to="/WorkExprience">MY EXPERIENCE</Link></li>
          <li><Link to="/Hobbies">HOBBIES</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default MenuLists;
