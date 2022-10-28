import React, {useState} from 'react'
import { useParams } from 'react-router-dom'
import NavBarContractor from '../nav/NavBarContractor'
import { Typography } from '@mui/material'

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
      {job !== undefined &&
        <Typography variant='h4' component='h1' align='center' sx={{ mt: 3 }}>Applications for {job.title}</Typography>
      }
      {filterApplications !== undefined && 
        filterApplications.length === 0 ? <Typography variant='h4' component='h1' align='center' sx={{ mt: 3 }}>No applications yet!</Typography> : null
      }
      {filterApplications !== undefined &&
        filterApplications.map(item => {
          const musician = musicians.find(data => data.id === item.musician_id)
            return (
              <div key={item.id}>
                {musician !== undefined &&
                <div>
                   <h2>Application #{item.id}</h2>
                   <h4>{musician.first_name} {musician.last_name}</h4>
                   <h4>{musician.username}</h4>
                   {musician.musician_profile !== undefined &&
                   <div>
                    <h4>{musician.musician_profile.email}</h4>
                    <h4>{musician.musician_profile.location}</h4>
                    <h4>{musician.musician_profile.instrument}</h4>
                    <h4>{musician.musician_profile.bio}</h4>
                    <h4>{musician.musician_profile.media_url}</h4>
                   </div>
                   }
                   <h4>Cover letter:</h4>
                   <h4>{item.cover_letter}</h4>
               </div>
                }
              {item.application_response &&
                <div>
                  <h1>Status: {item.application_response.status}</h1>
                </div>
              }
            
              {!item.application_response &&
                <div>
                <h3>Respond to this application:</h3>
                  <button onClick={() => setStatus('Accept')}>Accept</button>
                  <button onClick={() => setStatus('Deny')}>Deny</button>
                  <button onClick={() => setStatus('Pending')}>Pending</button>
                  <p>{status}</p>
                  <form onSubmit={handleSubmit}>
                    <h4>Submit:</h4>
                    <button type='submit' onClick={() => setId(item.id)}>Submit</button>
                   </form>
                </div>
              }
              </div>
            )
        })
        }
    </div>
  )
}

export default SeeApplications