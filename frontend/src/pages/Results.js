import {React, useState, useEffect, useRef} from 'react';
import Header from '../components/Header';
import getResults from '../utils/get-results';
import getTotal from '../utils/get-total';
import { UserAuth } from '../context/AuthContext';
import scoreGen from '../utils/scoreGen';
import './Results.css'
import axios from 'axios';

export default function Results() {

  let {userEmail} = UserAuth();
  let [results, setResults] = useState([]);
  let [points, setPoints] = useState([])
  let [total, setTotal] = useState([]);

  const fetchData = async () => {
    try {
      await getResults(setResults, userEmail);
      const scores = results.map((result) =>
        [scoreGen(
          result.home_predication,        
          result.away_predication,        
          result.home_winner_predication,        
          result.away_winner_predication,        
          result.home_score,    
          result.away_score,     
          result.home_winner,      
          result.away_winner), 
          result.id, result.gameweek]
      );
      setPoints(scores);
  
      if (points.length > 0) {
        await axios.post('api/points', {
          userEmail,
          points,
        });
        console.log('Points inserted');
      }
  
      await getTotal(setTotal, userEmail);
     
      
      await axios.post('/api/overall', {
          points,
          total,
          userEmail,
        });
    } catch (error) {
      console.error(error);
    }
  }
  
  useEffect(() => {
    fetchData();
  }, [userEmail]);


  return (
    <>
    <Header/>
    <h1>Results</h1>
    
    {results.length === 0 ? <h1>No Results to show</h1> : ""}

    {results.map((result) => {
        const score = scoreGen(
          result.home_predication, 
          result.away_predication, 
          result.home_winner_predication, 
          result.away_winner_predication, 
          result.home_score, 
          result.away_score, 
          result.home_winner, 
          result.away_winner
        );

        return (
          <div key={result.id}>
            <div className='results-container'>
              <div className='actual'>
                {result.home_team} {result.home_score} {result.away_score} {result.away_team}
              </div>
              <div className='predicated'>
                {result.home_team} {result.home_predication} {result.away_predication} {result.away_team}
              </div>
              <div>
                Your Points: {score}
              </div>
            </div>  
          </div>
        );
      })}
      <div><h1>Gameweek Total = {total}</h1></div>
    </>
  );
}