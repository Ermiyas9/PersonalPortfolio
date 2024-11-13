// Project.js

import React, { useState } from 'react';
import HeaderComponents from './Header';
import FooterComponents from "./Footer";
import SocialMediaIconsDisplay from './socialMediaDisplay'; 


import logoIcon from '../images/projectsPage/logoIcon.png';
import hireMe from '../images/projectsPage/hireMeIcon.png';
import outlookImageIcon from '../images/projectsPage/outlookIcon.png';
import emailIcon from '../images/projectsPage/gmailIcon.png';
import instaImageIcon from "../images/projectsPage/instaIcon.png";
import reactIcon from '../images/projectsPage/reactIcon.png'; 
import cSharpIcon from '../images/projectsPage/csharpIcon.png'; 
import pythonIcon from '../images/projectsPage/pythonIcon.png';
import djangoIcon from '../images/projectsPage/djangoIcon.png'; 
import cIcon from '../images/projectsPage/cIcon.png'; 
import htmlIcon from '../images/projectsPage/htmlIcon.png'; 
import androidIcon from '../images/projectsPage/androidIcon.png'; 
import subBuzzPic from '../images/homerSimpson/subBuzz.png';
import icons8 from '../images/projectsPage/icons8.png';

import './ProjectsPage.css';

function ProjectsPage() {
    const [showTechStack, setShowTechStack] = useState(false);

    const handleClick = () => {
        setShowTechStack(!showTechStack);
    };

    return (
        <div className="projects">
            <HeaderComponents 
                hireMeIcon={hireMe} 
                logo={logoIcon} 
            />

            <SocialMediaIconsDisplay 
                outlookIcon={outlookImageIcon} 
                gmailIcon={emailIcon} 
                instaIcon={instaImageIcon}
            />

            <h1 className="welcome-text">printf( "Hello World!! \n ");</h1>

            <div className="profile-pic-container">
                <img src={subBuzzPic} alt="Content" className="profile-pic" />
            </div>

            <div className="projects-list">
                <ProjectBox 
                    icon={reactIcon} 
                    title="My Personal Portfolio Website"
                    description="Tech Stack: JavaScript, Icons8, GitHub (for version control)"
                    showTechStack={showTechStack}
                    handleClick={handleClick}
                />

                <ProjectBox 
                    icon={cSharpIcon} 
                    title="Banking Web Application"
                    description="Tech Stack: C#, ASP.NET, MySQL, GitHub"
                    showTechStack={showTechStack}
                    handleClick={handleClick}
                />

                <ProjectBox 
                    icon={pythonIcon} 
                    title="Fully Functional Network Web App"
                    description="Tech Stack: Python Django, JavaScript, AJAX, GitHub"
                    showTechStack={showTechStack}
                    handleClick={handleClick}
                />

                <ProjectBox 
                    icon={androidIcon} 
                    title="Android Trip Planner Mobile Application"
                    description="Tech Stack: Android Studio, JavaScript, GitHub"
                    showTechStack={showTechStack}
                    handleClick={handleClick}
                />

                <ProjectBox 
                    icon={cIcon} 
                    title="Chat System App"
                    description="Tech Stack: C, GitHub"
                    showTechStack={showTechStack}
                    handleClick={handleClick}
                />

                <ProjectBox 
                    icon={htmlIcon} 
                    title="Pizza Shop Website"
                    description="Tech Stack: JavaScript, HTML, GitHub"
                    showTechStack={showTechStack}
                    handleClick={handleClick}
                />
            </div>

            <img src={icons8} alt="Icon of coding" className="coding-icon" />
            

            <h1 className="progress-text">
                <p>A Project Currently</p> 
                <p>in Progress</p>
            </h1>

            <div  className="centered-project-box">

                <ProjectBox 
                    icon={djangoIcon} 
                    title="Laptop Rental Kiosk Web Application"
                    description="Tech Stack: React, Python Django, MySQL, GitHub"
                    showTechStack={showTechStack}
                    handleClick={handleClick}  
                />
            </div>
            
            <FooterComponents/>
        </div>
    );
}

function ProjectBox({ icon, title, description, showTechStack, handleClick }) {
    return (
        <div className="project-box" onClick={handleClick}>
            <img src={icon} alt={`${title} Icon`} className="project-icon" />
            <h2 className="project-title">{title}</h2>
            {showTechStack && <p className="tech-stack">{description}</p>}
        </div>
    );
}

export default ProjectsPage;
