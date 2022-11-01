import React, {useState} from 'react'
import { useParams } from 'react-router-dom'
import NavBarContractor from '../nav/NavBarContractor'
import { Typography, Grid, Card, Box, Container, CardContent, Link, Button, ButtonGroup } from '@mui/material'

const SeeApplications = ({ jobApplications, jobs, musicians, setCurrentUser }) => {

    const [status, setStatus] = useState('Pending')
    const [id, setId] = useState(0)

    const paramsId = Number(useParams().id)

    let filterApplications;

    if (jobApplications.length !== 0) {
      filterApplications = jobApplications.filter(item => {
         return item.job_id === paramsId
      })
     }

    let job;

    if (jobs.length !== 0 ) {
      job = jobs.find(item => item.id === paramsId)
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      fetch('/api/application_responses', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          status: status,
          job_application_id: id
        })
      })
      .then(r => r.json())
      .then(data => {
        data
        location.reload()
      })
    }
  
  return (
    <div>
      <NavBarContractor setCurrentUser={setCurrentUser} />
      <Box sx={{ pb: 4 }}>
      <Container sx={{ py: 3 }} maxWidth="md">
      {job !== undefined &&
        <Typography variant='h4' component='h1' align='center' sx={{ mt: 2, mb: 3 }}>Applications for {job.title}</Typography>
      }
      {jobApplications.length === 0 &&
        <Typography variant='h5' component='h1' align='center'>No applications</Typography>
      }
      {filterApplications !== undefined && 
        filterApplications.length === 0 ? <Typography variant='h5' component='h1' align='center'>No applications</Typography> : null
      }
      {filterApplications !== undefined &&
        filterApplications.map(item => {
          const musician = musicians.find(data => data.id === item.musician_id)
            return (
              <Grid item key={item.id} xs={12} sm={6} md={4}>
                {musician !== undefined &&
                <Card
                sx={{ height: '100%', display: 'flex', flexDirection: 'column'}}
                variant="outlined"
                >
                <CardContent sx={{ flexGrow: 1 }}>
                   <Typography gutterBottom variant="h5" component="h2">Application #{item.id}</Typography>
                   <Typography sx={{ mt: 1 }}>Name: {musician.first_name} {musician.last_name}</Typography>
                   <Typography sx={{ mt: 1 }}>Username: {musician.username}</Typography>
                   {musician.musician_profile !== undefined &&
                   <div>
                    <Typography sx={{ mt: 1 }}>Email: </Typography>
                    <Link href={`mailto: ${musician.musician_profile.email}`} sx={{ mt: 1 }}>{musician.musician_profile.email}</Link>
                    <Typography sx={{ mt: 1 }}>Location: {musician.musician_profile.location}</Typography>
                    <Typography sx={{ mt: 1 }}>Instrument: {musician.musician_profile.instrument}</Typography>
                    <Typography sx={{ mt: 1 }}>Bio: </Typography>
                    <Typography sx={{ whiteSpace: 'pre-wrap', mt: 1 }}>{musician.musician_profile.bio}</Typography>
                    <Typography sx={{ mt: 1 }}>Media: </Typography>
                    <Link href={musician.musician_profile.media_url} sx={{ mt: 1 }}>{musician.musician_profile.media_url}</Link>
                   </div>
                   }
                   <Typography sx={{ mt: 1, mb: 2 }}>Cover letter:</Typography>
                   <Typography variant='outlined' sx={{ whiteSpace: 'pre-wrap' }}>{item.cover_letter}</Typography>
                </CardContent>
               </Card>
                }
              {item.application_response &&
              <Typography gutterBottom variant="h5" component="h2" align='center' sx={{ mt: 2 }}>Status: {item.application_response.status}</Typography>
              }
            
              {!item.application_response &&
                <div>
                <Typography align='center' variant="h5" component="h2" sx={{ mt: 2 }}>Respond to this application:</Typography>
                  <ButtonGroup sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                    <Button variant='outlined' onClick={() => setStatus('Accept')}>Accept</Button>
                    <Button variant='outlined' onClick={() => setStatus('Deny')}>Deny</Button>
                    <Button variant='outlined' onClick={() => setStatus('Pending')}>Pending</Button>
                  </ButtonGroup>
                  <Typography align='center' sx={{ mt: 2}} variant='h6'>{status}</Typography>
                  <Box component='form' onSubmit={handleSubmit}>
                    <Typography align='center' sx={{ mt: 1 }}>
                      <Button type='submit' variant='outlined' onClick={() => setId(item.id)}>Submit</Button>
                    </Typography>
                   </Box>
                </div>
              }
              </Grid>
            )
        })
        }
        </Container>
        </Box>
    </div>
  )
}

export default SeeApplications