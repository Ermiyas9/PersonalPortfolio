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

    


      <div className="hireMeIcon" style={{ display: 'block', marginBottom: '10px' }}>
        <span style={{ display: 'inline-flex', alignItems: 'center', borderBottom: '3px solid black' }}>
          <a 
            href="mailto:egulti4128@conestogac.on.ca" 
            className="hireMeIcon" 
            style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', fontFamily: 'Arial, sans-serif', fontWeight: 'bold', fontSize: '20px', marginLeft: '5px', verticalAlign: 'middle' }}
          >
            <img 
              src={hireMeIcon} 
              alt="Hire Me Icon" 
              className="hireMeIcon" 
              style={{ verticalAlign: 'middle' }} 
            />
            <span style={{ marginLeft: '5px' }}>Hire Me</span>
          </a>
        </span>
      </div>


      </div>

      <div>
        <div className="headerNavLink">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/AboutMe" className="nav-link">About Me</Link>
          <Link to="/workExprience" className="nav-link">Work Experience</Link>
        </div>
      </div>

      <div className='imageAndIntroPara'>
        <div className="contentImage">
          <img src={contentImage} alt="Content" />
        </div>

        <div className="midParagraphTxt">
          <p>Hello, my name is Ermiyas Gulti.</p>
          <p>I am a Software Engineering student </p>
          <p>passionate about coding and technology.</p>
          <p>I live in Kitchener and I am looking for co-op job.</p>
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


        {/* link to my gitHub */}

          <div className="githubIcon" style={{ display: 'block', marginBottom: '10px' }}>
              <a 
                href="https://github.com/Ermiyas9"
                className="socialMediaIcons" 
                style={{ textDecoration: 'none', display: 'inline-block', verticalAlign: 'middle' }}
              >
                <img 
                  src={githubIcon} 
                  alt="Email" 
                  className="socialMediaIcons" 
                  style={{ verticalAlign: 'middle' }} 
                />
              </a>
          </div>
    

        {/* link to my linkdIn */}

          <div className="linkedInIcon" style={{ display: 'block', marginBottom: '10px' }}>
              <a 
                href="https://www.linkedin.com/in/ermiyas-gulti-4ab51521a/" 
                className="socialMediaIcons" 
                style={{ textDecoration: 'none', display: 'inline-block', verticalAlign: 'middle' }}
              >
                <img 
                  src={linkedInIcon} 
                  alt="Email" 
                  className="socialMediaIcons" 
                  style={{ verticalAlign: 'middle' }} 
                />
              </a>
          </div>

          
          {/* link to my insta */}

          <div className="emailIcon" style={{ display: 'block', marginBottom: '10px' }}>
              <a 
                href="https://www.instagram.com/Ermiyas_g9" 
                className="socialMediaIcons" 
                style={{ textDecoration: 'none', display: 'inline-block', verticalAlign: 'middle' }}
              >
                <img 
                  src={instaImageIcon} 
                  alt="Email" 
                  className="socialMediaIcons" 
                  style={{ verticalAlign: 'middle' }} 
                />
              </a>
          </div>

          {/* link to school email */}

          <div className="emailIcon" style={{ display: 'block', marginBottom: '10px' }}>
              <a 
                href="mailto:egulti4128@conestogac.on.ca" 
                className="socialMediaIcons" 
                style={{ textDecoration: 'none', display: 'inline-block', verticalAlign: 'middle' }}
              >
                <img 
                  src={outlookImageIcon} 
                  alt="Email" 
                  className="socialMediaIcons" 
                  style={{ verticalAlign: 'middle' }} 
                />
              </a>
          </div>

          {/* link to personal email */}

          <div className="emailIcon" style={{ display: 'block', marginBottom: '10px' }}>
              <a 
                href="mailto:enduethio@gmail.com" 
                className="socialMediaIcons" 
                style={{ textDecoration: 'none', display: 'inline-block', verticalAlign: 'middle' }}
              >
                <img 
                  src={emailIcon} 
                  alt="Email" 
                  className="socialMediaIcons" 
                  style={{ verticalAlign: 'middle' }} 
                />
              </a>
          </div>

      </div>
    </div>
  );
}

export default HomePage;
