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

const [resume, setResume] = useState('')
const [coverLetter, setCoverLetter] = useState('')

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
        resume: resume,
        cover_letter: coverLetter,
        musician_id: currentUser.id,
        job_id: job.id
      })
    })
    .then((r) => {
      if (r.ok) {
        r.json().then(data => {
          const newJobApps = [...jobApplications, data]
          setJobApplications(newJobApps)
        })
      } else {
        r.json().then(error => {
          console.log(error)
        })
      }
    })
  setResume('')
  setCoverLetter('')
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
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ m: 1, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <Container sx={{ mt: 3 }} maxWidth="md">
            <TextField
              id="resume"
              label="Resume"
              variant="outlined"
              multiline
              fullWidth
              rows={8}
              value={resume}
              onChange={(e) => setResume(e.target.value)}
              sx={{ mt: 2 }}
            />
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
            <Button
                type="submit"
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Submit
            </Button>
            </Typography>
        </Container>
      </Box>
    </div>
  )
}

export default Job