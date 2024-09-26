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
          <span><Link to="/hireMe" className="logo">Hire Me</Link></span>
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


        {/* Social Media Icons  in the div class to remind myself that to make image and text both of them in one underline*/}
        <div className="githubLogo" style={{ display: 'block', marginBottom: '10px' }}>
          <span style={{ display: 'inline-block', borderBottom: '3px solid black' }}>
            <img src={githubIcon} alt="githubLogo" className="socialMediaIcons" style={{ verticalAlign: 'middle' }} />
            
            <Link 
              to="https://github.com/Ermiyas9" 
              className="socialMediaIcons" 
              style={{ textDecoration: 'none', fontFamily: 'Arial, sans-serif', fontWeight: 'bold', fontSize: '20px', marginLeft: '5px', verticalAlign: 'middle' }}
            >
              Github/Ermiyas9
            </Link>
          </span>
        </div>

        <div className="linkedInLogo" style={{ display: 'block', marginBottom: '10px' }}>
          <span style={{ display: 'inline-block', borderBottom: '3px solid black' }}>
            <img src={linkedInIcon} alt="linkedInLogo" className="socialMediaIcons" style={{ verticalAlign: 'middle' }} />
            
            <Link 
              to="https://www.linkedin.com/in/ermiyas-gulti-ermigulti/" 
              className="socialMediaIcons" 
              style={{ textDecoration: 'none', fontFamily: 'Arial, sans-serif', fontWeight: 'bold', fontSize: '20px', marginLeft: '5px', verticalAlign: 'middle' }}
            >
              LinkedIn/Ermiyas Gulti 
            </Link>
          </span>
        </div>


        <div className="instaIcon" style={{ display: 'block', marginBottom: '10px' }}>
          <span style={{ display: 'inline-block', borderBottom: '3px solid black' }}>
            <img src={instaImageIcon} alt="instaLogo" className="socialMediaIcons" style={{ verticalAlign: 'middle' }} />
            
            <Link 
              to="https://github.com/Ermiyas9" 
              className="socialMediaIcons" 
              style={{ textDecoration: 'none', fontFamily: 'Arial, sans-serif', fontWeight: 'bold', fontSize: '20px', marginLeft: '5px', verticalAlign: 'middle' }}
            >
              Instagram/Ermiyas_g9
            </Link>
          </span>
        </div>


        <div className="outlookIcon" style={{ display: 'block', marginBottom: '10px' }}>
          <span style={{ display: 'inline-block', borderBottom: '3px solid black' }}>
            <img src={outlookImageIcon} alt="outlookLogo" className="socialMediaIcons" style={{ verticalAlign: 'middle' }} />
            
            <Link 
              to="https://github.com/Ermiyas9" 
              className="socialMediaIcons" 
              style={{ textDecoration: 'none', fontFamily: 'Arial, sans-serif', fontWeight: 'bold', fontSize: '20px', marginLeft: '5px', verticalAlign: 'middle' }}
            >
              outlook 
            </Link>
          </span>
        </div>

        <div className="emailIcon" style={{ display: 'block', marginBottom: '10px' }}>
          <span style={{ display: 'inline-block', borderBottom: '3px solid black' }}>
            <img src={emailIcon} alt="emailLogo"  className="socialMediaIcons" style={{ verticalAlign: 'middle' }} />
            
            <Link 
              to="https://github.com/Ermiyas9" 
              className="socialMediaIcons" 
              style={{ textDecoration: 'none', fontFamily: 'Arial, sans-serif', fontWeight: 'bold', fontSize: '20px', marginLeft: '5px', verticalAlign: 'middle' }}
            >
              gmail 
            </Link>
          </span>
        </div>

    </div>
  );
}

export default App;



