import {React, useEffect} from 'react';
import './Navbar.css';


export default function Navbar(props) {
  const {onClickHome, onClickLogin, onClickResults, onClickPlay} = props;
  
 
  return (
    <div className="navbar">
      <div class="topnav">
      <a href="" onClick={onClickHome}>Home </a>
      <a href="" onClick={onClickResults}>Results</a>
      <a href="" onClick={onClickPlay}>Play</a>
      <a href="" onClick={onClickLogin}>Login</a>
      </div> 
    </div>
  );
}

