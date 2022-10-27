import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {Avatar, Button, CssBaseline, TextField, Box, Typography, Container} from '@mui/material'

const CreateMusicianProfile = ({currentUser}) => {

    const navigate = useNavigate()

    useEffect(() => {
      if (currentUser) {
        if (currentUser.type === 'Contractor') {
          navigate('/create-job')
        }
      }
      }, [currentUser])

      const [location, setLocation] = useState('')
      const [instrument, setInstrument] = useState('')
      const [bio, setBio] = useState('')
      const [mediaUrl, setMediaUrl] = useState('')
      const [email, setEmail] = useState('')
      const [error, setError] = useState('')

      const handleSubmit = (e) => {
        e.preventDefault();
        fetch('/api/musician_profiles', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                location,
                instrument,
                bio,
                media_url: mediaUrl,
                musician_id: currentUser.id
            })
        })
        .then(res => {
            if (res.ok) {
              res.json().then(data => {
                data
                navigate('/find-work')
              })
            } else {
              res.json().then(errors => {
                setError(errors.error)
              })
            }
          })
        setLocation('')
        setInstrument('')
        setBio('')
        setMediaUrl('')
        setEmail('')
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
        Complete your profile
      </Typography>
      {error && 
        <Typography variant="subtitle1" color="error.dark">
        {error}
      </Typography>
      }
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
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
          id="location"
          label="Location"
          name="location"
          autoComplete="location"
          autoFocus
          onChange={(e) => setLocation(e.target.value)}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="instrument"
          label="Instrument"
          name="instrument"
          autoComplete="instrument"
          autoFocus
          onChange={(e) => setInstrument(e.target.value)}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="bio"
          label="Bio"
          id="bio"
          autoComplete="bio"
          onChange={(e) => setBio(e.target.value)}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="media"
          label="Youtube link of you performing"
          id="media"
          autoComplete="media"
          onChange={(e) => setMediaUrl(e.target.value)}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Submit
        </Button>
      </Box>
    </Box>
  </Container>
  )
}

export default CreateMusicianProfile

{/* <div>
        <form onSubmit={handleSubmit}>
            <h1>Create Musician Profile</h1>
            <p>
                <label htmlFor='email'>Email </label>
                <input type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </p>
            <p>
                <label htmlFor='location'>Location </label>
                <input type="text" name="location" value={location} onChange={(e) => setLocation(e.target.value)} />
            </p>
            <p>
                <label htmlFor='instrument'>Instrument </label>
                <input type="text" name="instrument" value={instrument} onChange={(e) => setInstrument(e.target.value)} />
            </p>
            <p>
                <label htmlFor='bio'>Bio </label>
                <input type="text" name="bio" value={bio} onChange={(e) => setBio(e.target.value)} />
            </p>
            <p>
                <label htmlFor='media_url'>Media Url </label>
                <input type="text" name="media_url" value={mediaUrl} onChange={(e) => setMediaUrl(e.target.value)} />
            </p>
            <input type='submit' />
        </form>
    </div>  */}