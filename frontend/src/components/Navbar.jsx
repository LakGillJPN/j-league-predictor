import {React} from 'react';
import './Navbar.css';
import { UserAuth,} from '../context/AuthContext';
import { Link } from "react-router-dom";

export default function Navbar(props) {
  const {onClickHome, onClickLogin, onClickLogout, onClickResults, onClickPlay} = props;
  const {user} = UserAuth();

 
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
  </div>
);
}

