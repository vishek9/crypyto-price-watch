// Home.js
import React from 'react';
// import { Link } from 'react-router-dom';
import CarouselFadeExample from './CarouselFadeExample';
import Nav from './Nav';
// import Footer from './Footer';
import "./home.css";

const Home = () => {
  return (
    <div className='full-screen-container'>
      <div className='nav-container'>
        <Nav />
      </div>

      <div className='carousel-container'>
        <CarouselFadeExample />
      </div>

     

      {/* <div className='footer-container'>
        <Footer />
      </div> */}
    </div>
  );
};

export default Home;
