import React, {useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {Button, ButtonGroup, CssBaseline, Box, Typography, Container} from '@mui/material';

const Signup = ({currentUser}) => {

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

  return (
    <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 9,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
        <Typography component="h1" variant="h5">
          Join as musician or contractor
        </Typography>
        <ButtonGroup sx={{mt: 2}}>
          <Button onClick={() => navigate('/signup-as-contractor')}>I'm a contractor, hiring for a project</Button>
          <Button onClick={() => navigate('/signup-as-musician')}>I'm a musician, looking for work</Button>
        </ButtonGroup>
        </Box>
      </Container>
  )
}

export default Signup