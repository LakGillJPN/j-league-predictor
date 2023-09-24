import React from 'react';
import './App.css';
import Home from './pages/Home.tsx'
import Login from './pages/Login.tsx';
import Play from './pages/Play.tsx';
import SignUp from './pages/SignUp.tsx';
import Results from './pages/Results.tsx';
import Submitted from './pages/Submitted.tsx';
import Footer from './components/Footer.tsx'
import PlayTest from './pages/Play-Test.tsx';
import {Routes, Route, HashRouter} from "react-router-dom";
import { AuthContextProvider } from './context/AuthContext.tsx';
import ProtectedRoute from './context/ProtectedRoute.tsx';
import './App.css'

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <HashRouter> 
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login/" element={<Login/>} />
          <Route path="/signup/" element={<SignUp/>} />
          <Route path="/play/" element ={<ProtectedRoute> <Play/> </ProtectedRoute>} />
          <Route path="/submitted/" element={<ProtectedRoute> <Submitted/> </ProtectedRoute>} />
          <Route path="/results/" element={<ProtectedRoute> <Results/> </ProtectedRoute>} />
          <Route path="/play-test/" element ={<ProtectedRoute> <PlayTest/> </ProtectedRoute>} />
        </Routes>
        </HashRouter>
        </AuthContextProvider>
        <Footer/>
    </div>
  );
}

export default App;
