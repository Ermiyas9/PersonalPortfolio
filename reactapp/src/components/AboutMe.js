// AboutMe.js
import React, { useState } from 'react';
import "animate.css/animate.min.css"; 
import { AnimatedOnScroll } from 'react-animated-css-onscroll';
import { Link } from 'react-router-dom';

import HeaderComponents from './Header';
import logoIcon from '../images/aboutMePage/logoIcon.png';
import hireMe from '../images/aboutMePage/hireMeIcon.png';
import outlookImageIcon from '../images/aboutMePage/outlookIcon.png';
import emailIcon from '../images/aboutMePage/gmailIcon.png';
import instaImageIcon from '../images/aboutMePage/instaIcon.png';
import myPhoto from '../images/aboutMePage/myPhoto.JPG';
import SocialMediaIconsDisplay from './socialMediaDisplay'; 



function AboutMePage() {

    const containerStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '20px',
    };

    const textStyle = {
        paddingLeft: '80px',
        fontWeight: 'bolder',
        textAlign: 'left',
        color: '#2B3A67',
        fontSize: '40px',
        fontFamily: 'Courier New, monospace',
    };

    const subTextStyle = {
        paddingLeft: '80px',
        color: '#2B3A67',
        fontSize: '20px',
        fontFamily: 'Courier New, monospace',
    };

    const imageStyle = {
        width: '500',
        height: '500px',
        //makin my photo oval
        borderRadius: '50%',
        marginRight: '35px',
        transition: 'transform 0.5s', 
        animation: 'vibrate 0.5s infinite alternate', 
    };

    


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


            <div className="introduction" style={containerStyle}>
                <div>
                    <p style={textStyle}>Hi, I am Ermiyas.</p>
                    <p style={subTextStyle}>I'm an independent creative developer from Kitchener, Ontario.</p>
                </div>
                <img src={myPhoto} alt="Programmer photograph" style={imageStyle} />
            </div>




            <p 
                style={{marginTop: '25px',
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
                🫶🏾- After my first year at Conestoga, I secured a coveted spot in the co-op stream, which had much competition with other fellow students. After securing my co-op spot,
                 I am excited to gain real-world experience in the software development industry.
                

                 <p><span> 🫶🏾- If you'd like to collaborate with me, feel free to    </span>
                    <a
                      href="mailto:egulti4128@conestogac.on.ca"
                      style={{
                        textDecoration: 'none',
                        color: 'Blue',
                        fontWeight: 'bold'
                      }}
                    >
                      hire me
                    </a>
                    <span> ! </span>
                  </p>
            </p>

            <p style={{paddingLeft:"80px",textAlign: "lrgy", color: "#2B3A67", fontSize: "20px", fontFamily: "Courier New, monospace" }}>
                📚- Currently working in my co-op role as a Tech Representative at Conestoga College's Doon Campus..
            </p>

            <p style={{paddingLeft:"80px",textAlign: "lrgy", color: "#2B3A67", fontSize: "20px", fontFamily: "Courier New, monospace" }}>
                🧑🏾‍💻- During my Conestoga College experience, I discovered that I have a talent for analyzing and problem-solving, consistently meeting course tasks' challenges with timeliness and precision. This academic journey has afforded me practical, real-world experience, revealing my passion for preparing creative solutions to complex problems. Moreover, 
                I have deeply appreciated the software development process's careful planning, analysis, and design phases.
            </p>

            <p style={{paddingLeft:"80px",textAlign: "lrgy", color: "#2B3A67", fontSize: "20px", fontFamily: "Courier New, monospace" }}>
                💻- My proficiency extends to various programming languages, including C, C#, C++, JavaScript, 
                Python and web development. I have written different personal, group and academic projects using the above programming languages. Additionally, I have gained experience in software testing and using essential collaboration tools such as Git Hub. My diverse life experience has also allowed me to engage with many people, 
                fostering meaningful connections across Ethiopia, Kuwait, and Canada.
            </p>

            <div>
                <p   style={{marginTop: '25px',
                marginLeft: '470px',
                color: "#2B3A67",
                fontweight:"Bold",
                fontSize: "30px",
                fontfamily: "Courier New, monospace",
                alignItems:"center",
                paddingBottom:'250px'}}> 
                
                <Link to="/Projects" className="nav-link"> Visit My Projects</Link></p>
            
            </div>

        </div>

      
    );
}


export default AboutMePage;
