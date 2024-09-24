import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/inkblog1.png';
import contentImage from '../images/contentImage.jpg';




import '../App.css';

function App() {
  return (
    <div className="app-container">
   
        {/* Logo Image */}
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
    
        {/* Navigation Links */}
        <div className="headerNavLink">
          <Link to="/Home" className="nav-link">Home</Link>
          <Link to="/AboutMe" className="nav-link">About Me</Link>
          <Link to="/Exprience" className="nav-link">Work Exprience</Link>
        </div>

      {/* Page Content */}
        <div className="contentImage">
          <img src={contentImage} alt="contentImage" />
        </div>
    
        <div className="midParagraphTxt">
          <p>Hello, My name is Ermiyas Gulti.  Software Engineering</p>
          <br /> {/* Correct usage of <br /> */}
          <p>student passionate about coding and technology.</p> 
          <p>I live in Kitchener and I am looking for Co-op Jobs</p>
        </div>
        
          {/* footer Links */}
          <div className="footerNavLink">
          <Link to="/Projects" className="nav-link">Projects</Link>
          <Link to="/Hobbies" className="nav-link">Hobbies</Link>
          <Link to="/Doggo" className="nav-link">Meet my Doggo</Link>
        </div>

    </div>
  );
}

export default App;



