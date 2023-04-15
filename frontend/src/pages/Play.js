import {useState, useEffect,React} from 'react';
import Header from '../components/Header';
import './Play.css'
import getFixtures from '../utils/get-fixtures';
import { UserAuth } from '../context/AuthContext';


export default function Play() {
  const [fixtures, setFixtures] = useState([]);
  const {user} = UserAuth();
  const [predication, setPredication] = useState([]);
  
  useEffect(() => {
    getFixtures()
  },[])

  getFixtures(setFixtures) 

  return (
    <>
    <Header/>
    
    <h1>Make your Predications {user === null ? 'user' : user.email} </h1>

    {fixtures.map((fixture) => (
    
    <div key={fixture.id}>
   
    <div className='predict-game'>  
      <div className='game-box'>
        <div> <img className='logo' src={fixture.home_team_logo} />  </div>
        <div> {fixture.home_team} <input type="number" className="scorebox"  pattern="[0-9.]" min="0" max="10" required></input></div>
      </div>

      <div className='game-box'>
        <div> <img className='logo' src={fixture.away_team_logo} /> </div>
        <div> <input type="number" className="scorebox" required></input> {fixture.away_team} </div>
      </div>

    </div>
      <div className="space"></div>
    
    
  </div>
))}

  

    </>
  )
}
