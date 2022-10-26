import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import NavBarContractor from '../nav/NavBarContractor';

const MyJobs = ({currentUser, setCurrentUser, jobs}) => {

  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser) {
      if (currentUser.type === 'Musician') {
        navigate('/find-work')
      }
      if (Object.keys(currentUser).length === 0) {
        navigate('/')
      }
    }
  }, [currentUser])

 const filterJobs = jobs.filter(job => job.contractor_id === currentUser.id)

  return (
    <div>
        <NavBarContractor setCurrentUser={setCurrentUser} />
        {filterJobs !== undefined && 
          filterJobs.map(job => {
            return (
              <div key={job.id}>
                <ul>
                  <li>{job.title}</li>
                  <li>{job.description}</li>
                  <li>{job.date}</li>
                  <li>{job.location}</li>
                  <li>${job.budget}</li>
                  <button onClick={() => navigate(`/job/${job.id}/applications`)}>See applications</button>
                  <button onClick={() => navigate(`/job/${job.id}/settings`)}>Settings</button>
                </ul>
              </div>
            )
          })
        }
        {filterJobs.length === 0 && 
          <h1>No jobs yet</h1>
        }
    </div>
  )
}

export default MyJobs