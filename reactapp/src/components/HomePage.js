import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import HeaderComponents from './Header';
import FooterComponents from './Footer';
import contentImage from '../images/contentImage.jpg';
import logoIcon from '../images/homePage/logoIcon.png';
import hireMe from '../images/homePage/hireMeIcon.png';
import bankTellerImage from '../images/homePage/bankAndTeller.png';


import outlookImageIcon from '../images/homePage/outlookIcon.png';
import ermiyasPicture from '../images/ermiPics/picsInToronto.JPG';
import emailIcon from '../images/homePage/gmailIcon.png';
import instaImageIcon from '../images/homePage/instaIcon.png';
import SocialMediaIconsDisplay from './socialMediaDisplay'; 

// this importt wll be for animated stuff and animate library
import "animate.css/animate.min.css"; 
import { AnimatedOnScroll } from 'react-animated-css-onscroll';
import '../App.css';
import { AlignHorizontalCenter } from '@mui/icons-material';

function HomePage() {

   // ScrollDownAnimation function defined within HomePage this wil be called when I want the scroll down letter to be displayd 
   const ScrollDownAnimation = () => {

     // Split the phrase into individual letters
    const letters = "|||||||||||||".split("");

    return (

      <span className="pageScroller">

        {letters.map((letter, index) => (

          <AnimatedOnScroll

           // Use index as a key
            key={index}

             // Animation effect
            animateIn="bounceInRight"

            // Stagger each letter's animation
            delay={index * 100} 
            style={{
               // vertically displayyy
              display: 'block',
              // space btwn letters verticallyyy 
              marginTop: '25px',
              marginLeft: '500px',
              color: "#2B3A67",
              fontweight:"Bold",
              fontSize: "30px",
              fontfamily: "Courier New, monospace"
            }}
          >
            {letter}

          </AnimatedOnScroll>
        ))}
      </span>
    );
  };

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

      <div>
      
      <p style={{paddingLeft:"80px", fontWeight: "bolder", textAlign: "left", color: "#2B3A67", fontSize: "40px", fontFamily: "Courier New, monospace" }}>
          Hi, I am Ermiyas. 
      </p>
      <p style={{paddingLeft:"80px",textAlign: "lrgy", color: "#2B3A67", fontSize: "20px", fontFamily: "Courier New, monospace" }}>
        I'm an independent creative developer from Kitchener, Ontario.
      </p>


        {/* added border and bordr radius for my photo .. more like frame by adding inline cs styling */}
        <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '20px' }}>
          <img 
              src={ermiyasPicture} 
              alt="Content" 
              style={{
                  width: '350px', 
                  height: 'auto',
                  border: '8px solid #4FBEF2', 
                  borderRadius: '10px',
                  boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.2)'
              }} 
          />
        </div>
      </div>


      <div 
        className="imageAndIntroPara"style={{
        height: 'auto',
        marginTop: '30px',
        marginRight: '30px',
        paddingLeft:"80px",
        fontFamily: "Courier New, monospace",
        color: "#2B3A67"}}
              >
                <span> 
                  <p> I’ve been passionate about technology since I was a teenager.</p> 
                  <p>My love for computers and programming has only grown over the years, </p>
                  <p> leading me to pursue my dream in software development field. </p>
                  <p>I truly enjoy writing code, designing front-end interfaces, </p>
                  <p>and managing back-end systems—all while finding new ways to build applications that make life easier.</p>
                  <p>I could spend hours solving bugs or refining web designs because it’s what I love to do. </p>
                  <p><span>Ready to collaborate? </span>
                    <a
                      href="mailto:egulti4128@conestogac.on.ca"
                      style={{
                        textDecoration: 'none',
                        color: 'Blue',
                        fontWeight: 'bold'
                      }}
                    >
                      HIRE ME
                    </a>
                    <span>, and let’s build something amazing together!</span>
                  </p>
                </span>
              </div>
        <p style={{ fontweight:"Bold",color: "#2B3A67",fontSize: "30px",marginTop: '25px',marginLeft: '450px',fontFamily: "Courier New, monospace"}}>
          SCROLL
        </p>

      {/* calling the function to display the animated scroll letters n */}
      <ScrollDownAnimation /> 


      <div>
        <img 
        
          src={bankTellerImage } 
          alt="Content"  
          className="contentImage"
          style={{ width: '400px',height: '400px',borderRadius: '50%',marginRight: '25px',marginLeft: '5px',marginTop: '25px'

          }}
        />
      </div>

     
      <div style={{ fontweight:"Bold",color: "#2B3A67",fontSize: "20px",marginTop: '15px',marginLeft: '50px',fontFamily: "Courier New, monospace"}}>
        <p><h1> Creating a bank web application was one of my most challenging but rewarding school projects.</h1></p>
        <p>As a second-year Software Engineering student, our Software Quality professor assigned us a project where we could design our web application, with a few options to choose from. It was a group project, </p>
        <p>so my partner Saje and I decided to build a banking application. We started by dividing our tasks and creating a project board using Trillo. </p>
        <p>We used GitHub version control as an additional tool to keep track of our project. We followed the seven software development life cycles to meet all software quality requirements.</p>
        <p>My primary role was front-end development, but I also contributed to the back-end. This bank application provides basic banking functionality, and we developed it using C# and ASP.NET. </p>
        <p>You can visit our WealthWave bank application website here, which is connected to a database for full functionality.</p> 
        <p>Try it out by registering with WealthWave Bank! You can also explore our GitHub repository for more details.</p>
        <p>Thank you for taking the time to check out our project!</p>
      </div>

      <div style={{paddingLeft: '250px',fontFamily: "'Courier New', monospace ",fontWeight:'bolder',fontSize:'35px' }}>
        <p><a href='https://github.com/srose0040/WealthWave'style={{boxShadow:" 1px 5px 5px -3px #F71B9D",textDecoration: 'none'}}> Git Hub Repo </a></p>
        <p><a href='https://wealthywave.Azurewebsites.net'style={{ boxShadow:" 1px 5px 5px -3px #F71B9D",textDecoration: 'none',}}>Wealthy Wave Bank </a></p>
        <p><Link to="/Projects" style={{ boxShadow:" 1px 5px 5px -3px #F71B9D",textDecoration: 'none',}}>More Of My Projects </Link></p>
      </div>


      <div className="contentImage" >
        <img 
          src={contentImage} 
          alt="Content"  
          style={{ width: '400px', height: 'auto', marginRight: '25px', marginLeft: '5px' ,marginTop: '25px'}}
        />
      </div>




      <div className="footerNavLink">
        <Link to="/Projects" className="nav-link">Projects</Link>
        <Link to="/Hobbies" className="nav-link">Hobbies</Link>
        <Link to="/Doggo" style={{ paddingLeft: '150px' }}>Meet Doggo</Link>
      </div> 

      {/* calling footer component for the webste footer contents */}
      <FooterComponents/>

    </div>
  );
}

export default HomePage;