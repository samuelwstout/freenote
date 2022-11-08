import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import NavBarMusician from '../nav/NavBarMusician'
import { Box, Container, Typography, Accordion, AccordionDetails, AccordionSummary, Link, TextField, Button } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

const MusicianProfile = ({setCurrentUser, currentUser, musicianProfile, setMusicianProfile }) => {
  
  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser) {
      if (currentUser.type === 'Contractor') {
        navigate('/create-job')
      }
      if (Object.keys(currentUser).length === 0) {
        navigate('/')
      }
    }
  }, [currentUser])

  const [expanded, setExpanded] = useState(false)
  const [editFirstName, setEditFirstName] = useState('')
  const [editLastName, setEditLastName] = useState('')
  const [editUsername, setEditUsername] = useState('')
  const [editEmail, setEditEmail] = useState('')
  const [editLocation, setEditLocation] = useState('')
  const [editInstrument, setEditInstrument] = useState('')
  const [editBio, setEditBio] = useState('')
  const [editMedia, setEditMedia] = useState('')
  const [submit, setSubmit] = useState(false)

  const handleSubmitFirstName = (e) => {
    e.preventDefault();
    fetch(`/api/musicians/${currentUser.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        first_name: editFirstName
      })
    })
    .then(r => r.json())
    .then(data => {
      currentUser.first_name = data.first_name
      setCurrentUser(currentUser)
      setSubmit(true)
      setTimeout(() => {
        setSubmit(false)
      }, 1)
    })
    setEditFirstName('')
  }

  const handleSubmitLastName = (e) => {
    e.preventDefault();
    fetch(`/api/musicians/${currentUser.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        last_name: editLastName
      })
    })
    .then(r => r.json())
    .then(data => {
      currentUser.last_name = data.last_name
      setCurrentUser(currentUser)
      setSubmit(true)
      setTimeout(() => {
        setSubmit(false)
      }, 1)
    })
    setEditLastName('')
  }

  const handleSubmitUsername = (e) => {
    e.preventDefault();
    fetch(`/api/musicians/${currentUser.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: editUsername
      })
    })
    .then(r => r.json())
    .then(data => {
      currentUser.username = data.username
      setCurrentUser(currentUser)
      setSubmit(true)
      setTimeout(() => {
        setSubmit(false)
      }, 1)
    })
    setEditUsername('')
  }

  const handleSubmitEmail = (e) => {
    e.preventDefault();
    fetch(`/api/musicians/${currentUser.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: editEmail
      })
    })
    .then(r => r.json())
    .then(data => {
      currentUser.email = data.email
      setCurrentUser(currentUser)
      setSubmit(true)
      setTimeout(() => {
        setSubmit(false)
      }, 1)
    })
    setEditEmail('')
  }

  const handleSubmitLocation = (e) => {
    e.preventDefault();
    fetch(`/api/musician_profiles/${musicianProfile.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        location: editLocation
      })
    })
    .then(r => r.json())
    .then(data => {
      musicianProfile.location = data.location
      setMusicianProfile(musicianProfile)
      setSubmit(true)
      setTimeout(() => {
        setSubmit(false)
      }, 1)
    })
    setEditLocation('')
  }

  const handleSubmitInstrument = (e) => {
    e.preventDefault();
    fetch(`/api/musician_profiles/${musicianProfile.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        instrument: editInstrument
      })
    })
    .then(r => r.json())
    .then(data => {
      musicianProfile.instrument = data.instrument
      setMusicianProfile(musicianProfile)
      setSubmit(true)
      setTimeout(() => {
        setSubmit(false)
      }, 1)
    })
    setEditInstrument('')
  }

  const handleSubmitBio = (e) => {
    e.preventDefault();
    fetch(`/api/musician_profiles/${musicianProfile.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        bio: editBio
      })
    })
    .then(r => r.json())
    .then(data => {
      musicianProfile.bio = data.bio
      setMusicianProfile(musicianProfile)
      setSubmit(true)
      setTimeout(() => {
        setSubmit(false)
      }, 1)
    })
    setEditBio('')
  }

  const handleSubmitMedia = (e) => {
    e.preventDefault();
    fetch(`/api/musician_profiles/${musicianProfile.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        media_url: editMedia
      })
    })
    .then(r => r.json())
    .then(data => {
      musicianProfile.media_url = data.media_url
      setMusicianProfile(musicianProfile)
      setSubmit(true)
      setTimeout(() => {
        setSubmit(false)
      }, 1)
    })
    setEditMedia('')
  }


  const handleDelete = (e) => {
    e.preventDefault();
    fetch(`/api/musicians/${currentUser.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(r => r.json())
    .then(data => {
      data
      window.location.reload()
    })
  }

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false)
  }

  return (
    <div>
      <NavBarMusician setCurrentUser={setCurrentUser} />
        <Box> 
        <Container sx={{ py: 6 }} maxWidth="md">

        {Object.keys(currentUser).length !== 0 &&

        <div>

        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            First name
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>{currentUser.first_name}</Typography>
          </AccordionSummary>
        <AccordionDetails align='center'>
        <Box component="form" onSubmit={handleSubmitFirstName} noValidate>
        <TextField
              id="first_name"
              label="Edit first name"
              fullWidth
              value={editFirstName}
              onChange={(e) => setEditFirstName(e.target.value)}
        />
        <Button type="submit" variant='outlined' sx={{ mt: 2 }}>Submit</Button>
        </Box>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>Last name</Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            {currentUser.last_name}
          </Typography>
        </AccordionSummary>
        <AccordionDetails align='center'>
        <Box component="form" onSubmit={handleSubmitLastName} noValidate>
        <TextField
              id="last_name"
              label="Edit last name"
              fullWidth
              value={editLastName}
              onChange={(e) => setEditLastName(e.target.value)}
        />
        <Button type="submit" variant='outlined' sx={{ mt: 2 }}>Submit</Button>
        </Box>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            Username
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            {currentUser.username}
          </Typography>
        </AccordionSummary>
        <AccordionDetails align='center'>
        <Box component="form" onSubmit={handleSubmitUsername} noValidate>
        <TextField
              id="username"
              label="Edit username"
              fullWidth
              value={editUsername}
              onChange={(e) => setEditUsername(e.target.value)}
        />
        <Button type="submit" variant='outlined' sx={{ mt: 2 }}>Submit</Button>
        </Box>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            Email
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            {currentUser.email}
          </Typography>
        </AccordionSummary>
        <AccordionDetails align='center'>
        <Box component="form" onSubmit={handleSubmitEmail} noValidate>
        <TextField
              id="email"
              label="Edit email"
              fullWidth
              value={editEmail}
              onChange={(e) => setEditEmail(e.target.value)}
        />
        <Button type="submit" variant='outlined' sx={{ mt: 2 }}>Submit</Button>
        </Box>
        </AccordionDetails>
      </Accordion>

      </div>
      }

      {musicianProfile &&
      <div>
      <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel5bh-content"
          id="panel5bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>Location</Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            {musicianProfile.location}
          </Typography>
        </AccordionSummary>
        <AccordionDetails align='center'>
        <Box component="form" onSubmit={handleSubmitLocation} noValidate>
        <TextField
              id="location"
              label="Edit location"
              fullWidth
              value={editLocation}
              onChange={(e) => setEditLocation(e.target.value)}
        />
        <Button type='submit' variant='outlined' sx={{ mt: 2 }}>Submit</Button>
        </Box>
        </AccordionDetails>

      </Accordion>
      <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel6bh-content"
          id="panel6bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>Instrument</Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            {musicianProfile.instrument}
          </Typography>
        </AccordionSummary>
        <AccordionDetails align="center">
        <Box component="form" onSubmit={handleSubmitInstrument} noValidate>
        <TextField
              id="instrument"
              label="Edit instrument"
              fullWidth
              value={editInstrument}
              onChange={(e) => setEditInstrument(e.target.value)}
        />
        <Button type='submit' variant='outlined' sx={{ mt: 2 }}>Submit</Button>
        </Box>
        </AccordionDetails>

      </Accordion>
      <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel7bh-content"
          id="panel7bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>Bio</Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            {musicianProfile.bio}
          </Typography>
        </AccordionSummary>
        <AccordionDetails align='center'>
        <Box component="form" onSubmit={handleSubmitBio} noValidate>
        <TextField
              id="bio"
              label="Edit bio"
              fullWidth
              value={editBio}
              onChange={(e) => setEditBio(e.target.value)}
        />
        <Button type='submit' variant='outlined' sx={{ mt: 2 }}>Submit</Button>
        </Box>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel8bh-content"
          id="panel8bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>Media</Typography>
          <Link href={musicianProfile.media_url} target="_blank" sx={{ color: 'text.secondary'}}>
            {musicianProfile.media_url &&
            musicianProfile.media_url.slice(0, 20)
            }...
          </Link>
        </AccordionSummary>
        <AccordionDetails align='center'>
        <Box component="form" onSubmit={handleSubmitMedia} noValidate>
        <TextField
              id="media"
              label="Edit media"
              fullWidth
              value={editMedia}
              onChange={(e) => setEditMedia(e.target.value)}
        />
        <Button type='submit' variant='outlined' sx={{ mt: 2 }}>Submit</Button>
        </Box>
        </AccordionDetails>
      </Accordion>
      </div>
      }

       {/* Reset password */}
     <Typography align='center' sx={{ mt: 5 }}>
      <Button variant='outlined' onClick={() => navigate('/forgot-password')}>Reset Password</Button>
     </Typography>

      <Accordion expanded={expanded === 'panel9'} onChange={handleChange('panel9')} sx={{ mt: 5 }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel9bh-content"
          id="panel9bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0, color: 'red' }}>Danger</Typography>
          <Typography sx={{ color: 'red' }}>
            Delete your account?
          </Typography>
        </AccordionSummary>
        <AccordionDetails align='center'>
        <Box component="form" onSubmit={handleDelete} noValidate>
        <Button type='submit' variant='outlined' sx={{ mt: 2, color: 'red' }}>Delete your account</Button>
        </Box>
        </AccordionDetails>
      </Accordion>
     
        </Container>
        </Box>
    </div>
  )
}

export default MusicianProfile