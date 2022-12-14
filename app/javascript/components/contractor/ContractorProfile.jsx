import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import NavBarContractor from '../nav/NavBarContractor'
import { Box, Container, Typography, Accordion, AccordionDetails, AccordionSummary, Link, TextField, Button, ButtonGroup } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

const ContractorProfile = ({currentUser, setCurrentUser}) => {
  
  const navigate = useNavigate()

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

  const [expanded, setExpanded] = useState(false)
  const [editFirstName, setEditFirstName] = useState('')
  const [editLastName, setEditLastName] = useState('')
  const [editUsername, setEditUsername] = useState('')
  const [editEmail, setEditEmail] = useState('')
  const [submit, setSubmit] = useState(false)

  const handleSubmitFirstName = (e) => {
    e.preventDefault()
    fetch(`/api/contractors/${currentUser.id}`, {
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
    e.preventDefault()
    fetch(`/api/contractors/${currentUser.id}`, {
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
    e.preventDefault()
    fetch(`/api/contractors/${currentUser.id}`, {
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
    e.preventDefault()
    fetch(`/api/contractors/${currentUser.id}`, {
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

  const handleDelete = (e) => {
    e.preventDefault()
    fetch(`/api/contractors/${currentUser.id}`, {
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
    <>
      <NavBarContractor setCurrentUser={setCurrentUser} />
      <Box>
        <Container sx={{ py: 6 }} maxWidth="md">
        {/* Edit first name */}
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
        {/* Edit last name */}
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
      {/* Edit username */}
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

      {/* Edit email */}
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
              label="Email"
              fullWidth
              value={editEmail}
              onChange={(e) => setEditEmail(e.target.value)}
        />
        <Button type="submit" variant='outlined' sx={{ mt: 2 }}>Submit</Button>
        </Box>
        </AccordionDetails>
      </Accordion>

      <Typography align='center' sx={{ mt: 5.25 }}>
        <ButtonGroup variant='outlined'>
          <Button disabled={currentUser.email_confirmed === true} onClick={() => navigate('/request-email-confirmation')}>Confirm Email</Button>
          <Button onClick={() => navigate('/forgot-password')}>Reset Password</Button>
        </ButtonGroup>
      </Typography>

      {/* Delete */}
      <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')} sx={{ mt: 5 }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel5bh-content"
          id="panel5bh-header"
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
    </>
  )
}


export default ContractorProfile