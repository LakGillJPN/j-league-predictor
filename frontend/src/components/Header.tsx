import React from 'react';
import Navbar from './Navbar.tsx';
import { useNavigate } from "react-router-dom";
import { UserAuth } from '../context/AuthContext';
import './Header.css';


export default function Header() {
  const navigate = useNavigate();
  const {logOut} = UserAuth();

  const handleLogOut = async() => {
    try {
      await logOut();
      navigate('/')
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <div className="header" >J-League Predictor</div>
      <Navbar 
        onClickHome={() => navigate("/")}
        onClickLogin={() => navigate("/login")}
        onClickPlay={() =>  navigate("/play")}
        onClickResults={() => navigate("/results")}
        onClickLogout={handleLogOut}
      /> 
    </>
  ); 
}
