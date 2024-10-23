import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import HeaderComponents from './Header';
import contentImage from '../images/contentImage.jpg';
import logoIcon from '../images/homePage/logoIcon.png';
import hireMe from '../images/homePage/hireMeIcon.png';
import outlookImageIcon from '../images/homePage/outlookIcon.png';
import emailIcon from '../images/homePage/gmailIcon.png';
import instaImageIcon from '../images/homePage/instaIcon.png';
import SocialMediaIconsDisplay from './socialMediaDisplay'; 

import '../App.css';

function HomePage() {
  return (
    <div className="app-container">

        <Routes>
          <Route path="/" element=
          {   
            <HeaderComponents 
                hireMeIcon={hireMe} 
                logo={logoIcon} 
            
          />} />
        </Routes>

           {/* Pass the appropriate icons as props */}
           <SocialMediaIconsDisplay 
                outlookIcon={outlookImageIcon} 
                gmailIcon={emailIcon} 
                instaIcon={instaImageIcon}
            />
        
      <div className="icon-container">
        <div className="logo">
         
        </div>

      </div>

      <div>
        <div className="headerNavLink">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/AboutMe" className="nav-link">About Me</Link>
          <Link to="/workExprience" className="nav-link">Experience</Link>
        </div>
      </div>

      <div className="contentImage">
        <img 
          src={contentImage} 
          alt="Content" 
          style={{ display: 'flex', width: '400px', height: 'auto', paddingTop: '20px',alignContent:'center' }} 
        />
      </div>


      <div className='imageAndIntroPara'>
        

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
        <Link to="/Doggo" style={{ paddingLeft: '150px' }}>Meet Doggo</Link>
      </div>


    </div>
  );
}

export default HomePage;