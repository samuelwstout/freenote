import React from 'react'
import {useParams} from 'react-router-dom'

const ViewApplication = ({jobs, currentUser, jobApplications}) => {
   
    const params = useParams()

    const jobId = Number(params.id)

    const jobAppsFromCurrentUser = jobApplications.filter(jobApp => jobApp.musician_id === currentUser.id)

    let filterApplications;
    
    if (jobAppsFromCurrentUser.length !== 0) {
        filterApplications = jobAppsFromCurrentUser.filter(item => {
            return item.job_id === jobId
        })
    }

    let job;
    
    if (jobs.length !== 0) {
        job = jobs.find(item => item.id === jobId)
    }

  return (
    <div>
        {job !== undefined &&
        <h1>Applications for {job.title}</h1>
        }
        {filterApplications !== undefined &&
        filterApplications.map(item => {
            return (
                <div key={item.id}>
                    <div>
                        <h2>Application #{item.id}</h2>
                        <h4>Resume:</h4>
                        <h4>{item.resume}</h4>
                        <h4>Cover letter:</h4>
                        <h4>{item.cover_letter}</h4>
                    </div>
                    {item.application_response &&
                    <div>
                        <h1>Status: {item.application_response.status}</h1>
                        <h3>Comment: {item.application_response.comment}</h3>
                    </div>
                    }
                    {!item.application_response &&
                    <div>
                        <h1>Status: Pending</h1>
                    </div>
                    }
                </div>
            )
        })
        }
        
    </div>
  )
}

export default ViewApplication