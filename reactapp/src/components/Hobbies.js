// WorkExprience.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HeaderComponents from './Header';

function HobbiesPage() {
    return (

    <div className="hobbies">
        <HeaderComponents >
            <div className="hobbiesContent">
                <h1>About Hobbies</h1>
           
            </div>
        </HeaderComponents>

    </div>
    );
}

export default HobbiesPage;