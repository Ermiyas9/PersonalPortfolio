import React from "react";
import { Link } from 'react-router-dom';
import HeaderComponents from './Header';
import logoIcon from '../images/dogoPage/logoIcon.png';
import hireMe from '../images/dogoPage/hireMeIcon.png';
import instaImageIcon from '../images/dogoPage/instaIcon.png';
import outlookImageIcon from '../images/dogoPage/outlookIcon.png';
import emailIcon from '../images/dogoPage/gmailIcon.png';

import dogPic from '../images/dogoPage/Aaron3.png';
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

            <div className="doggoContents">
                <p><h1>Hey There!</h1> </p>

                <img 
                    src={dogPic} 
                    alt="Dog Picture"  
                    style={{ width: '400px',height: '400px',borderRadius: '50%',marginRight: '25px',marginLeft: '5px',marginTop: '25px'

                    }}
                />
            </div>

           


        </div>
    );
}

export default DoggoPage;
