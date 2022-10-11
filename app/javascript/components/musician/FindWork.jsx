import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import NavBarMusician from '../nav/NavBarMusician';

const FindWork = ({currentUser, setCurrentUser, jobs}) => {
  
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
                <button onClick={() => navigate(`/job/${job.id}`)}>Apply</button>
              </ul>
            </div>
          )
        })
        }
    </div>
    )
}

export default FindWork