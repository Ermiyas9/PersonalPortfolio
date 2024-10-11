// WorkExprience.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HeaderComponents from './Header';

function Hobbies() {
    return (
        <div>


            <h1>Hobbies</h1>
            <p>Hobbies</p>

            
        <Routes>
          <Route path="/" element={<HeaderComponents />} />
        </Routes>

        </div>
    );
}

export default Hobbies;