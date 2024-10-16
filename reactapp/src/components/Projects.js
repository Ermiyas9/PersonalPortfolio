
// Projects.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HeaderComponents from './Header';

function ProjectsPage() {
    return (

    <div className="projects">
        <HeaderComponents >
            <div className="Projects">
                <h1>About My Projects</h1>
           
            </div>
        </HeaderComponents>

    </div>
    );
}

export default ProjectsPage;