import React from 'react'
import {useParams} from 'react-router-dom'
import NavBarMusician from '../nav/NavBarMusician'
import { Typography, Box, Container, Grid, Card, CardContent } from '@mui/material'


const ViewApplication = ({jobs, currentUser, jobApplications, setCurrentUser}) => {
   
    const params = useParams()

    const jobId = Number(params.id)

    const jobAppsFromCurrentUser = jobApplications.filter((jobApp: {musician_id: number}) => jobApp.musician_id === currentUser.id)

    let application: any;
    
    if (jobAppsFromCurrentUser.length !== 0) {
        application = jobAppsFromCurrentUser.find((item: {job_id: number}) => {
            return item.job_id === jobId
        })
    }

    let job: any;
    
    if (jobs.length !== 0) {
        job = jobs.find((item: {id: number}) => item.id === jobId)
    }

  return (
    <div>
        <NavBarMusician setCurrentUser={setCurrentUser} />
        <Box>
        <Container sx={{ mt: 3 }} maxWidth='md'>
        <Grid item xs={12} sm={6} md={4}>
        {job !== undefined &&
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
        </CardContent>
        </Card>
        }
        {application !== undefined &&
        <div>
            <Card
            sx={{ height: '100%', display: 'flex', flexDirection: 'column'}}
            variant="outlined"
            >
            <CardContent sx={{ flexGrow: 1 }}>
            <Typography gutterBottom variant="h5" component="h2">
            Application #{application.id}
            </Typography>
            <Typography sx={{ whiteSpace: 'pre-wrap' }}>
            {application.cover_letter}
            </Typography>
            </CardContent>
            </Card>

            {application.application_response &&
            <Card
            sx={{ height: '100%', display: 'flex', flexDirection: 'column'}}
            variant="outlined"
            >
            <CardContent sx={{ flexGrow: 1 }}>
            <Typography gutterBottom variant="h5" component="h2" sx={{ mt: 1.5 }}>
            Status: {application.application_response.status}
            </Typography>
            </CardContent> 
            </Card>
            }

            {!application.application_response && 
            <Card
            sx={{ height: '100%', display: 'flex', flexDirection: 'column'}}
            variant="outlined"
            >
            <CardContent sx={{ flexGrow: 1 }}>
            <Typography gutterBottom variant="h5" component="h2" sx={{ mt: 1.5 }}>
            Status: Pending
            </Typography>
            </CardContent>
            </Card>
            }

        </div>
        }
        </Grid>
        </Container>
        </Box>
    </div>
  )
}

export default ViewApplication