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

// use the getResults function to get the previous week's actual results
  useEffect(() => {
    getResults(setResults, userEmail);
  }, [userEmail]);

// use the scoreGen function to calucate the user's score between their predications and actual results
  useEffect(() => {
    const scores = results.map((result) =>
       [scoreGen(
        result.home_predication,
        result.away_predication,
        result.home_winner_predication,
        result.away_winner_predication,
        result.home_score,
        result.away_score,
        result.home_winner,
        result.away_winner
      ), result.id, result.gameweek]
    );

    setPoints(scores); // set the user's scores to the points array
  }, [results]);


// Insert the user's points into the database
  useEffect(() => {
    const postPoints = async () => {
      try {
        await axios.post('api/points', {
          userEmail,
          points,
        });
        await axios.post('api/overall', {
         userEmail,
        })
      } catch (error) {
        console.error(error);
      }
    };
  
    if (points.length > 0) { //make the array has been populated
      postPoints();
    }
  }, [points, userEmail]);

  // get the user's total score for the week
  useEffect(() => {
    getTotal(setTotal, userEmail) 
  }, [points, userEmail])

  return (
    <>
    <Header/>
    <div className = 'overall'> 
    <h1 id='heading'>Results </h1>
    

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
          <div className='container'> 

            <div className='results' key={result.id}>

              <div className='actual'>
                <div className='result-box'> {result.home_team} </div>
                <div className='scorebox-container'>
                  <span className='actual-goals'>{result.home_score}</span>
                  <span className='actual-goals'> {result.away_score}</span> 
                </div>
                <div className='result-box'> {result.away_team} </div>
              </div>

              Predication:
              <div className='predications'>
              <div className='result-box'> {result.home_team} </div> 
              <div className='scorebox-container'>
                <span className='predict-goals'>{result.home_predication} </span>
                <span className='predict-goals'>{result.away_predication} </span>
              </div>
              <div className='result-box'>{result.away_team}</div>
              </div>
              Points:
              <div className='red'>
                {score}
              </div> 
            </div>   
            <div className='space'></div>
          </div>
        );
      })}
      <div className='total'> Gameweek Total 
        <div className='total-points'> {total} </div></div>
      </div>
    </>
  );
}