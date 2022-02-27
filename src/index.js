import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css'

// page imports
import { Prompts } from './pages/prompts/Prompts'
import { Challenges } from './pages/challenges/Challenges'
import { LeaderBoard } from './pages/leadershipboard/leadershipboard';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/prompts' element={<Prompts />} />
        <Route path='/challenges' element={<Challenges />} />
        <Route path='/leaderboard' element={<LeaderBoard />} />
      </Routes>
    </Router>
    {/* <App /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
