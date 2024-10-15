
// Doggo.js


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


function Doggo() {
    return (

    <div className="doggo">
        <HeaderComponents >
            <div className="doggoContent">
                <h1>About My Dog</h1>
           
            </div>
        </HeaderComponents>

    </div>

       
    );
}

export default Doggo;