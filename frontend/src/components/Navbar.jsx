import {React} from 'react';
import { UserAuth,} from '../context/AuthContext';
import { Link } from "react-router-dom";
import './Navbar.css';

export default function Navbar(props) {
  const {onClickHome, onClickLogin, onClickLogout, onClickResults, onClickPlay} = props;
  const {user, userEmail} = UserAuth();

 
  return (
    <div className="navbar">
    <div className="topnav">
      <Link to="/" onClick={onClickHome}>Home</Link>
      <Link to="/play" onClick={onClickPlay}>Play</Link>
      <Link to="/results" onClick={onClickResults}>Results</Link>
   
      {user ? (
        <Link to="/" onClick={onClickLogout}>Logout</Link>
      ) : (
        <Link to="/login" onClick={onClickLogin}>Login</Link>
      )}
    </div> 
    
    <div className="username">
      { user ? (
        <p>{userEmail}</p>
      ) :  ""}
    </div>
  </div>
);
}

