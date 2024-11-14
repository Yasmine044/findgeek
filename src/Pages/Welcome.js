import React from 'react';
import AboutUs from '../components/AboutUs';
import FieldCarousel from '../components/FieldCarousel';
import Home from '../components/Home';
import NavigationBar from '../components/NavigationBar';

const Welcome = () => {
  return (
    <div>
      <NavigationBar />
      <Home />
      <FieldCarousel />
      <AboutUs />
    </div>
  );
};

export default Welcome;
