import {useState, useEffect,React} from 'react';
import axios from 'axios';
import Header from '../components/Header';
import getFixtures from '../utils/get-fixtures';

export default function Play() {
  const [fixtures, setFixtures] = useState([]);
  
  useEffect(() => {
    getFixtures()
  },[])

  getFixtures(setFixtures) 

  return (
    <>
    <Header/>
    <h1>Make your Predicatons</h1>

    {fixtures.map((fixture) => (
    <div key={fixture.id}>
    <div className='images'>
    <div className='home-logo'><img src={fixture.home_team_logo} alt=""/></div>
    <div className='away-logo'><img src={fixture.away_team_logo} alt=""/> </div>
    </div>
    <p className='game'>{`${fixture.home_team} vs ${fixture.away_team}`} </p>
    <p className='date'>{` ${new Date(fixture.date).toDateString()}`} </p>
    <p className='time'> {` ${new Date(fixture.date).toTimeString()}`}  </p>
    
  </div>
   ))}

  

    </>
  )
}
