import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import NavBarMusician from '../nav/NavBarMusician';

const MyApplications = ({ setCurrentUser, currentUser, jobs, jobApplications }) => {
    
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
 
  const jobAppsFromCurrentUser = jobApplications.filter(jobApp => jobApp.musician_id === currentUser.id)

  const includesID = (id) => {
    const onFilter = jobAppsFromCurrentUser.filter((jobApp) => jobApp.job_id == id)
    return onFilter.length > 0 ? true : false;
  };

  return (
    <div>
       <NavBarMusician setCurrentUser={setCurrentUser}/>
        <h1>Jobs You've Applied To</h1>
        <div>
             {jobs.map((job) => {
              if (includesID(job.id)) {
                return (
                  <div key={job.id}>
                    <ul>
                      <li>{job.title}</li>
                      <li>{job.description}</li>
                      <li>{job.date}</li>
                      <li>{job.location}</li>
                      <li>${job.budget}</li>
                      <button>View your application</button>
                    </ul>
                  </div>
                );
              }
            })}
        </div>
    </div>
  )
}

export default MyApplications