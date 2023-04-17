import React from 'react';
import Header from '../components/Header';

// Correct Home Score - 20pts - fixtures.home === predications.home
// Correct Away Score - 20pts - fixtures.away === predications.away
// Correct Outcome - 50PTs - 
// Correct Outcome + Correct Home Score - 70pts
// Correct Outcome + Correct Away Score - 70pts
// Correct Outcome + Correct Home Score + Correct Away Score = 100 points

export default function Results() {
  return (
    <>
    <Header/>
    <h1>Results</h1>
    <p>Correct Home or Away Score - 20PTs</p>
    <p>Correct Winner + Correct Home or Away Score - 70pts</p>
    <p>Correct Winner + Correct Score - 100pts</p>
    </>
  )
}
