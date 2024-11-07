// WorkExprience.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HeaderComponents from './Header';
import FooterComponents from './Footer';
import logoIcon from '../images/workPage/logoIcon.png';
import hireMe from '../images/workPage/hireMeIcon.png';
import outlookImageIcon from '../images/workPage/outlookIcon.png';
import emailIcon from '../images/workPage/gmailIcon.png';
import instaImageIcon from '../images/workPage/instaIcon.png';
import SocialMediaIconsDisplay from './socialMediaDisplay'; 

// programming languages icons
import reactIcon from '../images/projectsPage/reactIcon.png'; 
import cSharpIcon from '../images/workPage/cSharpIcon.png'; 
import cPlusPlusIcon from '../images/workPage/cPlusIcon.png'; 
import pythonIcon from '../images/projectsPage/pythonIcon.png';
import djangoIcon from '../images/projectsPage/djangoIcon.png'; 
import cIcon from '../images/workPage/cIcon.png'; 
import htmlIcon from '../images/projectsPage/htmlIcon.png'; 
import androidIcon from '../images/projectsPage/androidIcon.png'; 

function WorkExpriencePage() {
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

        <div>
            <p className='titles'> Technical Skills </p>
            <p className='subTitles'>Programming Languages</p>

            <img 
                src={cIcon} 
                alt="Content"  
                className="contentImage"
                style={{ width: '50px', height: '50px' }}
            />

            <img 
                src={cPlusPlusIcon} 
                alt="Content"  
                className="contentImage"
                style={{ width: '50px', height: '50px' }}
            />

            <img 
                src={cSharpIcon} 
                alt="Content"  
                className="contentImage"
                style={{paddingTop: '15', paddingRight: '15',paddingLeft: '15',width: '50px', height: '50px' }}
            />
        </div>


       



        {/* calling footer component for the webste footer contents */}  
        <FooterComponents/>

    </div>
    
    );
}

export default WorkExpriencePage;