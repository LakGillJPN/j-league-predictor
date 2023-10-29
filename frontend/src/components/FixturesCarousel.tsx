import React from 'react';
import {useEffect, useState} from 'react';
import { Carousel} from 'react-responsive-carousel';
import { getGameweekNum } from '../utils/get-gameweek.ts';
import getFixtures from '../utils/get-fixtures.ts'; // import the fixture list
import { useNavigate } from "react-router-dom";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './FixturesCarousel.css';
import { Fixture } from '../../globals'

export default function FixturesCarousel() {
  const [fixtures, setFixtures] = useState<any>([]);
  const navigate = useNavigate();
  
  useEffect(() => {
    getFixtures(setFixtures)  // set the fixtures list
  },[])

  return (
    <div className="main-page">
    <div className="sign-up-wrapper" onClick={() => navigate("/signup")}> 
      <p className="sign-up-text">Register To Play J-League Predictor</p>
      <p className="sign-up-button">Sign Up Now</p> 
    </div>
    <Carousel  
      autoPlay={true}
      interval={5500}
      infiniteLoop={true} 
      showIndicators={true} 
      showStatus={false}
      showThumbs={false}
      showArrows={false}
    >
    
   {fixtures.map((fixture: Fixture) => (
    <div key={fixture.fixture_id}>
    <h1>Gameweek {getGameweekNum(fixture.gameweek)}</h1>
      <div className='first-row'>
        <div className='game'>
          <div> <img className='images' src={fixture.home_team_logo_url} alt="home team logo" /> </div>
          <div className='team'>{fixture.home_team_name} </div>
        </div>
      
        <div className='team'>vs</div>

        <div className='game'>
          <div> <img className='images' src={fixture.away_team_logo_url} alt="away team logo"/> </div>
          <div className='team'>{fixture.away_team_name} </div>
        </div>
      </div>

      {/* Need to fix this */}

      <div >{`${new Date(fixture.date).toDateString()}`}  </div>
     
      <div>{fixture.venue_name}</div>
  </div>
  ))}
    </Carousel>

  </div>

  );
}


   