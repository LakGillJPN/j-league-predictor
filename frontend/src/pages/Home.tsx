import './Home.css';
import React from 'react';
import Header from '../components/Header.tsx';
import FixturesCarousel from '../components/FixturesCarousel.tsx';

export default function Home(): JSX.Element {
  return (
    <div data-testid="homepage-test" className="Home">
      <Header/>  
      <div className="carousel-container">
        <FixturesCarousel/> 
      </div>
      
      <div className='notice-container'>
        <h1 className='notice'>Notice</h1>
        <p className='season-notice'> The J-League 2023 Season has ended. <br/> For testing purposes, the date has been reset to Gameweek 1. </p>
        <p className='season-notice'> Jリーグ2023シーズンが終了しました。 <br/>  テストのため、日付は Gameweek 1 にリセットされています。 </p>
        <p className='season-notice-end'>See you next season!</p>
      </div>
    </div>
  );
} 


