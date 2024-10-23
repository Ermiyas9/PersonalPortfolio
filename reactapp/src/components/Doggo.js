import React from "react";
import { Link } from 'react-router-dom';
import HeaderComponents from './Header';
import logoIcon from '../images/dogoPage/logoIcon.png';
import hireMe from '../images/dogoPage/hireMeIcon.png';
import instaImageIcon from '../images/dogoPage/instaIcon.png';
import outlookImageIcon from '../images/dogoPage/outlookIcon.png';
import emailIcon from '../images/dogoPage/gmailIcon.png';
import SocialMediaIconsDisplay from './socialMediaDisplay'; 

function DoggoPage() {
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
        </div>
    );
}

export default DoggoPage;
