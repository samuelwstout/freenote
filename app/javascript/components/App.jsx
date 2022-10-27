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
import AppliedJobs from './musician/AppliedJobs'
import MusicianProfile from './musician/MusicianProfile'
import Job from './musician/Job'
import ViewApplication from './musician/ViewApplication'
import SeeApplications from './contractor/SeeApplications'
import CreateMusicianProfile from './auth/CreateMusicianProfile'
import JobSettings from './contractor/JobSettings'


const App = () => {
  
const [currentUser, setCurrentUser] = useState({})
const [jobs, setJobs] = useState([])
const [jobApplications, setJobApplications] = useState([])
const [musicians, setMusicians] = useState([])

useEffect(() => {
  fetch('/api/me').then((r) => {
    if (r.ok) {
      r.json().then((data) => {
        setCurrentUser(data)
      })
    } else {
      console.log('No active session')
    }
  })
}, [])

useEffect(() => {
  fetch('/api/musicians').then((r) => {
    if (r.ok) {
      r.json().then((data) => {
        setMusicians(data)
      })
    } else {
      console.log('No musicians')
    }
  })
}, [currentUser, setMusicians])

useEffect(() => {
  fetch('/api/jobs').then((r) => {
    if (r.ok) {
      r.json().then((data) => {
        setJobs(data)
      })
    } else {
      console.log('jobs unprocessed')
    }
  })
}, [currentUser])

useEffect(() => {
    fetch('/api/job_applications').then((r) => {
      if (r.ok) {
        r.json().then((data) => {
          setJobApplications(data)
        })
      } else {
        console.log('job applications unprocessed')
      }
    })
}, [currentUser])


  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage currentUser={currentUser} />} />
        <Route path="/signin" element={<Signin setCurrentUser={setCurrentUser} currentUser={currentUser} />} />
        <Route path="/signup" element={<Signup currentUser={currentUser} />} />
        <Route path="/signup-as-contractor" element={<SignupAsContractor setCurrentUser={setCurrentUser} currentUser={currentUser} />} />
        <Route path="/signup-as-musician" element={<SignupAsMusician setCurrentUser={setCurrentUser} currentUser={currentUser} setMusicians={setMusicians} musicians={musicians} />} />
        <Route path="/create-job" element={<CreateJob setCurrentUser={setCurrentUser} currentUser={currentUser} setJobs={setJobs} jobs={jobs} />} />
        <Route path="/my-jobs" element={<MyJobs setCurrentUser={setCurrentUser} currentUser={currentUser} jobs={jobs} />} />
        <Route path="/job/:id" element={<Job jobs={jobs} currentUser={currentUser} setJobApplications={setJobApplications} jobApplications={jobApplications} setCurrentUser={setCurrentUser} />} />
        <Route path="/contractor-profile" element={<ContractorProfile setCurrentUser={setCurrentUser} currentUser={currentUser} />} />
        <Route path="/find-work" element={<FindWork setCurrentUser={setCurrentUser} currentUser={currentUser} jobs={jobs} />} />
        <Route path="/applied-jobs" element={<AppliedJobs setCurrentUser={setCurrentUser} currentUser={currentUser} jobs={jobs} jobApplications={jobApplications} />} />
        <Route path="/musician-profile" element={<MusicianProfile setCurrentUser={setCurrentUser} currentUser={currentUser} musicians={musicians} />} />
        <Route path="/view-application/job/:id" element={<ViewApplication jobs={jobs} currentUser={currentUser} jobApplications={jobApplications} setCurrentUser={setCurrentUser} />} />
        <Route path="/job/:id/applications" element={<SeeApplications jobApplications={jobApplications} jobs={jobs} musicians={musicians} setCurrentUser={setCurrentUser} />} />
        <Route path="/create-musician-profile" element={<CreateMusicianProfile currentUser={currentUser} />} />
        <Route path="/job/:id/settings" element={<JobSettings jobs={jobs} currentUser={currentUser} setCurrentUser={setCurrentUser} setJobs={setJobs} />} />
      </Routes>
    </Router>
  );
};

export default App;