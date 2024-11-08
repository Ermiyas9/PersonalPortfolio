// WorkExprience.js
import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import HeaderComponents from './Header';
import FooterComponents from './Footer';
import logoIcon from '../images/workPage/logoIcon.png';
import hireMe from '../images/workPage/hireMeIcon.png';
import outlookImageIcon from '../images/workPage/outlookIcon.png';
import emailIcon from '../images/workPage/gmailIcon.png';
import instaImageIcon from '../images/workPage/instaIcon.png';
import SocialMediaIconsDisplay from './socialMediaDisplay'; 

// programming languages icons
import cSharpIcon from '../images/workPage/cSharpIcon.png'; 
import cPlusPlusIcon from '../images/workPage/cPlusIcon.png'; 
import pythonIcon from '../images/workPage/pythonIcon.png';
import reactIcon from '../images/workPage/reactIcon.png'; 
import djangoIcon from '../images/workPage/djangoIcon.png'; 
import cIcon from '../images/workPage/cIcon.png'; 
import htmlIcon from '../images/workPage/htmlIcon.png'; 
import androidIcon from '../images/workPage/androidIcon.png'; 
import phpIcon from '../images/workPage/phpIcon.png'; 
import sqlIcon from '../images/workPage/sqlIcon.png'; 
import mySqlIcon from '../images/workPage/mySqlIcon.png'; 
import assemblyIcon from '../images/workPage/assemblyIcon.png'; 
import blackDudeImage from '../images/workPage/blackDudeImage.png'; 
import youngBlackMan from '../images/workPage/youngBlackMan.png'; 

function WorkExpriencePage() {

    useEffect(() => {
        // Add event listener after component mounts
        const downloadButton = document.getElementById("downloadButton");
        if (downloadButton) {
          downloadButton.addEventListener("click", function () {

            // Path relative to the public folder
            const pdfUrl = "/ErmiyasResume.pdf"; 
    
            // Create an  element to trigger the download
            const link = document.createElement("a");
            link.href = pdfUrl;

            // Custom download file name
            link.download = "ErmiyasResume.pdf"; 
    
            // Append the link to the document body, click it, and remove it
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          });
        }
    
        // Cleanup the event listener when component unmounts
        return () => {
          if (downloadButton) {
            downloadButton.removeEventListener("click", function () {});
          }
        };
      }, []);

    return (

    <div className="Exprience">

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

        <img 
            src={blackDudeImage} 
            alt="Content"  
            className="contentImage"
            style={{ paddingLeft: '550px',width: '400px', height: '400px' }}
        />


        

        <div>
            <p className='titles'> 💻 Technical Skills </p>
            <p className='subTitles'>Programming Languages / Frameworks</p>

            
            <img 
                src={cIcon} 
                alt="Content"  
                className="contentImage"
                style={{paddingTop: '15', paddingRight: '5',paddingLeft: '5',width: '50px', height: '50px' }}
            />

            <img 
                 src={cPlusPlusIcon}  
                alt="Content"  
                className="contentImage"
                style={{paddingTop: '15', paddingRight: '5',paddingLeft: '5',width: '50px', height: '50px' }}
            />

            <img 
                src={cSharpIcon} 
                alt="Content"  
                className="contentImage"
                style={{paddingTop: '5', paddingRight: '5',paddingLeft: '5',width: '50px', height: '50px' }}
            />

            <img 
                src={assemblyIcon} 
                alt="Content"  
                className="contentImage"
                style={{paddingTop: '5', paddingRight: '5',paddingLeft: '5',width: '50px', height: '50px' }}
            />
        </div>

        
        <div>
            <img 
                src={reactIcon} 
                alt="Content"  
                className="contentImage"
                style={{paddingTop: '5', paddingRight: '5',paddingLeft: '5',width: '50px', height: '50px' }}
            />

            <img 
                src={pythonIcon} 
                alt="Content"  
                className="contentImage"
                style={{paddingTop: '5', paddingRight: '5',paddingLeft: '5',width: '50px', height: '50px' }}
            />

            <img 
                src={androidIcon} 
                alt="Content"  
                className="contentImage"
                style={{paddingTop: '5', paddingRight: '5',paddingLeft: '5',width: '50px', height: '50px' }}
            />

            <img 
                src={phpIcon} 
                alt="Content"  
                className="contentImage"
                style={{paddingTop: '5', paddingRight: '5',paddingLeft: '5',width: '50px', height: '50px' }}
            />
      
        </div>

        
        <div>

            <img 
                src={djangoIcon} 
                alt="Content"  
                className="contentImage"
                style={{paddingTop: '15', paddingRight: '5',paddingLeft: '5',width: '50px', height: '50px' }}
            />

            <img 
                src={htmlIcon} 
                alt="Content"  
                className="contentImage"
                style={{paddingTop: '5', paddingRight: '5',paddingLeft: '5',width: '50px', height: '50px' }}
            />

            <img 
                src={mySqlIcon} 
                alt="Content"  
                className="contentImage"
                style={{paddingTop: '5', paddingRight: '5',paddingLeft: '5',width: '50px', height: '50px' }}
            />

            <img 
                src={sqlIcon} 
                alt="Content"  
                className="contentImage"
                style={{paddingTop: '5', paddingRight: '5',paddingLeft: '5',width: '50px', height: '50px' }}
            />
       
        </div>   
        
        <p className='titles'> 📝 Education </p>
        <p className='subTitles'>Advanced Diploma in Software Engineering Candidate</p>
        <p style= {{paddingLeft: '150px'}}className='subTitles'> 🎓 Conestoga College, Waterloo | Sep. 2022 – Present | GPA 3.81</p>
        <p className='subTitles'>Diploma in Information Communication Technology</p>
        <h5><p style= {{paddingLeft: '150px'}}className='subTitles'>  🎓 Royal University College—Nazareth Ethiopia and Asella TVET Institute | Sep 2007 – July 2010 | GPA 3.85</p></h5>
        

        <p className='titles'> 🚀 Technical Experience </p>
        <p className='subTitles'style= {{paddingLeft: '150px'}}>🌟 Tech Representative, Conestoga College (Co-op) | Sep 2024 – Present</p>
        <p className='subTitles'style= {{paddingLeft: '150px'}}>🌟 Warehouse Worker, Grand River Personnel, Kitchener, ON | 2023</p>
        <p className='subTitles'style= {{paddingLeft: '150px'}}>🌟 Crew Member, McDonald’s, Kitchener, ON | 2020 – 2021</p>
        <p className='subTitles'style= {{paddingLeft: '150px'}}>🌟 Customer Service & Delivery Driver, Carriage & Talabat Delivery Company | 2016 - 2019</p>
        <p className='subTitles'style= {{paddingLeft: '150px'}}>🌟 Salesperson, Avenue Mall, Kuwait | 2014 - 2015</p>
        <p className='subTitles'style= {{paddingLeft: '150px'}}>🌟 IT Instructor, National College Addis Abeba, Ethiopia | 2012</p>
        <p className='subTitles'style= {{paddingLeft: '150px'}}>🌟 Assistant IT Instructor, Rehoboth Medical College Asella, Ethiopia | 2010 – 2011</p>




        <img 
            src={youngBlackMan} 
            alt="Content"  
            className="contentImage"
            style={{ paddingLeft: '550px',width: '500px', height: '400px' }}
        />


<div
  style={{
    paddingTop: '75px',
    paddingBottom: '75px',
    paddingLeft: '250px',
    fontFamily: "'Courier New', monospace",
    fontWeight: 'bolder',
    fontSize: '35px',
  }}
>
  <button
    id="downloadButton"
    style={{
      display: 'block', 
      fontSize: '35px',
      color: 'blue',
      fontWeight: 'bold',
      fontFamily: "'Courier New', monospace",
      boxShadow: '1px 5px 5px -3px green',
      textDecoration: 'none',
      padding: '10px 20px',
      marginBottom: '20px', 
      backgroundColor: '#C6B1F3',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
    }}
  >
   Resume
  </button>

  <button
    id="downloadButton"
    style={{
      display: 'block', 
      fontSize: '35px',
      color: 'blue',
      fontWeight: 'bold',
      fontFamily: "'Courier New', monospace",
      boxShadow: '1px 5px 5px -3px green',
      textDecoration: 'none',
      padding: '10px 20px',
      marginBottom: '20px', 
      backgroundColor: '#C6B1F3',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
    }}
  >
   Achievement Paper
  </button>

  <p><Link to="/Projects" style={{ color:'blue',boxShadow:" 1px 5px 5px -3px green",textDecoration: 'none',}}>More Of My Projects </Link></p>

 
</div>







        {/* calling footer component for the webste footer contents */}  
        <FooterComponents/>

    </div>
    
    );
}

export default WorkExpriencePage;