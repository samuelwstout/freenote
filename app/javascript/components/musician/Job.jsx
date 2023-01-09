import React, {useState} from 'react'
import { useParams } from 'react-router-dom'
import NavBarMusician from '../nav/NavBarMusician'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { TextField, Button } from '@mui/material'

const Job = ({jobs, currentUser, setJobApplications, jobApplications, setCurrentUser}) => {

const [coverLetter, setCoverLetter] = useState('')
const [disabled, setDisabled] = useState(false)

const params = useParams()
const jobId = Number(params.id)
const filterjob = jobs.filter(job => job.id === jobId)
const job = filterjob[0]

const handleSubmit = (e) => {
    e.preventDefault()
    fetch('/api/job_applications', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        cover_letter: coverLetter,
        musician_id: currentUser.id,
        job_id: job.id
      })
    })
    .then((r) => {
      if (r.ok) {
        r.json().then(data => {
          setDisabled(true)
          const newJobApps = [...jobApplications, data]
          setJobApplications(newJobApps)
        })
      }
    })
  setCoverLetter('')
}

const jobAppsFromCurrentUser = jobApplications.filter(jobApp => jobApp.musician_id === currentUser.id)

let checkApps; 

if (jobAppsFromCurrentUser.length !== 0) {
  const filter = jobAppsFromCurrentUser.filter(item => item.job_id === jobId)
  checkApps = filter[0]
}


  return (
    <div>
      <NavBarMusician setCurrentUser={setCurrentUser} />
      <Box>
      <Container sx={{ mt: 3 }} maxWidth="md">
      <Grid item xs={12} sm={6} md={4}>
      {job &&
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
      </Grid>
      </Container>
      </Box>
      {checkApps !== undefined && 
        <Typography variant="h5" component="h1" align="center" sx={{ mt: 2 }}>You've applied</Typography>
      }
      {!checkApps &&
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ m: 1, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <Container sx={{ mt: 3 }} maxWidth="md">
            <TextField
              id="cover_letter"
              label="Cover letter"
              multiline
              fullWidth
              rows={8}
              value={coverLetter}
              onChange={(e) => setCoverLetter(e.target.value)}
              sx={{ mt: 2 }}
            />
            <Typography align="center">
            {!disabled &&
            <Button
                type="submit"
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Submit
            </Button>
            }
            {disabled && 
            <Button
            disabled
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            >
            Submit
            </Button>
            }
            </Typography>
        </Container>
      </Box>
      }
    </div>
  )
}

export default Job