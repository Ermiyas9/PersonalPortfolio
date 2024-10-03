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

function HomePage() {
  return (
    <div className="app-container">
      <div className="icon-container">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>

        <div className="hireMeIcon">
          <img src={hireMeIcon} alt="Hire Me Icon" />
          <span>
            <Link to="/hireMe">Hire Me</Link>
          </span>
        </div>
      </div>

      <div>
        <div className="headerNavLink">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/AboutMe" className="nav-link">About Me</Link>
          <Link to="/Experience" className="nav-link">Work Experience</Link>
        </div>
      </div>

      <div className='imageAndIntroPara'>
        <div className="contentImage">
          <img src={contentImage} alt="Content" />
        </div>

        <div className="midParagraphTxt">
          <p>Hello, my name is Ermiyas Gulti. I am a Software Engineering student passionate about coding and technology.</p>
          <p>I live in Kitchener and I am looking for co-op jobs.</p>
        </div>
      </div>

      <span className="pageScroller" aria-hidden="true">
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

      <div className="footerNavLink">
        <Link to="/Projects" className="nav-link">Projects</Link>
        <Link to="/Hobbies" className="nav-link">Hobbies</Link>
        <Link to="/Doggo" className="nav-link">Meet my Doggo</Link>
      </div>

      <div className="socialMediaIconsContainer">
        <div className="githubLogo" style={{ display: 'block', marginBottom: '10px' }}>
          <span style={{ display: 'inline-block', borderBottom: '3px solid black' }}>
            <img src={githubIcon} alt="GitHub" className="socialMediaIcons" style={{ verticalAlign: 'middle' }} />
            <a href="https://github.com/Ermiyas9" className="socialMediaIcons" style={{ textDecoration: 'none', fontFamily: 'Arial, sans-serif', fontWeight: 'bold', fontSize: '20px', marginLeft: '5px', verticalAlign: 'middle' }}>
              GitHub/Ermiyas9
            </a>
          </span>
        </div>

        <div className="linkedInLogo" style={{ display: 'block', marginBottom: '10px' }}>
          <span style={{ display: 'inline-block', borderBottom: '3px solid black' }}>
            <img src={linkedInIcon} alt="LinkedIn" className="socialMediaIcons" style={{ verticalAlign: 'middle' }} />
            <a href="https://www.linkedin.com/in/ermiyas-gulti-ermigulti/" className="socialMediaIcons" style={{ textDecoration: 'none', fontFamily: 'Arial, sans-serif', fontWeight: 'bold', fontSize: '20px', marginLeft: '5px', verticalAlign: 'middle' }}>
              LinkedIn/Ermiyas Gulti
            </a>
          </span>
        </div>

        <div className="instaIcon" style={{ display: 'block', marginBottom: '10px' }}>
          <span style={{ display: 'inline-block', borderBottom: '3px solid black' }}>
            <img src={instaImageIcon} alt="Instagram" className="socialMediaIcons" style={{ verticalAlign: 'middle' }} />
            <a href="https://www.instagram.com/Ermiyas_g9" className="socialMediaIcons" style={{ textDecoration: 'none', fontFamily: 'Arial, sans-serif', fontWeight: 'bold', fontSize: '20px', marginLeft: '5px', verticalAlign: 'middle' }}>
              Instagram/Ermiyas_g9
            </a>
          </span>
        </div>

        <div className="outlookIcon" style={{ display: 'block', marginBottom: '10px' }}>
          <span style={{ display: 'inline-block', borderBottom: '3px solid black' }}>
            <img src={outlookImageIcon} alt="Outlook" className="socialMediaIcons" style={{ verticalAlign: 'middle' }} />
            <a href="mailto:egulti4128@conestogac.on.ca" className="socialMediaIcons" style={{ textDecoration: 'none', fontFamily: 'Arial, sans-serif', fontWeight: 'bold', fontSize: '20px', marginLeft: '5px', verticalAlign: 'middle' }}>
              Hire Me
            </a>
          </span>
        </div>

        <div className="emailIcon" style={{ display: 'block', marginBottom: '10px' }}>
          <span style={{ display: 'inline-block', borderBottom: '3px solid black' }}>
            <img src={emailIcon} alt="Email" className="socialMediaIcons" style={{ verticalAlign: 'middle' }} />
            <a href="mailto:enduethio@gmail.com" className="socialMediaIcons" style={{ textDecoration: 'none', fontFamily: 'Arial, sans-serif', fontWeight: 'bold', fontSize: '20px', marginLeft: '5px', verticalAlign: 'middle' }}>
              Contact Me
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
