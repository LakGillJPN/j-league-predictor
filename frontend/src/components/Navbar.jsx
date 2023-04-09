import React from 'react'
import './Navbar.css'

export default function Navbar(props) {
 
  return (
    <div className="navbar">
      <div class="topnav">
      <a class="active" href="#home">Home </a>
      <a href="#news">My Predications</a>
      <a href="#contact">Make Predications</a>
      <a href="#about">Login</a>
      </div> 
    </div>
  );
}