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

  return (
    <div>
        <NavBarContractor setCurrentUser={setCurrentUser} />
        <h1>My Jobs</h1>
        {jobs && 
          jobs.map(job => {
            return (
              <div key={job.id}>
                <h3>{job.title}</h3>
                <h3>{job.description}</h3>
                <h3>{job.date}</h3>
                <h3>{job.location}</h3>
                <h3>${job.budget}</h3>
              </div>
            )
          })
        }
    </div>
  )
}

export default MyJobs