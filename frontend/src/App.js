import React from 'react';
import './App.css';
import Home from './pages/Home'
import Login from './pages/Login';
import Play from './pages/Play';
import SignUp from './pages/SignUp';
import Results from './pages/Results';
import {Routes, Route} from "react-router-dom";
import { AuthContextProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/play" element ={<ProtectedRoute>  <Play/> </ProtectedRoute>} />
          <Route path="/results" element={<ProtectedRoute> <Results/> </ProtectedRoute>} />
        </Routes>
        </AuthContextProvider>
    </div>
  );
}

export default App;
