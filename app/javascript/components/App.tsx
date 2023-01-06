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
import ForgotPassword from './auth/ForgotPassword'
import ResetPassword from './auth/ResetPassword'
import ConfirmEmailToken from './auth/ConfirmEmailToken'
import CallEmailConfirmation from './auth/CallEmailConfirmation'

const App = () => {

const [currentUser, setCurrentUser] = useState({
  username: '',
  password_digest: '',
  first_name: '',
  last_name: '',
  type: '',
  email: '',
  password_reset_token: '',
  email_confirmed: false,
  confirm_token: '',
  id: 0,
})
const [jobs, setJobs] = useState({
  title: '', 
  description: '', 
  date: '', 
  location: '', 
  budget: 0, 
  contractor_id: 0
})
const [jobApplications, setJobApplications] = useState({
  cover_letter: '',
  musician_id: 0,
  job_id: 0,
})
const [musicians, setMusicians] = useState({
  username: '',
  password_digest: '',
  first_name: '',
  last_name: '',
  type: '',
  email: '',
  password_reset_token: '',
  email_confirmed: false,
  confirm_token: '',
  id: 0,
})
const [musicianProfile, setMusicianProfile] = useState({
  location: '',
  instrument: '',
  bio: '',
  media_url: '',
  musician_id: 0
})

useEffect(() => {
  fetch('/api/me').then((r) => {
    if (r.ok) {
      r.json().then((data) => {
        setCurrentUser(data)
      })
    }
  })
}, [])

useEffect(() => {
  fetch('/api/musicians').then((r) => {
    if (r.ok) {
      r.json().then((data) => {
        setMusicians(data)
        if (currentUser) {
          if (currentUser.type === 'Musician') {
            const musician = data.find(item => item.id === currentUser.id)
            setMusicianProfile(musician.musician_profile)
          }
        }
      })
    }
  })
}, [currentUser, setMusicians])

useEffect(() => {
  fetch('/api/jobs').then((r) => {
    if (r.ok) {
      r.json().then((data) => {
        setJobs(data)
      })
    }
  })
}, [currentUser, setJobs])

useEffect(() => {
    fetch('/api/job_applications').then((r) => {
      if (r.ok) {
        r.json().then((data) => {
          setJobApplications(data)
        })
      }
    })
}, [currentUser, setJobApplications])

  return (
    <Router>
      <Routes>
        {/* auth */}
        <Route path="/create-musician-profile" element={<CreateMusicianProfile currentUser={currentUser} setMusicianProfile={setMusicianProfile} />} />
        <Route path="/signin" element={<Signin setCurrentUser={setCurrentUser} currentUser={currentUser} />} />
        <Route path="/signup" element={<Signup currentUser={currentUser} />} />
        <Route path="/signup-as-contractor" element={<SignupAsContractor setCurrentUser={setCurrentUser} currentUser={currentUser} />} />
        <Route path="/signup-as-musician" element={<SignupAsMusician setCurrentUser={setCurrentUser} currentUser={currentUser} />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/confirm-email" element={<ConfirmEmailToken />} />
        <Route path="/request-email-confirmation" element={<CallEmailConfirmation />} />
        {/* contractor */}
        <Route path="/contractor-profile" element={<ContractorProfile setCurrentUser={setCurrentUser} currentUser={currentUser} />} />
        <Route path="/create-job" element={<CreateJob setCurrentUser={setCurrentUser} currentUser={currentUser} setJobs={setJobs} jobs={jobs} />} />
        <Route path="/job/:id/settings" element={<JobSettings jobs={jobs} setCurrentUser={setCurrentUser} setJobs={setJobs} />} />
        <Route path="/my-jobs" element={<MyJobs setCurrentUser={setCurrentUser} currentUser={currentUser} jobs={jobs} />} />
        <Route path="/job/:id/applications" element={<SeeApplications jobApplications={jobApplications} setJobApplications={setJobApplications} jobs={jobs} musicians={musicians} setCurrentUser={setCurrentUser} />} />
        {/* landing */}
        <Route path="/" element={<LandingPage currentUser={currentUser} />} />
        {/* musician */}
        <Route path="/applied-jobs" element={<AppliedJobs setCurrentUser={setCurrentUser} currentUser={currentUser} jobs={jobs} jobApplications={jobApplications} />} />
        <Route path="/find-work" element={<FindWork setCurrentUser={setCurrentUser} currentUser={currentUser} jobs={jobs} />} />
        <Route path="/job/:id" element={<Job jobs={jobs} currentUser={currentUser} setJobApplications={setJobApplications} jobApplications={jobApplications} setCurrentUser={setCurrentUser} />} />
        <Route path="/musician-profile" element={<MusicianProfile setCurrentUser={setCurrentUser} currentUser={currentUser} musicianProfile={musicianProfile} setMusicianProfile={setMusicianProfile} />} />
        <Route path="/view-application/job/:id" element={<ViewApplication jobs={jobs} currentUser={currentUser} jobApplications={jobApplications} setCurrentUser={setCurrentUser} />} />
      </Routes>
    </Router>
  );
};

export default App;