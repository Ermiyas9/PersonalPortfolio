import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/inkblog1.png';
import '../App.css';

function App() {
  return (
    <div className="app-container">
      <div className="logo-nav-container">

        {/* Logo Image */}
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>

        {/* Navigation Links */}
        <div className="nav-links-container">
          <Link to="/Home" className="nav-link">Home</Link>
          <Link to="/AboutMe" className="nav-link">About Me</Link>
          <Link to="/Exprience" className="nav-link">Work Exprience</Link>
        </div>
      </div>

      {/* Page Content */}
      <div className="page-content">
        <p>website contents.</p>
   
      </div>



          {/* footer Links */}
          <div className="nav-links-container">
          <Link to="/Projects" className="nav-link">Projects</Link>
          <Link to="/Hobbies" className="nav-link">Hobbies</Link>
          <Link to="/Doggo" className="nav-link">Meet my Doggo</Link>
        </div>


      

    </div>
  );
}

export default App;



