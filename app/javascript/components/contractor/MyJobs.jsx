import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import NavBarContractor from '../nav/NavBarContractor';

const MyJobs = ({currentUser, setCurrentUser, jobs}) => {

  const filterJobs = jobs.filter(job => job.contractor_id === currentUser.id)

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

  return (
    <div>
        <NavBarContractor setCurrentUser={setCurrentUser} />
        <h1>My Jobs</h1>
        {filterJobs && 
          filterJobs.map(job => {
            return (
              <div key={job.id}>
                <ul>
                  <li>{job.title}</li>
                  <li>{job.description}</li>
                  <li>{job.date}</li>
                  <li>{job.location}</li>
                  <li>${job.budget}</li>
                </ul>
              </div>
            )
          })
        }
    </div>
  )
}

export default MyJobs