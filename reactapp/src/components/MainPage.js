import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutMe from '../AboutMe'; 
import HomePage from '../HomePage'; 

import '../App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Home page as the default route */}
        <Route path="/" element={<HomePage />} /> 

        {/* Route for About Me page */}
        <Route path="../AboutMe" element={<AboutMe />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
