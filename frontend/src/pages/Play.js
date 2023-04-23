import {useState, useEffect,React} from 'react';
import Header from '../components/Header';
import './Play.css'
import getFixtures from '../utils/get-fixtures';
import { UserAuth,} from '../context/AuthContext';
import axios from 'axios';
import Warning from '../components/Warning';
import getDeadline from '../utils/get-date';
import { useNavigate, Link } from 'react-router-dom';
import { getGameweekNum, getGameweek, playGameweek } from '../utils/get-gameweek';
import CountdownTimer from '../components/CountdownTimer';

export default function Play() {
  const [fixtures, setFixtures] = useState([]);
  const [homePredications, setHomePredications] = useState([]);
  const [awayPredications, setAwayPredications] = useState([]);
  const [gameweek, setGameweek] = useState([]);
  const {user, userEmail, userPredications} = UserAuth();

  const navigate = useNavigate();


  useEffect(() => {
    getFixtures()
  },[])

  useEffect( () => {
    playGameweek(setGameweek)
  },[])


  const handleHomeChange = (event) => {
    const { name, value } = event.target;
    setHomePredications(prevState => ({
      ...prevState,
      [name]: parseInt(value)
    }));
  }

  const handleAwayChange = (event) => {
    const { name, value } = event.target;
    setAwayPredications(prevState => ({
      ...prevState,
      [name]: parseInt(value)
    }));
  }

  const resultArr = (home, away) => {
    const id = Object.keys(home);
    const homeScore = Object.values(home);
    const awayScore = Object.values(away);

    let newArr = [];

    for (let i = 0; i < id.length; i++) {
      newArr.push([id[i],homeScore[i],awayScore[i]])
    }
    return newArr
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log('submitted')
    const result = resultArr(homePredications, awayPredications);
    axios.post('/api/predications', {
      userEmail,
      predications: result,
      current_gameweek: 'Regular Season - 9'
    })
    .then(response => {
      navigate('/submitted')
    })
    .catch(error => {
      console.log(error);
    });
  }

  getFixtures(setFixtures) 

  return (
    <>
    <Header/>
    {/* <h1>You've got until:</h1>
      <CountdownTimer deadline={Date(deadline)} /> */}
    <h1 className='play-header'>Make Your Predications!</h1>

    {userPredications.length > 1 ? <Warning/> : <> 

    <form onSubmit={handleFormSubmit}> 

    {fixtures.map((fixture) => (
    
      <div className='fixtures-box' key={fixture.id}>
   
        <div className='predict-game'>  
          <div className='game-box'>
            <div> <img className='logo' src={fixture.home_team_logo} />  </div>
            <div> {fixture.home_team} </div>
            </div>

        <div className='scorebox-container'>
          <input type="text" className="scorebox" name={`${fixture.id}`} 
            maxLength="1" pattern="[0-9.]" min="0" max="10" 
            onChange={handleHomeChange} required></input>
            
        <div className="colon"></div>
  
          <input type="text" className="scorebox" name={`${fixture.id}`} 
            maxLength="1" pattern="[0-9.]" min="0" max="10" 
            onChange={handleAwayChange} required></input> 
        </div>

        <div className='game-box'>
          <div> <img className='logo' src={fixture.away_team_logo} /> </div>
          <div> {fixture.away_team} </div>
        </div>
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
