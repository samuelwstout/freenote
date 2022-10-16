import React, {useState} from 'react'
import { useParams } from 'react-router-dom'

const Job = ({jobs, currentUser, setJobApplications, jobApplications}) => {

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
        {job && 
        <ul>
            <li>{job.title}</li>
            <li>{job.description}</li>
            <li>{job.date}</li>
            <li>{job.location}</li>
            <li>${job.budget}</li>
        </ul>     
        }
        <form onSubmit={handleSubmit}>
            <label>get resume </label>
            <input value={resume} onChange={(e) => setResume(e.target.value)} />
            <label>get cover letter </label>
            <input value={coverLetter} onChange={(e) => setCoverLetter(e.target.value)} />
            <input type='submit' />
        </form>
    </div>
  )
}

export default Job