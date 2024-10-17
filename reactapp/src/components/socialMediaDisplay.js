import React from "react";

import githubIcon from '../images/homePage/githubImage.png';
import linkedInIcon from '../images/homePage/linkInImage.png';
import instaImageIcon from '../images/homePage/instaImage.png';
import outlookImageIcon from '../images/homePage/outlookImage.png';
import emailIcon from '../images/homePage/emailImage.png';

import '../App.css'

function socialMediaIconsDisplay() {
    return (
        <div className="socialMediaIconsContainer" >

            {/* Social media icons */}
            <div className="githubIcon">
                <a
                    href="https://github.com/Ermiyas9"
                    className="socialMediaIcons"
                    style={{ textDecoration: 'none', display: 'inline-block' }}
                >
                    <img
                        src={githubIcon}
                        alt="GitHub"
                        className="socialMediaIcons"
                        style={{ verticalAlign: 'middle' }}
                    />
                </a>
            </div>

            <div className="linkedInIcon">
                <a
                    href="https://www.linkedin.com/in/ermiyas-gulti-4ab51521a/"
                    className="socialMediaIcons"
                    style={{ textDecoration: 'none', display: 'inline-block' }}
                >
                    <img
                        src={linkedInIcon}
                        alt="LinkedIn"
                        className="socialMediaIcons"
                        style={{ verticalAlign: 'middle' }}
                    />
                </a>
            </div>

            <div className="emailIcon">
                <a
                    href="https://www.instagram.com/Ermiyas_g9"
                    className="socialMediaIcons"
                    style={{ textDecoration: 'none', display: 'inline-block' }}
                >
                    <img
                        src={instaImageIcon}
                        alt="Instagram"
                        className="socialMediaIcons"
                        style={{ verticalAlign: 'middle' }}
                    />
                </a>
            </div>

            <div className="emailIcon">
                <a
                    href="mailto:egulti4128@conestogac.on.ca"
                    className="socialMediaIcons"
                    style={{ textDecoration: 'none', display: 'inline-block' }}
                >
                    <img
                        src={outlookImageIcon}
                        alt="School Email"
                        className="socialMediaIcons"
                        style={{ verticalAlign: 'middle' }}
                    />
                </a>
            </div>

            <div className="emailIcon">
                <a
                    href="mailto:enduethio@gmail.com"
                    className="socialMediaIcons"
                    style={{ textDecoration: 'none', display: 'inline-block' }}
                >
                    <img
                        src={emailIcon}
                        alt="Personal Email"
                        className="socialMediaIcons"
                        style={{ verticalAlign: 'middle' }}
                    />
                </a>
            </div>

        </div>
    );
}

export default socialMediaIconsDisplay;
