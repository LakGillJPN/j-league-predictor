import React from 'react'
import Navbar from './Navbar'
import './Header.css'

export default function Header() {
  const styles = {
    background: 'linear-gradient(red, lightcoral)'
  };

  return (
    <>
      <div className="header" style={styles}>J-League Predictor</div>
      <Navbar></Navbar>
  
    </>
  )


    
}
