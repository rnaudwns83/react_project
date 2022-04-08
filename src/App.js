import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Info from './components/Info';
import Services from './components/Services';
import Footer from './components/Footer';
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
      <Services />
      <Footer />
    </Router>
  );
};

export default App;
