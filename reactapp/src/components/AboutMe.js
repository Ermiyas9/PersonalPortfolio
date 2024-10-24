// AboutMe.js

import React from "react";

import HeaderComponents from './Header';
import logoIcon from '../images/aboutMePage/logoIcon.png';
import hireMe from '../images/aboutMePage/hireMeIcon.png';
import outlookImageIcon from '../images/aboutMePage/outlookIcon.png';
import emailIcon from '../images/aboutMePage/gmailIcon.png';
import instaImageIcon from '../images/aboutMePage/instaIcon.png';
import SocialMediaIconsDisplay from './socialMediaDisplay'; 



function AboutMePage() {
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

        </div>
    );
}


export default AboutMePage;
