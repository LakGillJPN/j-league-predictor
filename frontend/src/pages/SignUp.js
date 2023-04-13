import {React, useState} from 'react';
import Header from '../components/Header';
import './SignUp.css';

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
    <Header/>
    <form className="sign-up-form">
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
