import React from 'react';
import {useState, useEffect} from 'react';
import Header from '../components/Header.tsx';
import './Play.css'
import getFixtures from '../utils/get-fixtures.ts';
import { UserAuth,} from '../context/AuthContext.tsx';
import axios from 'axios';
import Warning from '../components/Warning.tsx';
import { useNavigate } from 'react-router-dom';
import { playGameweek } from '../utils/get-gameweek.ts';
//import CountdownTimer from '../components/CountdownTimer.jsx';
import { Fixture } from "../../../globals";

export default function Play() {
  const [fixtures, setFixtures] = useState([]);
  const [homePredications, setHomePredications] = useState([]);
  const [awayPredications, setAwayPredications] = useState([]);
  const [gameweek, setGameweek] = useState<string[]>([]);
  const {userEmail, userPredications, uid} = UserAuth();

  const navigate = useNavigate();


  useEffect(() => {
    getFixtures(setFixtures) 
  },[])

  useEffect( () => {
    playGameweek(setGameweek)
  },[])


  const handleHomeChange = (event: { target: { name: string; value: string; }; }) => {
    const { name, value } = event.target;
    setHomePredications(prevState => ({
      ...prevState,
      [name]: parseInt(value)
    }));
  }

  const handleAwayChange = (event: { target: { name: string; value: string; }; }) => {
    const { name, value } = event.target;
    setAwayPredications(prevState => ({
      ...prevState,
      [name]: parseInt(value)
    }));
  }

  const predictArr = (home: object, away: object) => {
    const id : string[] = Object.keys(home);
    const homeScore : number[] = Object.values(home);
    const awayScore : number[] = Object.values(away);

    let newArr = [];

    for (let i = 0; i < id.length; i++) {
      newArr.push([id[i],homeScore[i],awayScore[i]])
    }
    return newArr
  }

  const handleFormSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    const result = predictArr(homePredications, awayPredications);
    axios.post('/api/predications', {
      uid,
      predications: result,
      current_gameweek: gameweek
    })
    .then(response => {
      navigate('/submitted')
    })
    .catch(error => {
      console.log(error);
    });
  }

 

  return (
    <>
    <Header/>
    {/* <h1>You've got until:</h1>
      <CountdownTimer deadline={Date(deadline)} /> */}
    <h1 className='play-header'>Make Your Predications!</h1>

    {userPredications.length > 1 ? <Warning/> : <> 

    <form onSubmit={handleFormSubmit}> 

    {fixtures.map((fixture: Fixture) => (
    
      <div className='fixtures-box' key={fixture.fixture_id}>
   
        <div className='predict-game'>  
          <div className='game-box'>
            <div> <img className='logo' src={fixture.home_team_logo_url} />  </div>
            <div> {fixture.home_team_name} </div>
            </div>

        <div className='scorebox-container'>
          <input type="text" className="scorebox" name={`${fixture.fixture_id}`} 
            maxLength={1} pattern="[0-9.]" min="0" max="10" 
            onChange={handleHomeChange} required></input>
            
        <div className="colon"></div>
  
          <input type="text" className="scorebox" name={`${fixture.fixture_id}`} 
            maxLength={1} pattern="[0-9.]" min="0" max="10" 
            onChange={handleAwayChange} required></input> 
        </div>

        <div className='game-box'>
          <div> <img className='logo' src={fixture.away_team_logo_url} /> </div>
          <div> {fixture.away_team_name} </div>
        </div>
        {/* <div className='date-and-time'>
        <div className='date-and-time'>{`${new Date(fixture.date).toDateString()}`} </div>
        <div className='date-and-time'>{`${new Date(fixture.date).toTimeString()}`} </div> 
        </div> */}
      </div>
      

      <div className="space"></div>  
    </div>
  ))}

    <button type='submit'>SUBMIT</button>
  </form>
  </>}
</>
 )
}
