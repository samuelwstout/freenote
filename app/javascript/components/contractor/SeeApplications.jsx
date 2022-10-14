import React from 'react'
import { useParams } from 'react-router-dom'

const SeeApplications = ({ jobApplications, jobs }) => {

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


  return (
    <div>
      {job !== undefined &&
        <h1>Applications for {job.title}</h1>
      }
      {filterApplications !== undefined &&
        filterApplications.map(item => {
            return (
                <div key={item.id}>
                    <h2>Application #{item.id}</h2>
                    <h4>Resume:</h4>
                    <h4>{item.resume}</h4>
                    <h4>Cover letter:</h4>
                    <h4>{item.cover_letter}</h4>
                    <h4>Status: {String(item.accepted)}</h4>
                </div>
            )
        })
        }
    </div>
  )
}

export default SeeApplications