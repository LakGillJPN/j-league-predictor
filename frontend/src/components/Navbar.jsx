import {React} from 'react';
import './Navbar.css';
import { UserAuth,} from '../context/AuthContext';

export default function Navbar(props) {
  const {onClickHome, onClickLogin, onClickLogout, onClickResults, onClickPlay} = props;
  const {user} = UserAuth();

 
  return (
    <div className="navbar">
      <div class="topnav">
      <a href="" onClick={onClickHome}>Home </a>
      <a href="" onClick={onClickResults}>Results</a>
      <a href="" onClick={onClickPlay}>Play</a>

      {user ? (
          <a href="" onClick={onClickLogout}>Logout</a>
        ) : (
          <a href="" onClick={onClickLogin}>Login</a>
        )}
      </div> 
    </div>
  );
}

