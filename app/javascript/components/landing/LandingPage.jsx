import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {Button, ButtonGroup, CssBaseline, Box, Typography, Container} from '@mui/material';

const LandingPage = ({currentUser}) => {

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
            marginTop: 5,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
        <Typography component="h1" variant="h2">
          Freenote
        </Typography>
        <ButtonGroup sx={{mt: 2}}>
          <Button onClick={() => navigate('/signin')}>Sign in</Button>
          <Button onClick={() => navigate('/signup')}>Sign up</Button>
        </ButtonGroup>
        </Box>
      </Container>
    )
}
export default LandingPage

{/* <div>
        <h1>Freenote</h1>
        <button onClick={() => navigate('/signin')}>Sign in</button>
        <button onClick={() => navigate('/signup')}>Sign up</button>
      </div> */}