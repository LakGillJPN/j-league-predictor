import React from 'react';
import Navbar from './Navbar';
import { useNavigate } from "react-router-dom";
import './Header.css';

export default function Header() {

  const navigate = useNavigate();

  return (
    <>
      <div className="header" >J-League Predictor</div>
      <Navbar 
       onClickHome={() => navigate("/")}
       onClickLogin={() => navigate("/login")}
       onClickPlay={() => navigate("/play")}
       onClickResults={() => navigate("/results")}
      /> 
  
    </>
  )


    
}
