import React from 'react'
import { BrowserRouter } from  'react-router-dom'
import SkipNavigation from './components/SkipNavigation/SkipNavigation';
import ImgCarousel from './components/carousel/ImgCarousel';
import Destinations from './components/destinations/Destinations'
import Footer from './components/footer/Footer';
import Hero from './components/hero/Hero'
import Navbar from './components/navbar/Navbar'
import Search from './components/search/Search';
import Selects from './components/selects/Selects';

function App() {
  return (
    <BrowserRouter>
      <SkipNavigation />
      <Navbar />
      <Hero />
      <Destinations />
      <Search />
      <Selects />
      <ImgCarousel />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
