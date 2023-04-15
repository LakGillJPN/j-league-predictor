import {useState, useEffect,React} from 'react';
import Header from '../components/Header';
import './Play.css'
import getFixtures from '../utils/get-fixtures';
import { UserAuth } from '../context/AuthContext';
import axios from 'axios';


export default function Play() {
  const [fixtures, setFixtures] = useState([]);
  const [homePredications, setHomePredications] = useState([]);
  const [awayPredications, setAwayPredications] = useState([]);
  const {user, userEmail} = UserAuth();
  
  useEffect(() => {
    getFixtures()
  },[])

  useEffect(() => {
    console.log('HOME', homePredications)
  },[homePredications])

  useEffect(() => {
    console.log('AWAY', awayPredications)
  },[awayPredications])

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

    let newArr = []

    for (let i = 0; i < id.length; i++) {
      newArr.push([id[i],homeScore[i],awayScore[i]])
    }
    return newArr
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const result = resultArr(homePredications, awayPredications);
    axios.post('/api/predications', {
      userEmail,
      predications: result,
    })
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log(error);
    });
  }



  getFixtures(setFixtures) 

  return (
    <>
    <Header/>
    
    <h1>Make your Predications {user.email} </h1>

    <form onSubmit={handleFormSubmit}> 

    {fixtures.map((fixture) => (
    
      <div key={fixture.id}>
   
        <div className='predict-game'>  
          <div className='game-box'>
            <div> <img className='logo' src={fixture.home_team_logo} />  </div>
            <div> {fixture.home_team} <input type="text" className="scorebox" name={`${fixture.id}`} 
                   maxLength="1" pattern="[0-9.]" min="0" max="10" 
                  onChange={handleHomeChange} required></input></div>
            </div>

        <div className='game-box'>
          <div> <img className='logo' src={fixture.away_team_logo} /> </div>
          <div> <input type="text" className="scorebox" name={`${fixture.id}`} 
                maxLength="1" pattern="[0-9.]" min="0" max="10" 
                onChange={handleAwayChange} required></input> {fixture.away_team} </div>
        </div>
      </div>
      <div className="space"></div>  
    </div>
  ))}

    <button type='submit'>SUBMIT</button>
  </form>
</>
 )
}
