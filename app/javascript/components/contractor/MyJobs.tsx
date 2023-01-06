import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import NavBarContractor from '../nav/NavBarContractor'
import { Box, Container, Grid, Card, CardContent, Typography, Button } from '@mui/material'

const MyJobs = ({currentUser, setCurrentUser, jobs}) => {

  const navigate = useNavigate();

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

 const filterJobs = jobs.filter((job: { contractor_id: number }) => job.contractor_id === currentUser.id)

  return (
    <div>
        <NavBarContractor setCurrentUser={setCurrentUser} />
        <Box sx={{ pb: 4 }}>
        <Container sx={{ py: 3 }} maxWidth="md">
        {filterJobs !== undefined && 
          filterJobs.map((job: { id: number, title: string, description: string, date: string, location: string, budget: number }) => {
            return (
              <Grid item key={job.id} xs={12} sm={6} md={4}>
                <Card
                    sx={{ height: '100%', display: 'flex', flexDirection: 'column'}}
                    variant="outlined"
                >
                <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                {job.title}
                </Typography>
                <Typography>
                {job.description}
                </Typography>
                <Typography>
                {job.date}
                </Typography>
                <Typography>
                {job.location}
                </Typography>
                <Typography>
                ${job.budget}
                </Typography>
                <Button variant='outlined' sx={{ mt: 2 }} onClick={() => navigate(`/job/${job.id}/applications`)}>See applications</Button>
                <Button variant='outlined' sx={{ mt: 2 }} onClick={() => navigate(`/job/${job.id}/settings`)}>Settings</Button>
                </CardContent>
                </Card>
              </Grid>
            )
          })
        }
        {filterJobs.length === 0 && 
          <Typography align='center' variant='h5' component='h1'>No jobs</Typography >
        }
        </Container>
        </Box>
    </div>
  )
}

export default MyJobs