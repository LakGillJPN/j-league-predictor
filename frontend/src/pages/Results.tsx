import React, { useState, useEffect } from 'react';
import Header from '../components/Header.tsx';
import getResults from '../utils/get-results.ts';
import getTotal from '../utils/get-total.ts';
import { UserAuth } from '../context/AuthContext.tsx';
import scoreGen from '../utils/scoreGen.ts';
import './Results.css';
import axios from 'axios';
import { Result } from '../../globals';
import { pointsAPICall, overallAPICall } from '../utils/api-calls.ts';

export default function Results() {
  let { uid } = UserAuth();
  let [results, setResults] = useState<any>([]);
  let [points, setPoints] = useState<any>([]);
  let [total, setTotal] = useState<any>([]);
  const [color, setColor] = useState<string>('red')
  const [score, setScore] = useState<number>(0)
  
  let [hasTotalCalculated, setHasTotalCalculated] = useState(false);

  // use the getResults function to get the previous week's actual results
  useEffect(() => {
    if (uid !== null) {
      //console.log('RES', results)
      getResults(setResults, uid);
    }
  }, [uid]);

  // use the scoreGen function to calculate the user's score between their predications and actual results
  useEffect(() => {
    const scores = results.map((result: Result) => [
      scoreGen(
        // User's Predication
        result.home_predication,
        result.away_predication,
        result.home_win,
        result.away_win,
        // Actual Result
        result.home_team_score,
        result.away_team_score,
        result.did_home_team_win,
        result.did_away_team_win
      ),
      result.fixture_id,
      result.gameweek
    ]);    
    setPoints(scores); // set the user's scores to the points array
  }, [results]);

  // Insert the user's points into the database
  useEffect(() => {
    const postPoints = async () => {
      try {
        await axios.post( pointsAPICall(), {
          uid: uid || '', // Provide a default value when userEmail is null
          points
        });
        await axios.post( overallAPICall(), {
          uid: uid || '' // Provide a default value when userEmail is null
        });
      } catch (error) {
        console.error(error);
      }
    };


    if (points.length > 0) {
      // make sure the array has been populated
      postPoints();
    }
  }, [points, uid]);

  // get the user's total score for the week
  useEffect(() => {
    if (uid !== null && !hasTotalCalculated) {
      getTotal(setTotal, uid);
      setHasTotalCalculated(true); // Mark as calculated
    }
  }, [points, uid, hasTotalCalculated]);

  return (
    <>
      <Header />
      <div className="overall">
        <h1 id="heading">Results </h1>

        {results.map((result: Result) => {
          const score = scoreGen(
             // User's Predication
            result.home_predication,
            result.away_predication,
            result.home_win,
            result.away_win,
             // Actual Score
            result.home_team_score,
            result.away_team_score,
            result.did_home_team_win,
            result.did_away_team_win
          );


          return (
            <div className="container">
              <div className="results" key={result.fixture_id}>
              
              
                <div className="actual">
                  <div className="result-box">  
                    <img className='logo' src={result.home_team_logo_url} alt="Home Team Logo"/>
                    {result.home_team_name}
                  </div>
                  <div className="scorebox-container">
                  
                    <span className="actual-goals">{result.home_team_score}</span>
                    <span className="actual-goals"> {result.away_team_score}</span>
                  </div>
                  <div className="result-box"> 
                    <img className='logo' src={result.away_team_logo_url} alt="Away Team Logo"/> 
                    {result.away_team_name} 
                  </div>
                </div>

                Predication:
                <div className="predications">
                  <div className="result-box"> {result.home_team_name} </div>
                  <div className="scorebox-container">
                    <span className="predict-goals">{result.home_predication} </span>
                    <span className="predict-goals">{result.away_predication} </span>
                  </div>
                  <div className="result-box">{result.away_team_name}</div>
                </div>
                Points:
                <div className={color}>{score}</div>
              </div>
              <div className="space"></div>
            </div>
          );
        })}
        <div className="total">
          Gameweek Total
          <div className="total-points"> {total} </div>
        </div>
      </div>
    </>
  );
}
