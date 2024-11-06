
// Projects.js

import React, { useState } from 'react';
import HeaderComponents from './Header';
import FooterComponents from "./Footer";
import logoIcon from '../images/projectsPage/logoIcon.png';
import hireMe from '../images/projectsPage/hireMeIcon.png';
import outlookImageIcon from '../images/projectsPage/outlookIcon.png';
import emailIcon from '../images/projectsPage/gmailIcon.png';
import instaImageIcon from "../images/projectsPage/instaIcon.png";
import SocialMediaIconsDisplay from './socialMediaDisplay'; 
import reactIcon from '../images/projectsPage/reactIcon.png'; 
import cSharpIcon from '../images/projectsPage/csharpIcon.png'; 
import pythonIcon from '../images/projectsPage/pythonIcon.png';
import djangoIcon from '../images/projectsPage/djangoIcon.png'; 
import cIcon from '../images/projectsPage/cIcon.png'; 
import htmlIcon from '../images/projectsPage/htmlIcon.png'; 
import androidIcon from '../images/projectsPage/androidIcon.png'; 
import subBuzzPic from '../images/homerSimpson/subBuzz.png';
import icons8 from '../images/projectsPage/icons8.png';
//import { AlignHorizontalCenter } from '@mui/icons-material';
//import { borderColor, fontWeight, padding } from '@mui/system';

function ProjectsPage() {

    const [showTechStack, setShowTechStack] = useState(false);

    const containerStyle = {

        // to display the children divs horizontally.. 
        display: 'flex',        
        justifyContent: 'center', 
        gap: '10px',              
        margin: '20px 0',
    };

    const boxStyle = {
        border: '5px solid black',
        borderColor:'#FA5252',
        padding: '75px',
        color: 'black',
        fontSize: '25px',
        fontWeight:'Bold',
        fontFamily: "'Courier New', monospace",
        width: '200px',
        textAlign: 'center',
        borderRadius: '5px',
        margin: '20px auto',
        itemAlign:'left',

        // to make the box clickable.. 
        cursor: 'pointer',
    };

    const handleClick = () => {

         // Toggle the display of the tech stack text
        setShowTechStack(!showTechStack);
    };




    


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

        
        <h1 
            style={{ color: 'black',
            fontSize: '50px',
            fontWeight:'Bolder',
            fontFamily: "'Courier New', monospace",margin: '10px 0',
            alignContent:'center',
            paddingTop:'50px',
            paddingLeft:'100px'
            }}>
                printf( "Hello World!! \n ");
        </h1>



        <div>
            <img 
            
            src={subBuzzPic} 
            alt="Content"  
            className="contentImage"
            style={{ width: '400px',height: '400px',borderRadius: '50%',marginRight: '25px',marginLeft: '5px',marginTop: '25px'

            }}
            />
        </div>


        <div style={containerStyle}>

            <div className = 'bankApp' style={boxStyle} onClick={handleClick}>
                <img src={reactIcon} alt="React Icon" style={{ width: '50px', height: '50px' }} />
                <h2 style={{ margin: '10px 0' }}> My Personal Portfolio Website</h2>
                {showTechStack && ( 
                    <p>
                        Tech Stack    JavaScript, <a href='https://icons8.com/'>icons8</a>, GitHub (for version control)
                    </p>
                )}
                 
            </div>

            <div style={boxStyle} onClick={handleClick}>
                <img src={cSharpIcon} alt="C-Sharp Icon" style={{ width: '50px', height: '50px' }}/>
                <h2 style={{ margin: '10px 0' }}> Banking Web Application </h2>
                {showTechStack && ( 
                    <p>
                        Tech Stack    C#, ASP.NET, MYSQL Database and GitHub (for version control)
                    </p>)}
            </div>

            <div style={boxStyle} onClick={handleClick}>
                <img src={pythonIcon} alt="Python Icon" style={{ width: '50px', height: '50px' }}/>
                <h2 style={{ margin: '10px 0' }}> Fully Functional Network Web App </h2>
                {showTechStack && (
                    <p>
                        Tech Stack   Python Django (Back-End), JavaScript(Front-End), AJAX and GitHub(for version control)
                    </p>)}
            </div>

        </div>

        <div style={containerStyle}>
            
            <div style={boxStyle} onClick={handleClick}>
                <img src={androidIcon} alt="AndroidStudio Icon" style={{ width: '50px', height: '50px' }}/>
                <h2 style={{ margin: '10px 0' }}> Android Trip Planner Mobile Application</h2>
                {showTechStack && (
                    <p>
                        Tech Stack   Android Studio, JavaScript, GitHub(for version control)
                    </p>)}
            </div>

            <div style={boxStyle} onClick={handleClick}>
                <img src={cIcon} alt="C Language Icon" style={{ width: '50px', height: '50px' }}/>
                <h2 style={{ margin: '10px 0' }}>Chat System App </h2>
                {showTechStack && (
                    <p>
                        Teck Stack    C and GitHub(for version control)
                    </p>
                )}
            </div>

            <div style={boxStyle} onClick={handleClick}>
                <img src={htmlIcon} alt="html Icon" style={{ width: '50px', height: '50px' }}/>
                <h2 style={{ margin: '10px 0' }}>Pizza Shop Website</h2>
                {showTechStack && (
                    <p>
                         Tech Stack       JavaScript, HTML and GitHub(for version control)
                    </p>
                )}
            </div>

        </div>

        <img  
            src={icons8} alt="Icon of coding" style={{paddingBottom: '50px',paddingTop:'50px', paddingLeft:'250px',width: '250px', height: '250px' }}    
        />

        <h1 
            style={{ color: 'black',
            fontSize: '50px',
            fontWeight:'Bolder',
            fontFamily: "'Courier New', monospace",margin: '10px 0',
            paddingLeft:'250px'
            }}>
                <p>A Project Currently</p> 
                <p>in Progress</p>
        </h1>

        <div style={containerStyle}>
            <div style={boxStyle} onClick={handleClick}>
                <img src={djangoIcon} alt="Python Django Icon" style={{ width: '50px', height: '50px' }}/>
                <h2 style={{ margin: '10px 0' }}>Laptop Rental Kiosk Web Application</h2>
                {showTechStack && (
                    <p>
                         Tech Stack   React  Python Django  MySQL  GitHub 
                    </p>
                )}
            </div>
        
        </div>


             {/* calling footer component for the webste footer contents */}
             <FooterComponents/>
    </div>
    );
}

export default ProjectsPage;