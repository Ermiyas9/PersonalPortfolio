import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/MainPage';

function App() {
  return (
    <>
      <Router>
        <Navbar /> {/* Render Navbar component */}
        <Switch>
          <Route path='/' exact /> {/* Define Route */}
        </Switch>
      </Router>
    </>
  );
}

export default App;
