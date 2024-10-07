import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import '../App.css';
import AboutMe from '../AboutMe'; 
import HomePage from '../HomePage'; 
import Doggo from '../Doggo'; 
import Hobbies from './Hobbies';

import Projects from './Projects';
import WorkExprience from './WorkExprience';


function App() {
  return (
    <BrowserRouter>
      <Routes>

        

        {/* Home page as the default route */}

        

        <Route path="/" element={<HomePage />} /> 

        {/* Route for About Me page */}
        <Route path="../AboutMe" element={<AboutMe />} /> 


         {/* Route for About Me page */}
         <Route path="../Doggo" element={<Doggo />} /> 


             {/* Home page as the default route */}
        <Route path="../WorkExprience" element={<WorkExprience />} /> 

        {/* Route for Projects page */}
        <Route path="../Projects" element={<Projects />} /> 


        {/* Route for Hobbies page */}
        <Route path="../Hobbies" element={<Hobbies />} /> 



      </Routes>
    </BrowserRouter>
  );
}

export default App;
