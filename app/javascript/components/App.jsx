import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './landing/LandingPage'
import Signin from './auth/Signin'
import Signup from './auth/Signup'
import SignupAsContractor from './auth/SignupAsContractor'
import SignupAsMusician from './auth/SignupAsMusician'
import CreateJob from './contractor/CreateJob'
import MyJobs from './contractor/MyJobs'
import ContractorProfile from './contractor/ContractorProfile'
import FindWork from './musician/FindWork'
import MyApplications from './musician/MyApplications'
import MusicianProfile from './musician/MusicianProfile'

const App = () => {
// This grabs the user data from a successful /api/me request
const [currentUser, setCurrentUser] = useState({})

useEffect(() => {
  fetch('/api/me').then((r) => {
    if (r.ok) {
      r.json().then((data) => setCurrentUser(data))
    } else {
      console.log('No active session')
    }
  })
}, [])

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage currentUser={currentUser} />} />
        <Route path="/signin" element={<Signin setCurrentUser={setCurrentUser} currentUser={currentUser} />} />
        <Route path="/signup" element={<Signup currentUser={currentUser} />} />
        <Route path="/signup-as-contractor" element={<SignupAsContractor setCurrentUser={setCurrentUser} currentUser={currentUser} />} />
        <Route path="/signup-as-musician" element={<SignupAsMusician setCurrentUser={setCurrentUser} currentUser={currentUser} />} />
        <Route path="/create-job" element={<CreateJob setCurrentUser={setCurrentUser} currentUser={currentUser} />} />
        <Route path="/my-jobs" element={<MyJobs setCurrentUser={setCurrentUser} currentUser={currentUser} />} />
        <Route path="/contractor-profile" element={<ContractorProfile setCurrentUser={setCurrentUser} currentUser={currentUser} />} />
        <Route path="/find-work" element={<FindWork setCurrentUser={setCurrentUser} currentUser={currentUser} />} />
        <Route path="/my-applications" element={<MyApplications setCurrentUser={setCurrentUser} currentUser={currentUser} />} />
        <Route path="/musician-profile" element={<MusicianProfile setCurrentUser={setCurrentUser} currentUser={currentUser} />} />
      </Routes>
    </Router>
  );
};

export default App;