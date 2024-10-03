import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage.js'; 
import AboutMe from './components/AboutMe.js';
import Doggo from './components/Doggo.js';
import WorkExprience from './components/WorkExprience.js';
import Hobbies from './components/Hobbies.js';
import Projects from './components/Projects.js';

function App() {
  return (
    <Router>
      <Routes>y
        <Route path="/" element={<HomePage />} />
        <Route path="/AboutMe" element={<AboutMe />} />
        <Route path="/Doggo" element={<Doggo />} />
        <Route path="/WorkExprience" element={<WorkExprience />} />
        <Route path="/Hobbies" element={<Hobbies />} />
        <Route path="/Projects" element={<Projects />} />

      </Routes>
    </Router>
  );
}

export default App;

