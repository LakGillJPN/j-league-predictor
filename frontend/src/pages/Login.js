import React from 'react'
import Header from '../components/Header'
import './Login.css'

export default function login() {
  return (
    <>
    <Header/>
    <form>
     
      <label>Email:</label>
      <input type="email"/>
   
      <label>Password:</label>
      <input type="password" />
     
      <button type="submit">Login</button>
    </form>
    </>
  )
}

/*
export default function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    
    const user = await db('users').where({ email }).first();
    //const match = await bcrypt.compare(password, user.password);
    
    if (match) {
      // Login successful
    } else {
      // Login failed
    }
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <label>Email:</label>
      <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
      
      <label>Password:</label>
      <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
      
      <button type="submit">Login</button>
    </form>
  );
 
}
*/