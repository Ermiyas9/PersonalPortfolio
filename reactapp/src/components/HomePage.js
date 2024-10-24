import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import HeaderComponents from './Header';
import contentImage from '../images/contentImage.jpg';
import logoIcon from '../images/homePage/logoIcon.png';
import hireMe from '../images/homePage/hireMeIcon.png';
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

              color: "#6A0DAD",

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
      
      <p style={{fontWeight: "bolder", textAlign: "center", color: "#6A0DAD", fontSize: "60px", fontFamily: "Courier New, monospace" }}>
          Hi, I am Ermiyas. 
      </p>
      <p style={{textAlign: "center", color: "#6A0DAD", fontSize: "20px", fontFamily: "Courier New, monospace" }}>
        I'm an independent creative developer from Kitchener, Ontario.
      </p>

      <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '20px' }}>
            <img 
                src={ermiyasPicture} 
                alt="Content" 
                style={{ width: '350px', height: 'auto' }} 
            />
        </div>


 







      </div>


      <div className='imageAndIntroPara'>
        

        <div className="midParagraphTxt">
          <p>Hello, my name is Ermiyas Gulti.</p>
          <p>I am a Software Engineering student </p>
          <p>passionate about coding and technology.</p>
          <p>I live in Kitchener and I am looking for co-op job.</p>
        </div>
      </div>

      <p style={{ fontweight:"Bold",color: "#6A0DAD",fontSize: "30px",      marginTop: '25px',marginLeft: '450px',fontFamily: "Courier New, monospace"}}>
        SCROLL DOWN
      </p>


  

      {/* calling the function to display the animated scroll letters n */}
      <ScrollDownAnimation /> 



      
      <div className="contentImage">
        <img 
          src={contentImage} 
          alt="Content" 
          style={{ display: 'flex', width: '400px', height: 'auto', paddingTop: '50px',alignContent:'center' }} 
        />
      </div>
      <div className='imageAndIntroPara'>
        <span>
          <p>I have been passionate about technology since I was a teenager.</p>
          <p>My love for computers and programming has only grown stronger into adulthood,</p>
          <p>leading me to pursue my dream in Software Development. I find joy in writing code,</p>
          <p> designing front-end interfaces, and managing back-end operations, </p>
          <p> always thinking of new ways to create applications that make life easier. </p>
          <p>I can spend hours problem-solving bugs or perfecting web designs because it’s what I love. </p>
          <p> Let’s collaborate HIRE ME?, and let’s build something amazing together!</p>
        </span>
      </div>

      

      <div className="footerNavLink">
        <Link to="/Projects" className="nav-link">Projects</Link>
        <Link to="/Hobbies" className="nav-link">Hobbies</Link>
        <Link to="/Doggo" style={{ paddingLeft: '150px' }}>Meet Doggo</Link>
      </div>


    </div>
  );
}

export default HomePage;