// WorkExprience.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HeaderComponents from './Header';
import logoIcon from '../images/workPage/logoIcon.png';
import hireMe from '../images/workPage/hireMeIcon.png';
import outlookImageIcon from '../images/workPage/outlookIcon.png';
import emailIcon from '../images/workPage/gmailIcon.png';
import instaImageIcon from '../images/workPage/instaIcon.png';
import SocialMediaIconsDisplay from './socialMediaDisplay'; 

function WorkExpriencePage() {
    return (

        <div className="Exprience">
        <HeaderComponents >
            <div>

                {/* passing the props to the header component(func) */}
                <HeaderComponents 
                    hireMeIcon={hireMe} 
                    logo={logoIcon} 
                />
           
            </div>
        </HeaderComponents>

           {/* Pass the appropriate icons as props */}
           <SocialMediaIconsDisplay 
                outlookIcon={outlookImageIcon} 
                gmailIcon={emailIcon}
                instaIcon={instaImageIcon} 
            />

    </div>
    );
}

export default WorkExpriencePage;