import {React, useEffect, useState} from 'react';
import { Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./FixturesCarousel.css";
import getFixtures from '../utils/get-fixtures'; // import the fixture list
import getGameweek from '../utils/get-gameweek';

export default function FixturesCarousel() {
  const [fixtures, setFixtures] = useState([]);

  useEffect(() => {
    getFixtures()
  },[])


  getFixtures(setFixtures); // set the fixtures list

  return (
    <>
    <Carousel  
      autoPlay={true}
      interval={5500}
      infiniteLoop={true} 
      showIndicators={true} 
      showStatus={false}
      showThumbs={false}
      showArrows={false}
    >
    
   {fixtures.map((fixture) => (
    <div key={fixture.id}>
    <h1>Gameweek {getGameweek(fixture.gameweek)}</h1>
      <div className='first-row'>
        <div className='game'>
          <div> <img className='images' src={fixture.home_team_logo} /> </div>
          <div className="team">{fixture.home_team} </div>
        </div>
      
        <div className="team">vs</div>

        <div className='game'>
          <div> <img className='images' src={fixture.away_team_logo} /> </div>
          <div className="team">{fixture.away_team} </div>
        </div>
      </div>


      <div className='date'>{` ${new Date(fixture.date).toDateString()}`} </div>
      <div className='time'> {` ${new Date(fixture.date).toTimeString()}`}  </div> 

    {/* <div className='images'>
      <div className='home-logo'><img src={fixture.home_team_logo} alt=""/></div>
      <div className='away-logo'><img src={fixture.away_team_logo} alt=""/> </div>
    </div>
    <p className='game'>{`${fixture.home_team} vs ${fixture.away_team}`} </p>
    <p className='date'>{` ${new Date(fixture.date).toDateString()}`} </p>
    <p className='time'> {` ${new Date(fixture.date).toTimeString()}`}  </p>  */}
   
  </div>
  
))}
    </Carousel>

 


  </>
  )
}


   