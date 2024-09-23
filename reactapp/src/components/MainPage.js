import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/inkblog1.png';
import logo1 from '../images/contentImage.jpg';




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

        <div className="contentImage">
          <img src={logo1} alt="Logo1" />
    

  
        <p>Hello, My name is Ermiyas Gulti.  Software Engineering</p>
        <p>student passionate about coding and technology.</p> 
        <p>I live in Kitchener and I am looking for Co-op Jobs</p>
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



