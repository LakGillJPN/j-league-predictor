import './Home.css';
import React from 'react';
import Header from '../components/Header.tsx';
import FixturesCarousel from '../components/FixturesCarousel.tsx';

export default function Home(): JSX.Element {
  return (
    <div className="Home">
      <Header/>  
      <div className="carousel-container">
        <FixturesCarousel/> 
        </div>
    </div>
  );
}


