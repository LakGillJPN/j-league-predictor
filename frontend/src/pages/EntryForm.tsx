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
  
  return (
    <> 
    <Header/>
    <h1>Entry Form</h1>
    <form method="post" onSubmit={handleFormSubmit}>
    <h2>Username</h2>
    <div>
    <input type="text" id="Username" name="Username" minLength={5}maxLength={15} onChange={handleUsername}/> 
      <p className= 'usernameLength'>Username should be between 5-15 characters</p>
    </div>


    </form>



    </>
  )
}
