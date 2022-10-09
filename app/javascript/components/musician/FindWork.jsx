import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import NavBarMusician from '../nav/NavBarMusician';

const FindWork = ({currentUser, setCurrentUser}) => {
  
  const navigate = useNavigate();

  const [jobs, setJobs] = useState([])

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

  useEffect(() => {
    fetch('/api/jobs')
    .then(r => r.json())
    .then(data => {
      setJobs(data)
    })
  }, [])

  return (
    <div>
        <NavBarMusician setCurrentUser={setCurrentUser} />
        {jobs && 
        jobs.map(job => {
          return (
            <div key={job.id}>
              <ul>
                <li>{job.title}</li>
                <li>{job.description}</li>
                <li>{job.date}</li>
                <li>{job.location}</li>
                <li>${job.budget}</li>
                <button>Apply</button>
              </ul>
            </div>
          )
        })
        }
    </div>
    )
}

export default FindWork