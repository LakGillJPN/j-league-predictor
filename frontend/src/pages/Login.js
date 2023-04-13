import {React, useState, useEffect} from 'react';
import Header from '../components/Header';
import './Login.css';



export default function Login() {
  const [data, setData] = useState([]);
  const [email, setEmail] = useState([]);
  const [password, setPassword] = useState([]);


  useEffect(() => {
    //console.log('email', email)
  },[email])

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    if (data.contains(email) && data.contains(password)) {
      alert("The form was submitted");
    } else {
      alert("The form was NOT submitted");
    }
  };





  return (
    <>
    <Header/>
    <form onSubmit={handleSubmit}>
     
      <label>Email:</label>
      <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
   
      <label>Password:</label>
      <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
     
      <button type="submit">Login</button>
    </form>
    </>
  )
}