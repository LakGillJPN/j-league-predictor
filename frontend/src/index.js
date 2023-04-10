import React from 'react';
import ReactDOM from 'react-dom/client'
import './index.css';
import App from './App';
import Login from './pages/Login';
import Play from './pages/Play';
import Results from './pages/Results';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/play" element ={<Play/>} />
      <Route path="/results" element={<Results/>} />
    </Routes>
  </Router>,
  document.getElementById('root')
);

/* 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
*/


/*
 <Router>
    <Routes>
      <Route path="/" element={<App/>} />
      <Route path="/Login" element={<Login/>} />
    </Routes>
  </Router>

*/