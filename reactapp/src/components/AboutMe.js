// AboutMe.js

import React from "react";
import { Link } from 'react-router-dom';
import logo from '../images/aboutMePage/logoImage.png';
import hireMeIcon from '../images/aboutMePage/hireMePic.png';
import githubIcon from '../images/aboutMePage/githubImage.png';
import linkedInIcon from '../images/aboutMePage/linkInImage.png';
import instaImageIcon from '../images/aboutMePage/instaImage.png';
import outlookImageIcon from '../images/aboutMePage/outlookImage.png';
import emailIcon from '../images/aboutMePage/emailImage.png';
import HeaderComponents from './Header';

const socialMediaIcons = [
    { src: githubIcon, alt: "GitHub", link: "https://github.com/Ermiyas9" },
    { src: linkedInIcon, alt: "LinkedIn", link: "https://www.linkedin.com/in/ermiyas-gulti-4ab51521a/" },
    { src: instaImageIcon, alt: "Instagram", link: "https://www.instagram.com/Ermiyas_g9" },
    { src: outlookImageIcon, alt: "School Email", link: "mailto:egulti4128@conestogac.on.ca" },
    { src: emailIcon, alt: "Personal Email", link: "mailto:enduethio@gmail.com" }
];

function AboutMe() {
    return (
        <div className="aboutMe">
            <HeaderComponents socialMediaIcons={socialMediaIcons}>
                <div className="aboutMeContent">
                    <h1>About Me</h1>
                    <p>This is the About Me section.</p>
                </div>
            </HeaderComponents>
        </div>
    );
}


export default AboutMe;
