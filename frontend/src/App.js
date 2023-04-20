import React from 'react';
import './App.css';
import Home from './pages/Home'
import Login from './pages/Login';
import Play from './pages/Play';
import SignUp from './pages/SignUp';
import Results from './pages/Results';
import Footer from './components/Footer'
import {Routes, Route, HashRouter} from "react-router-dom";
import { AuthContextProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
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
          <Route exact path="/results/" element={<ProtectedRoute> <Results/> </ProtectedRoute>} />
        </Routes>
        </HashRouter>
        </AuthContextProvider>
        <Footer/>
    </div>
  );
}

export default App;
