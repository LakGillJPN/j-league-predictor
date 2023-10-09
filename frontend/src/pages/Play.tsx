import React from 'react';
import {useState, useEffect} from 'react';
import Header from '../components/Header.tsx';
import './Play.css'
import getFixtures from '../utils/get-fixtures.ts';
import { UserAuth,} from '../context/AuthContext.tsx';
import axios from 'axios';
import Warning from '../components/Warning.tsx';
import { useNavigate } from 'react-router-dom';
import { playGameweek, getGameweekNum } from '../utils/get-gameweek.ts';
//import CountdownTimer from '../components/CountdownTimer.jsx';
import { Fixture } from "../../globals";
import { predicationsAPICall } from '../utils/api-calls.ts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus, faMinusCircle } from '@fortawesome/free-solid-svg-icons';

export default function Play() {
  const [fixtures, setFixtures] = useState([]);
  const [homePredications, setHomePredications] = useState<number[]>([]);
  const [awayPredications, setAwayPredications] = useState<number[]>([]);
  const [gameweek, setGameweek] = useState<string[] >([]);
  const { userPredications, uid} = UserAuth();

  const navigate = useNavigate();


  useEffect(() => {
    getFixtures(setFixtures)
      .then(fixturesData => {
        setHomePredications(Array(10).fill(0));
        setAwayPredications(Array(10).fill(0));
      })
      .catch(error => {
        console.error(error);
      });

    playGameweek(setGameweek);
  }, []);

  useEffect(() => {
    console.log(homePredications)
  })

  // useEffect( () => {
  //   playGameweek(setGameweek)
  // },[gameweek])


  // const handleHomeChange = (event: { target: { name: string; value: string; }; }) => {
  //   const { name, value } = event.target;
  //   setHomePredications(prevState => ({
  //     ...prevState,
  //     [name]: parseInt(value)
  //   }));
  // }

  const handleHomeChange = (index: any ) => {
    setHomePredications(prevState => {
      const updatedPredictions = [...prevState];
      updatedPredictions[index] += 1;
      return updatedPredictions;
    });
  };
  
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
    const result = predictArr([homePredications], awayPredications);
    axios.post(predicationsAPICall(), {
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
    <h1 className='play-header'>Gameweek {getGameweekNum(gameweek)}</h1>

    {userPredications.length > 1 ? <Warning/> : <div className='wrapper'> 

    <form onSubmit={handleFormSubmit}> 
    <div className=" fixtures-container">
    {fixtures.map((fixture: Fixture, index) => (
    
      <div className='fixtures-box' key={fixture.fixture_id}>
   
        <div className='predict-game'>  
          <div className='game-box'>
            <div> <img className='logo' src={fixture.home_team_logo_url} alt="Home Team Logo"/>  </div>
            <div> {fixture.home_team_name} </div>
            </div>

        <div className='scorebox-container'>
          <div className="score-box">
           <p onClick={() => handleHomeChange(index)} className="plus-and-minus"><FontAwesomeIcon icon={faCirclePlus} /></p>
           <p className="score">{homePredications[index]}</p>
           <p className="plus-and-minus"><FontAwesomeIcon icon={faMinusCircle} /></p>
          </div> 
          {/* <input type="text" className="scorebox" name={`${fixture.fixture_id}`} 
            maxLength={1} pattern="[0-9.]" min="0" max="10" 
            onChange={handleHomeChange} required></input> */}
            
        <div className="colon"></div>
  
          <input type="text" className="scorebox" name={`${fixture.fixture_id}`} 
            maxLength={1} pattern="[0-9.]" min="0" max="10" 
            onChange={handleAwayChange} required></input> 
        </div>

        <div className='game-box'>
          <div> <img className='logo' src={fixture.away_team_logo_url} alt="Away Team Logo"/> </div>
          <div> {fixture.away_team_name} </div>
        </div>
        
       
      </div>
       <div className='date-and-time-wrapper'> 
          <div className='date'>{`${new Date(fixture.date).toDateString()}`} </div>
          <div className='time'>{`${new Date(fixture.date).toTimeString()}`} </div> 
        </div> 
      

      <div className="space"></div>  
    </div>
  ))}
  </div>

    <button type='submit'>SUBMIT</button>
  </form>
  
  </div>}
</>
 )
}
