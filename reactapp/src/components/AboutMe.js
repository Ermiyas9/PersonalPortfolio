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



function AboutMePage() {
    return (
        <div className="AboutMe">
            <HeaderComponents>
                <div className="aboutMeContent">
                    <h1>About Me</h1>
                    <p>This is the About Me section.</p>
                </div>
            </HeaderComponents>
        </div>
    );
}


export default AboutMePage;
