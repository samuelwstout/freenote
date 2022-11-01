import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import NavBarMusician from '../nav/NavBarMusician'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'

const AppliedJobs = ({ setCurrentUser, currentUser, jobs, jobApplications }) => {
    
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
 
  let appliedJobs = jobApplications.filter(jobApp => jobApp.musician_id === currentUser.id)

  const includesID = (id) => {
    const onFilter = appliedJobs.filter((jobApp) => jobApp.job_id == id)
    return onFilter.length > 0 ? true : false;
  };

  console.log(appliedJobs)

  return (
    <div>
       <NavBarMusician setCurrentUser={setCurrentUser} />
       <Box
          sx={{
            pb: 4
          }}
        >
        <Container sx={{ py: 6 }} maxWidth="md">
             {appliedJobs.length === 0 && 
              <Typography variant='h5' component='h1' align='center'>No applied jobs</Typography>
             }
             {jobs.map((job) => {
              if (includesID(job.id)) {
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
                    </CardContent>
                    <CardActions>
                    <Button size="small" onClick={() => navigate(`/view-application/job/${job.id}`)}>View your application</Button>
                    </CardActions>
                    </Card>
                  </Grid>
                )
              } else {
                if (job.id === 23) {
                  return <Typography variant="h5" component="h2" align="center" key={job.id}>No applied jobs yet</Typography>
                }
              }
            })}
        </Container>
        </Box>
    </div>
  )
}

export default AppliedJobs
