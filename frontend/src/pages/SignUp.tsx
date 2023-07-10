import React = require("react")
import {useState} from 'react';
import Header from '../components/Header.tsx';
import './SignUp.css';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext.tsx'

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {createUser} = UserAuth();
  const navigate = useNavigate();

  const handleSignUp = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    try {
      await createUser(email,password);
      navigate('/')
    } catch (err) {
      console.error(err);
    }
  }



  return (
    <>
    <Header/> 
    <form className="sign-up-form" onSubmit={handleSignUp}>
      <h1 className="header">Sign Up!</h1>
     
      <label>Email:</label>
      <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
   
      <label>Password:</label>
      <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
     
      <button type="submit">Sign Up</button>
    </form>
    </>
  )
}
