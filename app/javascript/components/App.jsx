import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './landing/LandingPage';
import Signin from './auth/Signin';
import Signup from './auth/Signup';
import SignupAsContractor from './auth/SignupAsContractor';
import SignupAsMusician from './auth/SignupAsMusician';
import CreateJob from './contractor/CreateJob';
import FindWork from './musician/FindWork';

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
        <Route path="/" element={<LandingPage currentUser={currentUser} setCurrentUser={setCurrentUser} />} />
        <Route path="/signin" element={<Signin setCurrentUser={setCurrentUser} />} />
        <Route path="/signup" element={<Signup currentUser={currentUser} />} />
        <Route path="/signup-as-contractor" element={<SignupAsContractor setCurrentUser={setCurrentUser} />} />
        <Route path="/signup-as-musician" element={<SignupAsMusician setCurrentUser={setCurrentUser} />} />
        <Route path="/create-job" element={<CreateJob setCurrentUser={setCurrentUser} currentUser={currentUser} />} />
        <Route path="/find-work" element={<FindWork setCurrentUser={setCurrentUser} currentUser={currentUser} />} />
      </Routes>
    </Router>
  );
};

export default App;