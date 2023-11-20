import React, { ChangeEvent, useEffect, useState } from 'react'
import Header from '../components/Header.tsx'
import './EntryForm.css'
import getAge from '../utils/get-age.ts';
import axios from 'axios';
import { usersAPICall } from '../utils/api-calls.ts';
import { useNavigate } from 'react-router-dom';
import { UserAuth,} from '../context/AuthContext.tsx';

export default function Profile() {

  const {uid, userInfo} = UserAuth();

  const [profile, setProfile] = useState<any>();
  const [birthday, setBirthday] = useState("");
  const [location, setLocation] = useState<string>("");
  const [favTeam, setFavTeam] = useState<string>("");
  const navigate = useNavigate();

  
  useEffect(() => {
    setProfile(userInfo)
  },[userInfo])



  // const handleUsername = (event: ChangeEvent<HTMLInputElement>) => {
  //   const { value } = event.target;
  //   setUsername(value);
  // }

  const handleBirthday = (event: ChangeEvent<HTMLInputElement>) => {
    const dateValue = event.target.value;
    
    if (getAge(dateValue) < 18) {
      
    } else {
      setBirthday(dateValue)
    }
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

    if (getAge(birthday) < 18) {
      alert("You must be 18 or older to submit this form.");
      return;
    }

    axios.post(usersAPICall(), {
        uid,
        username: profile.username,
        birthday,
        location,
        favTeam
      }
    )
    .then(response => {
      navigate('/')
    })
    .catch(error => {
      alert("Please enter all the required fields!")
      console.log(error);
    });
  }

  // useEffect(() => {
  //   console.log('USERNAME', username)
  //   console.log('DATE OF BIRTH', birthday)
  //   console.log('LOCATION', location)
  //   console.log('FAV TEAM', favTeam)
  // },)
  
  return (
    <>
    <Header/>
    <div className="welcome-main">
      <h1 className="title">Profile</h1>
      <form method="post" onSubmit={handleFormSubmit}>
        <h2 className="subheading">Username</h2>
        <div>
        <p>{profile && profile.username}</p>
          <p className='usernameLength'>Username should be between 5-15 characters</p>
        </div>

        <div>
          <p className="subheading">Date of Birth</p>
          <input className="input-forms" onChange={handleBirthday} type="date" />
        </div>

        <div>
          <p className="subheading">Location 🌐</p>
          <input className="input-forms" type="text" onChange={handleLocation} />
        </div>

        <div>
          <p className="subheading">Favourite Team 👕</p>
          <input className="input-forms" type="text" onChange={handleFavTeam} />
        </div>

        <div className="button-wrapper">
          <button className="entry-button" type="submit"> Submit </button>
        </div>

      </form>
    </div></>
  )
}

