import React from 'react';
import Header from '../components/Header.tsx';
import './Login.css';
import { Link } from 'react-router-dom';
import LoginForm from '../components/LoginForm.tsx';


export default function Login() {
  return (
    <>
    <Header/> 
    <LoginForm/>
   
     <p>Don't have an account? <Link to='/signup'>Sign up here!</Link></p>
    </>
  )
}