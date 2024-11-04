
// Projects.js
import React from 'react';
import HeaderComponents from './Header';
import logoIcon from '../images/projectsPage/logoIcon.png';
import hireMe from '../images/projectsPage/hireMeIcon.png';
import outlookImageIcon from '../images/projectsPage/outlookIcon.png';
import emailIcon from '../images/projectsPage/gmailIcon.png';
import instaImageIcon from "../images/projectsPage/instaIcon.png";
import SocialMediaIconsDisplay from './socialMediaDisplay'; 
import { AlignHorizontalCenter } from '@mui/icons-material';
import { borderColor, padding } from '@mui/system';

function ProjectsPage() {

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
        fontFamily: "'Courier New', monospace",
        fontWeight: "bold",
        width: '200px',
        textAlign: 'center',
        borderRadius: '5px',
        margin: '20px auto',
        itemAlign:'left',

        // to make the box clickable.. 
        cursor: 'pointer',
    };

    const handleClick = () => {
        alert("this will be changed, I iwll display like like a text down ");
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


        <div style={containerStyle}>

            <div style={boxStyle} onClick={handleClick}>
               My Personal Portofolio Website 

               <p>Tech Stack: React JS, GitHub GitHub for version control</p>
            </div>
            <div style={boxStyle} onClick={handleClick}>
                Click me!
            </div>
            <div style={boxStyle} onClick={handleClick}>
                Click me!
            </div>
        </div>

        <div style={containerStyle}>
            
            <div style={boxStyle} onClick={handleClick}>
                Click me!
            </div>
            <div style={boxStyle} onClick={handleClick}>
                Click me!
            </div>
            <div style={boxStyle} onClick={handleClick}>
                Click me!
            </div>
        </div>

        <div style={containerStyle}>
            
            <div style={boxStyle} onClick={handleClick}>
                Click me!
            </div>
            <div style={boxStyle} onClick={handleClick}>
                Click me!
            </div>
            <div style={boxStyle} onClick={handleClick}>
                Click me!
            </div>
        </div>
  

    </div>
    );
}

export default ProjectsPage;