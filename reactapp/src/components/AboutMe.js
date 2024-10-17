// AboutMe.js

import React from "react";

import HeaderComponents from './Header';
import socialMediaIconsDisplay from './socialMediaDisplay';



function AboutMePage() {
    return (
        <div className="AboutMe">
            <HeaderComponents>
                <div className="aboutMeContent">
                    <h1>About Me</h1>
                    <p>This is the About Me section.</p>
                </div>
            </HeaderComponents>
            {socialMediaIconsDisplay()}
        </div>
    );
}


export default AboutMePage;
