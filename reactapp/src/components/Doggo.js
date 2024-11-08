import React from "react";

import HeaderComponents from './Header';
import FooterComponents from './Footer';
import logoIcon from '../images/dogoPage/logoIcon.png';
import hireMe from '../images/dogoPage/hireMeIcon.png';
import instaImageIcon from '../images/dogoPage/instaIcon.png';
import outlookImageIcon from '../images/dogoPage/outlookIcon.png';
import emailIcon from '../images/dogoPage/gmailIcon.png';

import dogPic from '../images/dogoPage/Aaron1.JPG';
import dogPic1 from '../images/dogoPage/Aaron2.JPG';
import dogPic2 from '../images/dogoPage/Aaron3.JPG';
import dogMovie from '../images/dogoPage/aaronChill.mp4';

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
            
            <div className="doggoContents" style={{ fontSize:'40px',fontWeight:'Bolder',fontFamily:'Courier New, monospace ',display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <p><h1>Hey There!</h1> </p>

                <img 
                    src={dogPic} 
                    alt="Dog Picture"  
                    style={{alignItems:'center', width: '500px', height: '600px', borderRadius: '50%', marginRight: '25px', marginLeft: '5px', marginTop: '25px' }}
                />
            </div>

            <div className="dogMsg" style={{
                fontSize: '25px',
                fontFamily: 'Courier New, monospace',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                lineHeight: '1.0'
            }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                    <p>Yo, what's up 🤗? My name is Aaron; I am a year-and-a-half dog.</p>
                    <p>Still a puppy 🥰. I live with my best friend Ermiyas.</p>
                    <p>I don't want to take your time by telling you how Ermi takes my personal space.</p>
                    <p>If you don't hire him, I won't have a long nap.</p>

                    <p><span>Please,  </span>
                    <a
                      href="mailto:egulti4128@conestogac.on.ca"
                      style={{
                        textDecoration: 'none',
                        color: 'Blue',
                        fontWeight: 'bold'
                      }}
                    >
                      HIRE HIM
                    </a>
                    <span>, and Let me have loooooong nap all afternoon .</span>
                  </p>
                </div>
            </div>


    

            
            <div className="doggoContents" style={{
                paddingBottom: '250px',
                fontSize: '40px',
                fontWeight: 'bolder',
                fontFamily: 'Courier New, monospace',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center'
            }}>
                <p>
                    <h3>Look at me, if he doesn’t have a job, he’ll be bothering me 😜😒</h3>
                </p>

                <iframe
                    width="600"
                    height="400"
                    src={dogMovie}
                    title="Dog video"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{
                        border: '5px solid #ccc',
                        borderRadius: '15px',
                        boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.3)',
                        marginTop: '20px'
                    }}
                ></iframe>
            </div>

            <div style={{
                display: 'flex',
                flexDirection: 'column',
                paddingLeft: '25px',
                paddingBottom: '250px',
                fontSize: '40px',
                fontWeight: 'Bolder',
                fontFamily: 'Courier New, monospace',
                alignItems: 'center' 
            }}>
                <p>
                    If you want to keep in touch with me, Follow my Instagram. And Forget what I said. I do love Ermiyas. 
                </p>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <img 
                        src={dogPic1} 
                        alt="A cute dog"  
                        style={{ width: '400px', height: '600px', marginRight: '100px', marginLeft: '5px', marginTop: '25px' }}
                    />
                    <img 
                        src={dogPic2} 
                        alt="A cute dog"  
                        style={{ width: '400px', height: '600px', marginRight: '25px', marginLeft: '5px', marginTop: '25px' }}
                    />
                </div>
            </div>



            {/* calling footer component for the webste footer contents */}
            <FooterComponents/>
        </div>
    );
}

export default DoggoPage;
