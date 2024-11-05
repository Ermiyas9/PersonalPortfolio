// AboutMe.js

import React from "react";
import "animate.css/animate.min.css"; 
import { AnimatedOnScroll } from 'react-animated-css-onscroll';

import HeaderComponents from './Header';
import logoIcon from '../images/aboutMePage/logoIcon.png';
import hireMe from '../images/aboutMePage/hireMeIcon.png';
import outlookImageIcon from '../images/aboutMePage/outlookIcon.png';
import emailIcon from '../images/aboutMePage/gmailIcon.png';
import instaImageIcon from '../images/aboutMePage/instaIcon.png';
import SocialMediaIconsDisplay from './socialMediaDisplay'; 



function AboutMePage() {

     // ScrollDownAnimation function defined within HomePage this wil be called when I want the scroll down letter to be displayd 
   const ScrollDownAnimation = () => {

    // Split the phrase into individual letters
   const letters = " ||||||| ||||||| ".split("");

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
        <div className="AboutMe">
        
            {/* passing the props to the header component(func) */}
            <HeaderComponents 
                hireMeIcon={hireMe} 
                logo={logoIcon} 
            />
            
            
        

            {/* Pass the appropriate icons as props */}
            <SocialMediaIconsDisplay 
                outlookIcon={outlookImageIcon} 
                gmailIcon={emailIcon} 
                instaIcon={instaImageIcon}
            />

          

            <p style={{paddingLeft:"80px", fontWeight: "bolder", textAlign: "left", color: "#2B3A67", fontSize: "40px", fontFamily: "Courier New, monospace" }}>
                Hi, I am Ermiyas. 
            </p>
            <p style={{paddingLeft:"80px",textAlign: "lrgy", color: "#2B3A67", fontSize: "20px", fontFamily: "Courier New, monospace" }}>
                I'm an independent creative developer from Kitchener, Ontario.
            </p>

            <p 
                style={{    marginTop: '25px',
                marginLeft: '470px',
                color: "#2B3A67",
                fontweight:"Bold",
                fontSize: "30px",
                fontfamily: "Courier New, monospace",
                alignItems:"center"}}>
                Scroll
            </p>


            {/* calling the function to display the animated scroll letters n */}
            <ScrollDownAnimation /> 

            <p style={{paddingLeft:"80px",textAlign: "lrgy", color: "#2B3A67", fontSize: "20px", fontFamily: "Courier New, monospace" }}>
                📚- I am a second-year student pursuing an Advanced Diploma in Software Engineering at Conestoga College.
            </p>


            <p style={{paddingLeft:"80px",textAlign: "lrgy", color: "#2B3A67", fontSize: "20px", fontFamily: "Courier New, monospace" }}>
                🫶🏾- After my first year at Conestoga, I secured a coveted spot in the co-op stream, fuelling my excitement to gain real-world experience in the software development industry. 
            </p>

            <p style={{paddingLeft:"80px",textAlign: "lrgy", color: "#2B3A67", fontSize: "20px", fontFamily: "Courier New, monospace" }}>
                📚- Currently working in my co-op role as a Tech Representative at Conestoga College's Doon Campus..
            </p>



        </div>
    );
}


export default AboutMePage;
