import React, {useState} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import NavBarContractor from '../nav/NavBarContractor'
import { Box, Container, Typography, Accordion, AccordionDetails, AccordionSummary, Link, TextField, Button } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

const JobSettings = ({jobs, setCurrentUser, setJobs}) => {

const navigate = useNavigate()

const [editTitle, setEditTitle] = useState('')
const [editDescription, setEditDescription] = useState('')
const [editDate, setEditDate] = useState('')
const [editLocation, setEditLocation] = useState('')
const [editBudget, setEditBudget] = useState('')
const [deleteMessage, setDeleteMessage] = useState('')
const [expanded, setExpanded] = useState(false)
const [submit, setSubmit] = useState(false)

const paramsId = Number(useParams().id)

let job = jobs.filter(item => item.id === paramsId)
job = job[0]

const handleSubmitTitle = (e) => {
    e.preventDefault();
    fetch(`/api/jobs/${paramsId}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: editTitle
        })
    })
    .then(r => r.json())
    .then(data => {
        const old = jobs.find(x => x.id === data.id)
        const array = jobs.map(j => j)
        array.splice(array.findIndex(s => s === old), 1)
        array.push(data)
        const updateJobs = array.map(j => j)
        setJobs(updateJobs)
    })
    setEditTitle('')
}

const handleSubmitDescription = (e) => {
    e.preventDefault();
    fetch(`/api/jobs/${paramsId}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            description: editDescription
        })
    })
    .then(r => r.json())
    .then(data => {
        const old = jobs.find(x => x.id === data.id)
        const array = jobs.map(j => j)
        array.splice(array.findIndex(s => s === old), 1)
        array.push(data)
        const updateJobs = array.map(j => j)
        setJobs(updateJobs)
    })
    setEditDescription('')
}

const handleSubmitDate = (e) => {
    e.preventDefault();
    fetch(`/api/jobs/${paramsId}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            date: editDate
        })
    })
    .then(r => r.json())
    .then(data => {
        const old = jobs.find(x => x.id === data.id)
        const array = jobs.map(j => j)
        array.splice(array.findIndex(s => s === old), 1)
        array.push(data)
        const updateJobs = array.map(j => j)
        setJobs(updateJobs)
    })
    setEditDate('')
}

const handleSubmitLocation = (e) => {
    e.preventDefault();
    fetch(`/api/jobs/${paramsId}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            location: editLocation
        })
    })
    .then(r => r.json())
    .then(data => {
        const old = jobs.find(x => x.id === data.id)
        const array = jobs.map(j => j)
        array.splice(array.findIndex(s => s === old), 1)
        array.push(data)
        const updateJobs = array.map(j => j)
        setJobs(updateJobs)
    })
    setEditLocation('')
}

const handleSubmitBudget = (e) => {
    e.preventDefault();
    fetch(`/api/jobs/${paramsId}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            budget: editBudget
        })
    })
    .then(r => r.json())
    .then(data => {
        const old = jobs.find(x => x.id === data.id)
        const array = jobs.map(j => j)
        array.splice(array.findIndex(s => s === old), 1)
        array.push(data)
        const updateJobs = array.map(j => j)
        setJobs(updateJobs)
    })
    setEditBudget('')
}

const handleDelete = (e) => {
    e.preventDefault();
    fetch(`/api/jobs/${paramsId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(r => r.json())
    .then(data => {
        setSubmit(true)
        const jobArray = jobs.map(t => t.id)
        const index = jobArray.indexOf(data.id)
        jobArray.splice(index, 1)
        const finalArray = jobs.filter(s => s.id !== data.id)
        const newJobs = finalArray.map(t => t)
        setJobs(newJobs)
        setDeleteMessage(`Job #${paramsId} Deleted`)
        setTimeout(() => {
            navigate('/my-jobs')
        }, 2000)
    })
}

const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false)
  }

  return (
    <div>
        <NavBarContractor setCurrentUser={setCurrentUser} />
        <Box>
        <Container sx={{ py: 6 }} maxWidth="md">
        {deleteMessage &&
            <Typography align='center' variant='h5' component='h1'>{deleteMessage}</Typography>
        }
        {job &&
        <div>
        {/* Edit title */}
        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1bh-content"
        id="panel1bh-header"
        >
        <Typography sx={{ width: '33%', flexShrink: 0 }}>
            Title
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>{job.title}</Typography>
        </AccordionSummary>
        <AccordionDetails align='center'>
        <Box component="form" onSubmit={handleSubmitTitle} noValidate>
        <TextField
              id="title"
              label="Edit title"
              fullWidth
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
        />
        <Button type="submit" variant='outlined' sx={{ mt: 2 }}>Submit</Button>
        </Box>
        </AccordionDetails>
        </Accordion>

        {/* Edit Description */}
        <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel2bh-content"
        id="panel2bh-header"
        >
        <Typography sx={{ width: '33%', flexShrink: 0 }}>
            Description
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>{job.description}</Typography>
        </AccordionSummary>
        <AccordionDetails align='center'>
        <Box component="form" onSubmit={handleSubmitDescription} noValidate>
        <TextField
              id="title"
              label="Edit title"
              fullWidth
              value={editDescription}
              onChange={(e) => setEditDescription(e.target.value)}
        />
        <Button type="submit" variant='outlined' sx={{ mt: 2 }}>Submit</Button>
        </Box>
        </AccordionDetails>
        </Accordion>
        
        {/* Edit Date */}
        <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel3bh-content"
        id="panel3bh-header"
        >
        <Typography sx={{ width: '33%', flexShrink: 0 }}>
            Date
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>{job.date}</Typography>
        </AccordionSummary>
        <AccordionDetails align='center'>
        <Box component="form" onSubmit={handleSubmitDate} noValidate>
        <TextField
              id="title"
              label="Edit title"
              fullWidth
              value={editDate}
              onChange={(e) => setEditDate(e.target.value)}
        />
        <Button type="submit" variant='outlined' sx={{ mt: 2 }}>Submit</Button>
        </Box>
        </AccordionDetails>
        </Accordion>
        
        {/* Edit location */}
        <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel4bh-content"
        id="panel4bh-header"
        >
        <Typography sx={{ width: '33%', flexShrink: 0 }}>
            Location
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>{job.location}</Typography>
        </AccordionSummary>
        <AccordionDetails align='center'>
        <Box component="form" onSubmit={handleSubmitLocation} noValidate>
        <TextField
              id="title"
              label="Edit title"
              fullWidth
              value={editLocation}
              onChange={(e) => setEditLocation(e.target.value)}
        />
        <Button type="submit" variant='outlined' sx={{ mt: 2 }}>Submit</Button>
        </Box>
        </AccordionDetails>
        </Accordion>

        {/* Edit budget */}
        <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel5bh-content"
        id="panel5bh-header"
        >
        <Typography sx={{ width: '33%', flexShrink: 0 }}>
            Budget
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>${job.budget}</Typography>
        </AccordionSummary>
        <AccordionDetails align='center'>
        <Box component="form" onSubmit={handleSubmitBudget} noValidate>
        <TextField
              id="title"
              label="Edit budget"
              fullWidth
              value={editBudget}
              onChange={(e) => setEditBudget(e.target.value)}
        />
        <Button type="submit" variant='outlined' sx={{ mt: 2 }}>Submit</Button>
        </Box>
        </AccordionDetails>
        </Accordion>
        </div>
        }

        {/* Delete */}
        {submit === false &&
        <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')} sx={{ mt: 6 }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel6bh-content"
          id="panel6bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0, color: 'red' }}>Danger</Typography>
          <Typography sx={{ color: 'red' }}>
            Delete this job?
          </Typography>
        </AccordionSummary>
        <AccordionDetails align='center'>
        <Box component="form" onSubmit={handleDelete} noValidate>
        <Button type='submit' variant='outlined' sx={{ mt: 2, color: 'red' }}>Delete</Button>
        </Box>
        </AccordionDetails>
      </Accordion>
        }

        </Container>
        </Box>
    </div>
  )
}

export default JobSettings

