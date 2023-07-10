import React from 'react';
import './App.css';
import Home from './pages/Home.tsx'
import Login from './pages/Login';
import Play from './pages/Play.tsx';
import SignUp from './pages/SignUp.tsx';
import Results from './pages/Results.tsx';
import Submitted from './pages/Submitted.tsx';
import Footer from './components/Footer.tsx'
import {Routes, Route, HashRouter} from "react-router-dom";
import { AuthContextProvider } from './context/AuthContext.tsx';
import ProtectedRoute from './context/ProtectedRoute';
import './App.css'

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <HashRouter> 
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/login/" element={<Login/>} />
          <Route exact path="/signup/" element={<SignUp/>} />
          <Route exact path="/play/" element ={<ProtectedRoute>  <Play/> </ProtectedRoute>} />
          <Route exact path="/submitted/" element={<ProtectedRoute> <Submitted/> </ProtectedRoute>} />
          <Route exact path="/results/" element={<ProtectedRoute> <Results/> </ProtectedRoute>} />
        </Routes>
        </HashRouter>
        </AuthContextProvider>
        <Footer/>
    </div>
  );
}

export default App;
