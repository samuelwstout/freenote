import React, {useState} from 'react'
import { useParams } from 'react-router-dom'

const SeeApplications = ({ jobApplications, jobs }) => {

    const [status, setStatus] = useState('Pending')
    const [id, setId] = useState(0)
    const [comment, setComment] = useState('')

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
          comment: comment,
          job_application_id: id
        })
        .then(r => r.json())
        .then(data => console.log(data))
      })
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
                <div>
                <h3>Respond to this application:</h3>
                  <button onClick={() => setStatus('Accept')}>Accept</button>
                  <button onClick={() => setStatus('Deny')}>Deny</button>
                  <button onClick={() => setStatus('Pending')}>Pending</button>
                  <p>{status}</p>
                  <form onSubmit={handleSubmit}>
                    <label htmlFor='comment'>Comment: </label>
                    <input name='comment' onChange={(e) => setComment(e.target.value)} />
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