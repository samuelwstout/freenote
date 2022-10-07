import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './landing/LandingPage';
import Signup from './auth/Signup';
import SignupAsContractor from './auth/SignupAsContractor';

const App = () => {

const [currentUser, setCurrentUser] = useState(null)

useEffect(() => {
  fetch('/api/me').then((r) => {
    if (r.ok) {
      r.json().then((data) => setCurrentUser(data))
    } else {
      console.log('No active session')
    }
  })
}, [])

console.log(currentUser)

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage currentUser={currentUser} />} />
        <Route path="/signup" element={<Signup currentUser={currentUser} />} />
        <Route path="/signup-as-contractor" element={<SignupAsContractor setCurrentUser={setCurrentUser} />} />
      </Routes>
    </Router>
  );
};

export default App;