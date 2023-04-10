import {React, useEffect} from 'react'
import './Navbar.css'


export default function Navbar(props) {
  const {onClickHome, onClickLogin, onClickMy, onClickMake} = props;
  
 
  return (
    <div className="navbar">
      <div class="topnav">
      <a href="" onClick={onClickHome}>Home </a>
      <a href="" onClick={onClickMy}>My Predications</a>
      <a href="" onClick={onClickMake}>Make Predications</a>
      <a href="" onClick={onClickLogin}>Login</a>
      </div> 
    </div>
  );
}

