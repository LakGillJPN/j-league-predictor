import {React, useState} from 'react';
import Header from '../components/Header';
import axios from 'axios';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext'


export default function Login() {
  const [email, setEmail] = useState([]);
  const [password, setPassword] = useState([]);

  const { loginUser } = UserAuth();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await loginUser(email, password)
      navigate('/')
    } catch(err) {
      console.error(err);
    }
    
  }

  return (
    <>
    <Header/> 
    <form onSubmit={handleLogin}>
     
      <label>Email:</label>
      <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
   
      <label>Password:</label>
      <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
     
      <button type="submit">Login</button>
    </form>

     <p>Don't have an account? <Link to='/signup'>Sign up here!</Link></p>
    </>
  )
}