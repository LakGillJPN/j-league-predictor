import {React, useEffect, useState} from 'react';
import { Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./FixturesCarousel.css"
import axios from 'axios';

export default function FixturesCarousel() {
  const [fixtures, setFixtures] = useState([]);

  useEffect(() => {
    getFixtures()
  },[])

  async function getFixtures() {
    const fetchedFixs = await axios.get("/fixtures");
    setFixtures(fetchedFixs.data.filter(x => x.gameweek === 'Regular Season - 8'))
    // const regularSeason8Fixtures = fixtures.filter(fixture => fixture.gameweek === 'Regular Season - 8');
  }

  return (
    <Carousel 
      showArrows={false} 
      infiniteLoop={true} 
      autoPlay={true} 
      showIndicators={true} 
      showStatus={false}
    >
  
{fixtures.map((fixture) => (
  <div key={fixture.id}>
    <p className='game'>{`${fixture.home_team} vs ${fixture.away_team}`} </p>
    <p className='date'>{` ${new Date(fixture.date).toDateString()}`} </p>
    <p className='time'> {` ${new Date(fixture.date).toTimeString()}`}  </p>
  </div>
))}
    </Carousel>
  )
}