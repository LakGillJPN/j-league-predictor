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

export default function PlayTest() {
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
 
      <div className='fixtures-box' key='868108'>
   
        <div className='predict-game'>  
          <div className='game-box'>
            <div> <img className='logo' src='https://media-4.api-sports.io/football/teams/55.png' />  </div>
            <div> Brentford </div>
            </div>

        <div className='scorebox-container'>
          <input type="text" className="scorebox" name={`868108`} 
            maxLength={1} pattern="[0-9.]" min="0" max="10" 
            onChange={handleHomeChange} required></input>
            
        <div className="colon"></div>
  
          <input type="text" className="scorebox" name={`868108`} 
            maxLength={1} pattern="[0-9.]" min="0" max="10" 
            onChange={handleAwayChange} required></input> 
        </div>

        <div className='game-box'>
          <div> <img className='logo' src= 'https://media-4.api-sports.io/football/teams/47.png' /> </div>
          <div> Tottenham </div>
        </div>
      </div>
      <div className="space"></div>  
    </div>

    <div className='fixtures-box' key='868110'>
   
        <div className='predict-game'>  
          <div className='game-box'>
            <div> <img className='logo' src='https://media-4.api-sports.io/football/teams/52.png' />  </div>
            <div> Crystal Palace </div>
            </div>

        <div className='scorebox-container'>
          <input type="text" className="scorebox" name={`868110`} 
            maxLength={1} pattern="[0-9.]" min="0" max="10" 
            onChange={handleHomeChange} required></input>
            
        <div className="colon"></div>
  
          <input type="text" className="scorebox" name={`868110`} 
            maxLength={1} pattern="[0-9.]" min="0" max="10" 
            onChange={handleAwayChange} required></input> 
        </div>

        <div className='game-box'>
          <div> <img className='logo' src= 'https://media-4.api-sports.io/football/teams/36.png' /> </div>
          <div> Fulham</div>
        </div>
      </div>
      <div className="space"></div>  
    </div>

    <div className='fixtures-box' key='868111'>
   
        <div className='predict-game'>  
          <div className='game-box'>
            <div> <img className='logo' src='https://media-4.api-sports.io/football/teams/45.png' />  </div>
            <div> Everton </div>
            </div>

        <div className='scorebox-container'>
          <input type="text" className="scorebox" name={`868111`} 
            maxLength={1} pattern="[0-9.]" min="0" max="10" 
            onChange={handleHomeChange} required></input>
            
        <div className="colon"></div>
  
          <input type="text" className="scorebox" name={`868111`} 
            maxLength={1} pattern="[0-9.]" min="0" max="10" 
            onChange={handleAwayChange} required></input> 
        </div>

        <div className='game-box'>
          <div> <img className='logo' src= 'https://media-4.api-sports.io/football/teams/39.png' /> </div>
          <div> Wolves </div>
        </div>
      </div>
      <div className="space"></div>  
    </div>

    <div className='fixtures-box' key='868113'>
   
        <div className='predict-game'>  
          <div className='game-box'>
            <div> <img className='logo' src='https://media-4.api-sports.io/football/teams/46.png' />  </div>
            <div> Leicester </div>
            </div>

        <div className='scorebox-container'>
          <input type="text" className="scorebox" name={`868113`} 
            maxLength={1} pattern="[0-9.]" min="0" max="10" 
            onChange={handleHomeChange} required></input>
            
        <div className="colon"></div>
  
          <input type="text" className="scorebox" name={`868113`} 
            maxLength={1} pattern="[0-9.]" min="0" max="10" 
            onChange={handleAwayChange} required></input> 
        </div>

        <div className='game-box'>
          <div> <img className='logo' src= 'https://media-4.api-sports.io/football/teams/34.png' /> </div>
          <div> Newcastle </div>
        </div>
      </div>
      <div className="space"></div>  
    </div>
 

    <button type='submit'>SUBMIT</button>
  </form>
  </>}
</>
 )
}
