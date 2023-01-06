import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {Avatar, Button, CssBaseline, TextField, Link, Grid, Box, Typography, Container} from '@mui/material'

const SignupAsContractor = ({ setCurrentUser, currentUser }) => {

 const navigate = useNavigate()

 useEffect(() => {
  if (currentUser) {
    if (currentUser.type === 'Musician') {
      navigate('/find-work')
    }
    if (currentUser.type === 'Contractor') {
      navigate('/create-job')
    }
  }
  }, [currentUser])

const [firstName, setFirstName] = useState('')
const [lastName, setLastName] = useState('')
const [username, setUsername] = useState('')
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [passwordConfirmation, setPasswordConfirmation] = useState('')
const [errorMessages, setErrorMessages] = useState([])

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()
    fetch('/api/signup_as_contractor', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          first_name: firstName,
          last_name: lastName,
          username,
          email,
          password,
          password_confirmation: passwordConfirmation
        })
      })
        .then(res => {
          if (res.ok) {
            res.json().then(user => {
                setCurrentUser(user)
                navigate('/create-job')
            })
          } else {
            res.json().then(errors => {
              setErrorMessages(errors.error.map((message, index) => {
                return (
                  <Typography key={index} variant="subtitle2" color="error.dark" sx={{ mt: 1.75 }}>
                    {message}
                  </Typography>
                )
              }))
            })
          }
        })

    setFirstName('')
    setLastName('')
    setUsername('')
    setEmail('')
    setPassword('')
    setPasswordConfirmation('')
  }

  return (
    <Container component="main" maxWidth="xs">
    <CssBaseline />
    <Box
      sx={{
        marginTop: 4.5,
        marginBottom: 5,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign up to hire talent
      </Typography>

      {errorMessages && 
        errorMessages
      }
  
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
      <TextField
          margin="normal"
          required
          fullWidth
          id="first_name"
          label="First name"
          name="first_name"
          autoComplete="first_name"
          autoFocus
          onChange={(e) => setFirstName(e.target.value)}
        />
      <TextField
          margin="normal"
          required
          fullWidth
          id="last_name"
          label="Last name"
          name="last_name"
          autoComplete="last_name"
          autoFocus
          onChange={(e) => setLastName(e.target.value)}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="username"
          label="Username"
          name="username"
          autoComplete="username"
          autoFocus
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email"
          name="email"
          autoComplete="email"
          autoFocus
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password_confirmation"
          label="Password Confirmation"
          type="password"
          id="password_confirmation"
          autoComplete="password-confirmation"
          onChange={(e) => setPasswordConfirmation(e.target.value)}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Sign In
        </Button>
        <Grid container justifyContent="center">
          <Grid item>
            <Link onClick={() => navigate('/signin')} variant="body2" sx={{ cursor: 'pointer' }}>
              {"Already have an account? Sign in"}
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Box>
  </Container>
  )
}

export default SignupAsContractor