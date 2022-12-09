import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {Avatar, Button, CssBaseline, TextField, Link, Grid, Box, Typography, Container} from '@mui/material'

const Signin = ({setCurrentUser, currentUser}) => {

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

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    fetch('/api/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({username, password})
    })
      .then(res => {
        if (res.ok) {
          res.json().then(user => {
            if (user.type === 'Contractor') {
              navigate('/create-job')
            }
            if (user.type === 'Musician') {
              navigate('/find-work')
            }
            setCurrentUser(user)
          })
        } else {
          res.json().then(errors => {
            setError(errors.error)
          })
        }
      })
  }

  return (
        <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          {error && 
            <Typography variant="subtitle1" color="error.dark" sx={{ mt: 1.5 }}>
            {error}
          </Typography>
          }
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
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
                <Link onClick={() => navigate('/signup')} variant="body2" sx={{ cursor: 'pointer' }}>
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            <Grid container justifyContent="center">
              <Grid item>
                <Link onClick={() => navigate('/forgot-password')} variant="body2" sx={{ cursor: 'pointer' }}>
                  {"Forgot password?"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
  )
}

export default Signin