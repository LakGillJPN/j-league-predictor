import {useState, useEffect,React} from 'react';
import Header from '../components/Header';
import './Play.css'
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
    <h1>Make your Predications</h1>

    {fixtures.map((fixture) => (
    
    <div key={fixture.id}>
   
    <div className='predict-game'>  
    <div className='game-box'>
      <div> <img className='logo' src={fixture.home_team_logo} />  </div>
       {fixture.home_team} 
       <div><input type="number" className="scorebox"  pattern="[0-9.]" min="0" max="10" required></input></div>
    </div>

    <div className='game-box'>
    <div> <img className='logo' src={fixture.away_team_logo} /> </div>
       {fixture.away_team}
       <div><input type="number" className="scorebox" required></input></div>
    </div>

      </div>
      <div className="space"></div>
    
    
  </div>
))}

  

    </>
  )
}
