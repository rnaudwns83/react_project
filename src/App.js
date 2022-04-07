import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Info from './components/Info';
import { 
  homeObjOne,
  homeObjTwo,
  homeObjThree
 } from './components/Info/Data';
import { BrowserRouter as Router } from  'react-router-dom'

const App = () => {
  return (
    <Router>
      <Navbar />
      <Hero />
      <Info {...homeObjOne} />
      <Info {...homeObjTwo} />
      <Info {...homeObjThree} />
    </Router>
  );
};

export default App;
