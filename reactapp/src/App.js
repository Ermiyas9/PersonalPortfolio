import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage'; 
import AboutMe from './components/aboutMe';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/" element={<AboutMe />} />

      </Routes>
    </Router>
  );
}

export default App;

