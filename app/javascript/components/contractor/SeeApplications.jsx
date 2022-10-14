import React, {useState} from 'react'
import { useParams } from 'react-router-dom'

const SeeApplications = ({ jobApplications, jobs }) => {

    const [value, setValue] = useState('Pending')
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
      e.preventDefault()
      console.log(value)
      console.log(id)
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
                    <h4>Status:</h4>
                    <h4>{item.accepted.toString()}</h4>
                </div>
                <div>
                <h3>Change Status:</h3>
                  <button onClick={() => setValue('Accept')}>Accept</button>
                  <button onClick={() => setValue('Deny')}>Deny</button>
                  <button onClick={() => setValue('Pending')}>Pending</button>
                  <form onSubmit={handleSubmit}>
                    <h4>Submit:</h4>
                    <button type='submit' onClick={() => setId(item.id)}>Submit</button>
                   </form>
                </div>
              </div>
            )
        })
        }
    </div>
  )
}

export default SeeApplications