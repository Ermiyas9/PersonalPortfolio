// WorkExprience.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HeaderComponents from './Header';
import socialMediaIconsDisplay from './socialMediaDisplay';

function WorkExpriencePage() {
    return (

        <div className="Exprience">
        <HeaderComponents >
            <div className="exprience">
                <h1>About My Work exprience</h1>
           
            </div>
        </HeaderComponents>

        {socialMediaIconsDisplay()}

    </div>
    );
}

export default WorkExpriencePage;