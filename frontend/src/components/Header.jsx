import React from 'react'
import Navbar from './Navbar'
import { useNavigate } from "react-router-dom";
import './Header.css'


export default function Header() {
  const styles = {
    background: 'linear-gradient(red, lightcoral)'
  };

  const navigate = useNavigate();

  return (
    <>
      <div className="header" style={styles}>J-League Predictor</div>
      <Navbar 
       onClickHome={() => navigate("/")}
       onClickLogin={() => navigate("/login")}
      /> 
  
    </>
  )


    
}
