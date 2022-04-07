import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { BrowserRouter as Router } from  'react-router-dom'

const App = () => {
  return (
    <Router>
      <Navbar />
      <Hero />
    </Router>
  );
};

export default App;
