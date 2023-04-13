import React from 'react';
import './App.css';
import Home from './pages/Home'
import Login from './pages/Login';
import Play from './pages/Play';
import SignUp from './pages/SignUp';
import Results from './pages/Results';
import {Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/play" element ={<Play/>} />
          <Route path="/results" element={<Results/>} />

        </Routes>
    </div>
  );
}

export default App;
