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
import { handleHomeMinusChange, handleHomePlusChange } from '../utils/handleHomeChange.ts';
import { handleAwayMinusChange, handleAwayPlusChange } from '../utils/handleAwayChange.ts';

export default function Play() {
const [fixtures, setFixtures] = useState<Fixture[]>([]);
const [homePredications, setHomePredications] = useState<{ [key: string]: number }>({});
const [fixtureOrder, setFixtureOrder] = useState<string[]>([]);
const [awayPredications, setAwayPredications] = useState<{ [key: string]: number }>({});
const [gameweek, setGameweek] = useState<string[]>([]);
const { userPredications, uid } = UserAuth();

  const navigate = useNavigate();

  useEffect(() => {
     // Initialize homePredications with default values when fixtures change
     const initialHomePredications :  { [key: string]: number }  = {};
     fixtures.forEach((fixture) => {
       initialHomePredications[fixture.fixture_id.toString()] = 0;
     });
     setHomePredications(initialHomePredications);

      // Initialize homePredications with default values when fixtures change
      const initialAwayPredications :  { [key: string]: number }  = {};
      fixtures.forEach((fixture) => {
        initialAwayPredications[fixture.fixture_id.toString()] = 0;
      });
      setAwayPredications(initialAwayPredications);

   }, [fixtures]);


   useEffect(() => {
    getFixtures(setFixtures)
      .then(() => {
      })
      .catch(error => {
        console.error(error);
      });
  
    playGameweek(setGameweek);
  }, []);

  // useEffect(() => {
  //   console.log('ID', Object.keys(homePredications))
  //   console.log('HOME', Object.values(homePredications))
  //   console.log('AWAY', Object.values(awayPredications))
  // },[homePredications])



  const handleHomePlus = (index: number) => {
    handleHomePlusChange(index, fixtures, homePredications, fixtureOrder, setFixtureOrder, setHomePredications);
  };

  const handleHomeMinus = (index: number) => {
    handleHomeMinusChange(index, fixtures, homePredications, fixtureOrder, setFixtureOrder, setHomePredications);
  };

  const handleAwayPlus = (index: number) => {
    handleAwayPlusChange(index, fixtures, awayPredications, fixtureOrder, setFixtureOrder, setAwayPredications);
  };

  const handleAwayMinus = (index: number) => {
    handleAwayMinusChange(index, fixtures, awayPredications, fixtureOrder, setFixtureOrder, setAwayPredications);
  };

 
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
    axios.post(predicationsAPICall(), {
      uid,
      predications: result,
      current_gameweek: gameweek
    })
    .then(response => {
      navigate('/submitted')
    })
    .catch(error => {
      alert("Please login to make your predications!")
      console.log(error);
    });
  }

  return (
    <>

    <Header/>
    {/* <h1>You've got until:</h1>
      <CountdownTimer deadline={Date(deadline)} /> */}
    <h1 className='play-header'>Gameweek {getGameweekNum(gameweek)}</h1>
   
    {userPredications.length > 11 ? <Warning/> : <div className='wrapper'>  
    {/* This needs to be changed back to "1" later once the edit button has added to the Warning page */}

    <form onSubmit={handleFormSubmit}> 
    <div className=" fixtures-container">
    {fixtures.map((fixture: Fixture, index) => (
    
      <div className='fixtures-box' key={fixture.fixture_id}>
        <div className='date-and-time-wrapper'> 
          <div className='date-and-time'>{`${new Date(fixture.date).toDateString()}` + ' '} {`${new Date(fixture.date).toTimeString().slice(0,5)}`}  </div>
          {/* <div className='time'>{`${new Date(fixture.date).toTimeString().slice(0,5)}`} </div>  */}
        </div> 
   
        <div className='predict-game'>  
          <div className='game-box'>
            <div> <img className='logo' src={fixture.home_team_logo_url} alt="Home Team Logo"/>  </div>
            <div> {fixture.home_team_name} </div>
            </div>

        <div className='scorebox-container'>
          <div className="scorebox">
          <div className="plus-and-minus">
            <button
              type="button"
              onClick={() => handleHomePlus(index)}
              className="icon-button"
              name={`${fixture.fixture_id}`} 
            >
            <FontAwesomeIcon icon={faCirclePlus} />
            </button>
          </div>
           <p className="score">{homePredications[fixture.fixture_id]}</p>
           <div className="plus-and-minus">
           <button
              type="button"
              onClick={() => handleHomeMinus(index)}
              className="icon-button"
              name={`${fixture.fixture_id}`} 
            >
            <FontAwesomeIcon icon={faMinusCircle} />
            </button>
            </div>
            
          </div> 
          {/* <input type="text" className="scorebox" name={`${fixture.fixture_id}`} 
            maxLength={1} pattern="[0-9.]" min="0" max="10" 
            onChange={handleHomeChange} required></input> */}
            
        <div className="colon"></div>
        <div className='score-box'>
        <div className="plus-and-minus">
            <button
              type="button"
              onClick={() => handleAwayPlus(index)}
              className="icon-button"
              name={`${fixture.fixture_id}`} 
            >
            <FontAwesomeIcon icon={faCirclePlus} />
            </button>
          </div>
        <p className="score">{awayPredications[fixture.fixture_id]}</p>
           <div className="plus-and-minus">
           <button
              type="button"
              onClick={() => handleAwayMinus(index)}
              className="icon-button"
              name={`${fixture.fixture_id}`} 
            >
            <FontAwesomeIcon icon={faMinusCircle} />
            </button>
          </div>
          </div>   
        </div>

        <div className='game-box'>
          <div> <img className='logo' src={fixture.away_team_logo_url} alt="Away Team Logo"/> </div>
          <div> {fixture.away_team_name} </div>
        </div>
        
       
      </div>
       
      

      <div className="space"></div>  
    </div>
  ))}
  </div>

    <button className='submit'>SUBMIT</button>
  </form>
  
  </div>}
</>
 )
}
