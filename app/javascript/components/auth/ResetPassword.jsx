import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import {Avatar, Button, CssBaseline, TextField, Box, Typography, Container} from '@mui/material'

const ResetPassword = () => {

    const navigate = useNavigate()

    const [token, setToken] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')
    const [pwNoMatch, setPwNoMatch] = useState('')
    const [success, setSuccess] = useState('')
    const [message, setMessage] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault()
        if (password !== passwordConfirmation) {
            setPwNoMatch("Passwords don't match")
        } else {
            fetch('/api/reset_password', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    token,
                    email,
                    password
                })
            })
            .then(r => r.json())
            .then(data => {
                if (data.error) {
                setMessage(data.error.map((m, index) => {
                    return <Typography key={index} align='center' component='h1' variant='body1' color='red' sx={{ mb: 4 }}>{m}</Typography>
                    }))
                } else {
                    setSuccess(data.alert)
                }
            })
        }
    setToken('')
    setEmail('')
    setPassword('')
    setPasswordConfirmation('')
    }

  return (
    <>
    <Typography align='left' sx={{ mt: 2, ml: 2 }}>
        <Button variant='outlined' type='submit' onClick={() => navigate('/')}>Go to app</Button>
    </Typography>
    <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
        {message && 
        message
        }
        {success && 
        <Typography align='center' component='h1' variant='body1' color='green' sx={{ mt: 2 }}>{success}</Typography>
        }
        <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}></Avatar>
        <Typography component="h1" variant="h5">
        Reset Password
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="token"
              label="Token"
              name="token"
              autoComplete="token"
              autoFocus
              onChange={(e) => setToken(e.target.value)}
              value={token}
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
              value={email}
            />
            {pwNoMatch &&
            <Typography component='h2' variant='body2' align='center'>{pwNoMatch}</Typography>
            }
            <TextField
              margin="normal"
              required
              fullWidth
              id="password"
              label="Password"
              name="password"
              autoComplete="password"
              type='password'
              autoFocus
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="password_confirmation"
              label="Password Confirmation"
              name="password_confirmation"
              autoComplete="password confirmation"
              type='password'
              autoFocus
              onChange={(e) => setPasswordConfirmation(e.target.value)}
              value={passwordConfirmation}
            />
            <Typography align='center' sx={{ mt: 2 }}>
                <Button variant='outlined' type='submit'>Reset Password</Button>
            </Typography>
          </Box>
        </Box>
    </Container>
    </>
  )
}

export default ResetPassword
