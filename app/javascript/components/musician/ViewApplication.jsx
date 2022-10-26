import React from 'react'
import {useParams} from 'react-router-dom'
import NavBarMusician from '../nav/NavBarMusician'
import { Typography, Box, Container, Grid, Card, CardContent } from '@mui/material'


const ViewApplication = ({jobs, currentUser, jobApplications, setCurrentUser}) => {
   
    const params = useParams()

    const jobId = Number(params.id)

    const jobAppsFromCurrentUser = jobApplications.filter(jobApp => jobApp.musician_id === currentUser.id)

    let application;
    
    if (jobAppsFromCurrentUser.length !== 0) {
        application = jobAppsFromCurrentUser.find(item => {
            return item.job_id === jobId
        })
    }

    let job;
    
    if (jobs.length !== 0) {
        job = jobs.find(item => item.id === jobId)
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
            <Typography>
            Cover letter:
            </Typography>
            <Typography>
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

// {filterApplications !== undefined &&
//     filterApplications.map(item => {
//         return (
//             <div key={item.id}>
//                 <div>
//                     <h2>Application #{item.id}</h2>
//                     <h4>Cover letter:</h4>
//                     <h4>{item.cover_letter}</h4>
//                 </div>
//                 {item.application_response &&
//                 <div>
//                     <h1>Status: {item.application_response.status}</h1>
//                     <h3>Comment: {item.application_response.comment}</h3>
//                 </div>
//                 }
//                 {!item.application_response &&
//                 <div>
//                     <h1>Status: Pending</h1>
//                 </div>
//                 }
//             </div>
//               )
//           })
//     }