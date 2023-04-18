import {React, useState, useEffect} from 'react';
import Header from '../components/Header';
import getResults from '../utils/get-results';
import { UserAuth } from '../context/AuthContext';

export default function Results() {

  let {userEmail} = UserAuth();
  let [results, setResults] = useState([]);

  useEffect(() => {
    console.log(results)
  },[results]);

  getResults(setResults,userEmail);

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
