import React, { ChangeEvent, useEffect, useState } from 'react'
import Header from '../components/Header.tsx'
import './EntryForm.css'
import getAge from '../utils/get-age.ts';
import axios from 'axios';
import { usersAPICall } from '../utils/api-calls.ts';
import { useNavigate } from 'react-router-dom';
import { UserAuth,} from '../context/AuthContext.tsx';

export default function EntryForm() {
  const [username, setUsername] = useState<string>("");
  const [birthday, setBirthday] = useState("");
  const [location, setLocation] = useState<string>("");
  const [favTeam, setFavTeam] = useState<string>("");
  const navigate = useNavigate();

  const {uid} = UserAuth()

  useEffect(() => {
    console.log('BIRTHDAY', birthday)
    console.log('AGE', getAge(birthday))
  },[birthday])

  
  const handleUsername = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setUsername(value);
  }

  const handleBirthday = (event: ChangeEvent<HTMLInputElement>) => {
    const dateValue = event.target.value;
    setBirthday(dateValue);
  }; 

  const handleLocation = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setLocation(value);
  };

  const handleFavTeam = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setFavTeam(value);
  };


  const handleFormSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    if (getAge(birthday) > 18) {
      axios.post(usersAPICall(), {
          uid,
          username,
          birthday,
          location,
          favTeam
        }
    ).then(() => {
      navigate('/')
    })
    .catch(error => {
      alert("Please enter all the required fields!")
      console.log(error);
    });
  } else {
    alert("You must over 18 to register")
  }
}

  // useEffect(() => {
  //   console.log('USERNAME', username)
  //   console.log('DATE OF BIRTH', birthday)
  //   console.log('LOCATION', location)
  //   console.log('FAV TEAM', favTeam)
  // },)
  
  return (
    <div className="welcome-main"> 
      <h1 className="title">Welcome!</h1>
      <form method="post" onSubmit={handleFormSubmit}>
        <p className="subheading">Username</p>
        <div>
          <input className="input-forms" type="text" id="Username" name="Username" minLength={5}maxLength={15} onChange={handleUsername}/> 
          <p className= 'usernameLength' >Username should be between 5-15 characters</p>
        </div>

        <div>
          <p className="subheading"  >Date of Birth</p>
          <input className="input-forms" onChange={handleBirthday} type="date" /> 
        </div>

        <div>
          <p className="subheading" >Location 🌐</p>
          <input className="input-forms" type="text" onChange={handleLocation}/>
        </div>

        <div>
          <p className="subheading">Favourite Team 👕</p>
          <input className="input-forms" type="text" onChange={handleFavTeam} />
        </div>

        <div className="button-wrapper"> 
         <button className="entry-button" type="submit"> Submit </button> 
        </div>

      </form>
    </div>
  )
}

