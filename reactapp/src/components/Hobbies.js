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

import './HobbiesPage.css'; // Make sure to add some CSS for styling

function HobbiesPage() {
    return (
        <div className="hobbies-container">
            {/* Header with logo and hire me icon */}
            <HeaderComponents 
                hireMeIcon={hireMe} 
                logo={logoIcon} 
            />

            {/* Social media icons for interaction */}
            <SocialMediaIconsDisplay 
                outlookIcon={outlookImageIcon} 
                gmailIcon={emailIcon} 
                instaIcon={instaImageIcon}
            />
            
            <div className="intro-section">
                <h1>Things I do as Hobby</h1>
                <p> 
                Let's explore my hobbies.
                I've had many hobbies since childhood, and one that I particularly enjoy is running. 
                Not only does it have numerous physical and psychological benefits, 
                but it's something I always find myself coming back to.

                In addition to running, I'm passionate about coding and creating visually appealing websites. 
                I love bringing ideas to life and developing applications that make people's lives easier. 
                For me, pursuing hobbies is a fantastic way to stay inspired and constantly learn new things.
                </p>
            </div>

            <div className="hobbies-list">
                <h2>What I Love Doing</h2>
                
                <div className="hobby-item">
                    <img src="path/to/coding-image.jpg" alt="Coding" className="hobby-image" />
                    <div className="hobby-description">
                        <h3>Coding & Tech</h3>
                        <p>
                            I love exploring new technologies, working on personal projects, and reading Articles about new technology.
                        </p>
                    </div>
                </div>

                <div className="hobby-item">
                    <img src="path/to/photography-image.jpg" alt="Photography" className="hobby-image" />
                    <div className="hobby-description">
                        <h3>Running </h3>
                        <p>
                            Running is a hobby that I’ve always gained benefits from.
                            I was an athlete as a teenager, so I often returned to running whenever possible. Running offers considerable physical and psychological benefits, so I greatly enjoy it.

                            Feel free to read the essay I wrote in high school about running.
                            </p>
                    </div>
                </div>

                <div className="hobby-item">
                    <img src="path/to/reading-image.jpg" alt="Reading" className="hobby-image" />
                    <div className="hobby-description">
                        <h3>Watching Movies</h3>
                        <p>
                            I enjoy watching movies and documenteries. I always find myself relaxed while I watch movies.  
                        </p>
                    </div>
                </div>

                <div className="hobby-item">
                    <img src="path/to/reading-image.jpg" alt="Reading" className="hobby-image" />
                    <div className="hobby-description">
                        <h3>Spending Time With Dogs </h3>
                        <p>
                            Spending time with my dog, Aaron, is one of my favourite hobbies. 
                            My dog brings so much joy into my life, and we have a special connection. 
                            Visit his page and see How wonderful he is. 
                        </p>
                    </div>

                    
                </div>

                <div className="hobby-item">
                    <img src="path/to/reading-image.jpg" alt="Reading" className="hobby-image" />
                    <div className="hobby-description">
                        <h3>Musics  </h3>
                        <p>
                            Music is another hobby I genuinely enjoy. Whether listening to my favourite songs, exploring new genres, 
                            or just unwinding with a good melody, music can calm the mind and spark creativity. 
                            It’s a perfect way to express emotions and connect with others, making it an essential part of my free time.
                        </p>
                    </div>
                </div>
            </div>

            {/* Footer with copyright and links */}
            <FooterComponents />
        </div>
    );
}

export default HobbiesPage;
