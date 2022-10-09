import React, { useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import NavBarContractor from '../nav/NavBarContractor'

const CreateJob = ({setCurrentUser, currentUser, setJobs, jobs}) => {

const navigate = useNavigate();

const [title, setTitle] = useState('')
const [description, setDescription] = useState('')
const [date, setDate] = useState('')
const [location, setLocation] = useState('')
const [budget, setBudget] = useState('')

useEffect(() => {
  if (currentUser) {
    if (currentUser.type === 'Musician') {
      navigate('/find-work')
    }
    if (Object.keys(currentUser).length === 0) {
      navigate('/')
    }
  } 
}, [currentUser])

const handleSubmit = (e) => {
  e.preventDefault()
  
  fetch('/api/jobs', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      title,
      description,
      date,
      location,
      budget,
      contractor_id: currentUser.id
    })
  })
  .then((r) => {
    if (r.ok) {
      r.json().then(data => {
        const newJobs = [...jobs, data]
        setJobs(newJobs)
      })
    } else {
      r.json().then(error => {
        console.log(error)
      })
    }
  })

  setTitle('')
  setDescription('')
  setDate('')
  setLocation('')
  setBudget('')
}

  return (
    <div>
      <NavBarContractor setCurrentUser={setCurrentUser} />
      <h1>Create Job Post</h1>
        <form onSubmit={handleSubmit}>
            <input placeholder='Title' value={title} onChange={(e) => setTitle(e.target.value)} />
            <input placeholder='Description' value={description} onChange={(e) => setDescription(e.target.value)} />
            <input placeholder='Date(s)' type='date' value={date} onChange={(e) => setDate(e.target.value)} />
            <input placeholder='Location' value={location} onChange={(e) => setLocation(e.target.value)} />
            <input placeholder='Budget' value={budget} onChange={(e) => setBudget(e.target.value)} />
            <input type='submit' />
        </form>
    </div>
  )
}

export default CreateJob