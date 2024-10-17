
// Projects.js
import React from 'react';
import HeaderComponents from './Header';
import socialMediaIconsDisplay from './socialMediaDisplay';

function ProjectsPage() {
    return (

    <div className="projects">
        <HeaderComponents >
            <div className="Projects">
                <h1>About My Projects</h1>
           
            </div>
        </HeaderComponents>

        {socialMediaIconsDisplay()}

    </div>
    );
}

export default ProjectsPage;