import React, { useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import NavBarContractor from '../nav/NavBarContractor'
import { Box, Container, Grid, TextField, Typography, Button } from '@mui/material'

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
      <Box>
        <Container sx={{ mt: 3 }} maxWidth="md">
        <Grid item xs={12} sm={6} md={4}>
      <Typography variant="h4" component="h1" align="center">Create Job Post</Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ m: 3, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1}}>
            <TextField fullWidth placeholder='Title' value={title} onChange={(e) => setTitle(e.target.value)} />
            <TextField fullWidth placeholder='Description' value={description} onChange={(e) => setDescription(e.target.value)} />
            <TextField fullWidth placeholder='Date(s)' type='date' value={date} onChange={(e) => setDate(e.target.value)} />
            <TextField fullWidth placeholder='Location' value={location} onChange={(e) => setLocation(e.target.value)} />
            <TextField fullWidth placeholder='Budget' value={budget} onChange={(e) => setBudget(e.target.value)} />
            <Button variant='outlined' type='submit' sx={{ mt: 2 }}>Submit</Button>
        </Box>
        </Grid>
        </Container>
      </Box>
    </div>
  )
}

export default CreateJob