import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import NavBarMusician from '../nav/NavBarMusician';
import { Box, Container, Card, Typography, Button } from '@mui/material'

const MusicianProfile = ({setCurrentUser, currentUser, musicians, musicianProfile}) => {

  let musician;

  if (Object.keys(currentUser).length !== 0) {
    musician = musicians.find(item => item.id === currentUser.id)
  }

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

  return (
    <div>
      <NavBarMusician setCurrentUser={setCurrentUser} />
        <Box>
        <Container sx={{ py: 3 }} maxWidth="md">
        {musician && 
        <div>
          <Card>
          <Typography gutterBottom variant="h6" component="h2">First name: {musician.first_name}</Typography>
          </Card>
          <Card sx={{ mt: 2 }}>
          <Typography gutterBottom variant="h6" component="h2">Last name: {musician.last_name}</Typography>
          </Card>
          <Card sx={{ mt: 2 }}>
          <Typography gutterBottom variant="h6" component="h2">Username: {musician.username}</Typography>
          </Card>
          {Object.keys(musicianProfile).length !== 0 && 
          <div>
            <h3>Email: {musicianProfile.email}</h3>
            <h3>Location: {musicianProfile.location}</h3>
            <h3>Instrument: {musicianProfile.instrument}</h3>
            <h3>Bio: {musicianProfile.bio}</h3>
            <h3>Media Url: {musicianProfile.media_url}</h3>
          </div>
          }
          {musician.musician_profile &&
          <div>
            <Card sx={{ mt: 2 }}>
            <Typography gutterBottom variant="h6" component="h2">Email: {musician.musician_profile.email}</Typography>
            </Card>
            <Card sx={{ mt: 2 }}>
            <Typography gutterBottom variant="h6" component="h2">Location: {musician.musician_profile.location}</Typography>
            </Card>
            <Card sx={{ mt: 2 }}>
            <Typography gutterBottom variant="h6" component="h2">Instrument: {musician.musician_profile.instrument}</Typography>
            </Card>
            <Card sx={{ mt: 2}}>
            <Typography gutterBottom variant="h6" component="h2">Bio: {musician.musician_profile.bio}</Typography>
            </Card>
            <Card sx={{ mt: 2}}>
            <Typography gutterBottom variant="h6" component="h2">Media Url: {musician.musician_profile.media_url}</Typography>
            </Card>
          </div>
          }
        </div>
        }
        </Container>
        </Box>
    </div>
  )
}

export default MusicianProfile