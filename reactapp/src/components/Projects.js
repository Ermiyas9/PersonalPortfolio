
// Projects.js
import React from 'react';
import HeaderComponents from './Header';
import logoIcon from '../images/projectsPage/logoIcon.png';
import hireMe from '../images/projectsPage/hireMeIcon.png';
import outlookImageIcon from '../images/projectsPage/outlookIcon.png';
import emailIcon from '../images/projectsPage/gmailIcon.png';
import instaImageIcon from "../images/projectsPage/instaIcon.png";
import SocialMediaIconsDisplay from './socialMediaDisplay'; 

function ProjectsPage() {
    return (

    <div className="projects">
 
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

export default ProjectsPage;