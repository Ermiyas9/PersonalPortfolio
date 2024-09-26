import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/inkblog1.png';
import contentImage from '../images/contentImage.jpg';
import hireMeIcon from '../images/hireMePic.png';
import githubIcon from '../images/githubImage.png';
import linkedInIcon from '../images/linkInImage.png';
import instaImageIcon from '../images/instaImage.png';
import outlookImageIcon from '../images/outlookImage.png';
import emailIcon from '../images/emailImage.png';





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

      <div className='imageAndIntroPara'>

      

      {/* Page Content */}
        <div className="contentImage">
          <img src={contentImage} alt="contentImage" />
        </div>

        <div className="hireMeIcon">
          <img src={hireMeIcon} alt="Hire Me Icon" />
          <Link to="/hireMe" className="logo">Hire Me</Link>
        </div>

    
        <div className="midParagraphTxt">
          <p>Hello, My name is Ermiyas Gulti.  Software Engineering</p>
          <p>student passionate about coding and technology.</p> 
          <p>I live in Kitchener and I am looking for Co-op Jobs</p>
        </div>

      </div>

       <span class="pageScroller" arial hidden="true">
          <span>
            <span>S</span>
            <span>C</span>
            <span>R</span>
            <span>O</span>
            <span>L</span>
            <span>L</span>
            <span> </span>
            <span>D</span>
            <span>O</span>
            <span>W</span>
            <span>N</span>
          </span>
        </span>

          {/* footer Links */}
          <div className="footerNavLink">
          <Link to="/Projects" className="nav-link">Projects</Link>
          <Link to="/Hobbies" className="nav-link">Hobbies</Link>
          <Link to="/Doggo" className="nav-link">Meet my Doggo</Link>
        </div>


        {/* Social Media Icons */}

        <div className="githubLogo">
          <img src={githubIcon} alt="githubLogo" className="socialMediaIcons" />
        </div>

        <div className="linkedInLogo">
          <img src={linkedInIcon} alt="linkedInLogo" className="socialMediaIcons" />
        </div>

        <div className="instaIcon">
          <img src={instaImageIcon} alt="instaLogo" className="socialMediaIcons" />
        </div>

        <div className="outlookIcon">
          <img src={outlookImageIcon} alt="outlookLogo" className="socialMediaIcons" />
        </div>

        <div className="emailIcon">
          <img src={emailIcon} alt="emailLogo" className="socialMediaIcons" />
        </div>


    </div>
  );
}

export default App;



