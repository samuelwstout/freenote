import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {Avatar, Button, CssBaseline, TextField, Link, Grid, Box, Typography, Container} from '@mui/material'

const SignupAsMusician = ({setCurrentUser, currentUser}) => {

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
const [password, setPassword] = useState('')
const [passwordConfirmation, setPasswordConfirmation] = useState('')
const [error, setError] = useState('')

const handleSubmit = (e) => {
    e.preventDefault()

    fetch('/api/signup_as_musician', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        first_name: firstName,
        last_name: lastName,
        username,
        password,
        password_confirmation: passwordConfirmation
      })
    })
      .then(res => {
        if (res.ok) {
          res.json().then(user => {
            setCurrentUser(user)
            navigate('/create-musician-profile')
          })
        } else {
          res.json().then(errors => {
            setError(errors.error)
          })
        }
      })
      setFirstName('')
      setLastName('')
      setUsername('')
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
        Sign up to find work
      </Typography>
      {error && 
        <Typography variant="subtitle2" color="error.dark" sx={{ mt: 1.75 }}>
        {error}
      </Typography>
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
            <Link onClick={() => navigate('/signin')} variant="body2">
              {"Already have an account? Sign in"}
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Box>
  </Container>
  )
}

export default SignupAsMusician

{/* <div>
<form onSubmit={handleSubmit}>
  <h1>Sign up to find work</h1>
  <p>
    <label htmlFor='firstname'>First Name </label>
    <input type="text" name="first_name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
  </p>
  <p>
    <label htmlFor='lastname'>Last Name </label>
    <input type="text" name="last_name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
  </p>
  <p>
    <label htmlFor='username'>Username </label>
    <input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
  </p>
  <p>
    <label htmlFor='password'>Password </label>
    <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
  </p>
  <p>
  <label htmlFor='password_confirmation'>Password Confirmation </label>
  <input type="password" name="password_confirmation" value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)} />
  </p>
  <input type='submit' />
</form>
<h4>Already have an account? <button><Link to="/signin">Sign in</Link></button></h4>
</div> */}