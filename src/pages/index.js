import React, {useState} from 'react';
import SkipNavigation from '../components/SkipNavigation';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Info from '../components/Info';
import Services from '../components/Services';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';
import { 
  homeObjOne,
  homeObjTwo,
  homeObjThree
 } from '../components/Info/Data';
 
const Home = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () =>{
    setIsOpen(!isOpen);
  }

  return (
    <>
      <SkipNavigation />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Hero />
      <Info {...homeObjOne} />
      <Info {...homeObjTwo} />
      <Services />
      <Info {...homeObjThree} />
      <Footer />
    </>
  );
};

export default Home;