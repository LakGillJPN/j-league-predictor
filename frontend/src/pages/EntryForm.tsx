import React, { ChangeEvent, useState } from 'react'
import Header from '../components/Header.tsx'
import './EntryForm.css'

export default function EntryForm() {
  const [username, setUsername] = useState<string>("");

  
  const handleUsername = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setUsername(value);
  };

  const handleFormSubmit = () => {

  }

  // DOB, Location, Favourite Team
  
  return (

    <div className="welcome-main"> 
    <Header/>
    <h1 className="title">Welcome!</h1>
    <form method="post" onSubmit={handleFormSubmit}>
    <p className="subheading">Username</p>
    <div>
    <input type="text" id="Username" name="Username" minLength={5}maxLength={15} onChange={handleUsername}/> 
      <p className= 'usernameLength'>Username should be between 5-15 characters</p>
    </div>


    <div>
      <p className="subheading">Date of Birth</p>
      <input className="dob" type="date" /> 
    </div>
    <div>
      <p className="subheading">Location 🌐</p>
      <input type="form" />
    </div>

    <div>
      <p className="subheading">Favourite Team 👕</p>
      <input type="form" />
    </div>

    <button type="submit">Submit </button>

    


    </form>



    </div>
  )
}
