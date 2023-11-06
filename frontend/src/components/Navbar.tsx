import React from 'react';
import { UserAuth,} from '../context/AuthContext.tsx';
import { Link } from "react-router-dom";
import './Navbar.css';
import { userInfo } from 'os';

export default function Navbar(props: {
  onClickHome: React.MouseEventHandler<HTMLAnchorElement>,
  onClickLogin: React.MouseEventHandler<HTMLAnchorElement>,
  onClickLogout: React.MouseEventHandler<HTMLAnchorElement>,
  onClickResults: React.MouseEventHandler<HTMLAnchorElement>,
  onClickPlay: React.MouseEventHandler<HTMLAnchorElement> 
}) {
  const {onClickHome, onClickLogin, onClickLogout, onClickResults, onClickPlay} = props;
  const {user, userInfo} = UserAuth();

 
  return (
    <div className="navbar">
    <div className="topnav">
      <Link to="/" onClick={onClickHome}>Home</Link>
      <Link to="/play" onClick={onClickPlay}>Play</Link>
      <Link to="/results" onClick={onClickResults}>Results</Link>
   
      {user ? (
        <Link to="/" onClick={onClickLogout} id="logout">Logout</Link>
      ) : (
        <Link to="/login" onClick={onClickLogin}>Login</Link>
      )}
    </div> 
    
    <div className="username">
      { user ? (
        <p>{userInfo.username}</p>
      ) :  ""}
    </div>
  </div>
);
}

