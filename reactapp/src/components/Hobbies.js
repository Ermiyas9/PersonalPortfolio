// HobbiesPage.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HeaderComponents from './Header';
import FooterComponents from './Footer';

import logoIcon from '../images/hobbiesPage/logoIcon.png';
import hireMe from '../images/hobbiesPage/hireMeIcon.png';
import outlookImageIcon from '../images/hobbiesPage/outlookIcon.png';
import emailIcon from '../images/hobbiesPage/gmailIcon.png';
import instaImageIcon from '../images/hobbiesPage/instaIcon.png';
import SocialMediaIconsDisplay from './socialMediaDisplay'; 

function HobbiesPage() {
    return (
        <div>

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
            {/* calling footer component for the webste footer contents */}
            <FooterComponents/>
        </div>
    );
}

export default HobbiesPage;
