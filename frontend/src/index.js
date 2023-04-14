import React from 'react';
import ReactDOM from 'react-dom/client'
import './index.css';
import App from './App';
import {BrowserRouter, HashRouter} from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    <App />
  </HashRouter>
);



/*

/*const root = ReactDOM.createRoot(document.getElementById('root'));
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
); */