import React from 'react';
import {useState} from 'react';
import Header from '../components/Header.tsx';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext.tsx';


export default function Login() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const { loginUser } = UserAuth();
  const navigate = useNavigate();

  const handleLogin = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    try {
      await loginUser(email, password)
      navigate('/')
    } catch(err) {
      alert("Incorrect email or password. Please try again.")
      console.error(err);
    }
    
  }

  return (
    <>
    <Header/> 
    <form onSubmit={handleLogin}>
     
      <label data-testid="email">Email:</label>
      <input data-testid="email-input"type="email" id="email" value={email} onChange={(event) => setEmail(event.target.value)} />

      <label htmlFor="password">Password:</label>
      <input data-testid="password-input" type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
     
      <button data-testid="login-button" type="submit">Login</button>
    </form>

     <p>Don't have an account? <Link to='/signup'>Sign up here!</Link></p>
    </>
  )
}