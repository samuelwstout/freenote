import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {Button, CssBaseline, TextField, Box, Typography, Container} from '@mui/material'

const CallEmailConfirmation = () => {

    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('/api/call_email_confirmation', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(email)
        })
        .then(r => r.json())
        .then(data => {
          setMessage(data.alert)
        })
        setEmail('')
    }

  return (
    <>
      <Typography align='left' sx={{ mt: 2, ml: 2}}>
        <Button variant='outlined' type='submit' onClick={() => navigate('/')}>Go back</Button>
      </Typography>
      <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
          sx={{
            marginTop: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
        {message &&
        <Typography align='center' component='h1' variant='h6' color='green'>{message}</Typography>
        }
        <Typography align='center' component='h1' variant='h5'>Confirm email</Typography>
        <Box component='form' onSubmit={handleSubmit} noValidate>
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
              value={email}
            />
            <Typography align='center'>
              <Button type='submit' variant='outlined'>Submit</Button>
            </Typography>
        </Box>
        </Box>
      </Container>
    </>
  )
}

export default CallEmailConfirmation