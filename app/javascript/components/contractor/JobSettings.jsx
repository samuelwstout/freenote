import React, {useState} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import NavBarContractor from '../nav/NavBarContractor'

const JobSettings = ({jobs, currentUser, setCurrentUser, setJobs}) => {

const navigate = useNavigate()

const [title, setTitle] = useState('')
const [description, setDescription] = useState('')
const [date, setDate] = useState('')
const [location, setLocation] = useState('')
const [budget, setBudget] = useState('')
const [deleteMessage, setDeleteMessage] = useState('')

const paramsId = Number(useParams().id)

let job = jobs.filter(item => item.id === paramsId)
job = job[0]

const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`/api/jobs/${paramsId}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title,
            description,
            date,
            location,
            budget,
            contractor_id: currentUser.id
        })
    })
    .then(r => r.json())
    .then(data => {
        const old = jobs.find(x => x.id === data.id)
        const array = jobs.map(j => j)
        array.splice(array.findIndex(s => s === old), 1)
        array.push(data)
        const updateJobs = array.map(j => j)
        setJobs(updateJobs)
    })

    setTitle('')
    setDescription('')
    setDate('')
    setLocation('')
    setBudget('')
}

const handleClick = () => {
    fetch(`/api/jobs/${paramsId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
    })
    .then(r => r.json())
    .then(data => {
        console.log(data)
        const jobArray = jobs.map(t => t.id)
        const index = jobArray.indexOf(data.id)
        jobArray.splice(index, 1)
        const finalArray = jobs.filter(s => s.id !== data.id)
        const newJobs = finalArray.map(t => t)
        setJobs(newJobs)
        setDeleteMessage(`Job #${paramsId} Deleted!`)
        setTimeout(() => {
            navigate('/my-jobs')
        }, 2000)
    })
}

  return (
    <div>
        <NavBarContractor setCurrentUser={setCurrentUser} />
        {deleteMessage &&
            <h2>{deleteMessage}</h2>
        }
        {job &&
        <div>
         <h2>{job.title}</h2>
         <h2>{job.description}</h2>
         <h2>{job.date}</h2>
         <h2>{job.location}</h2>
         <h2>{job.budget}</h2>
        </div>
        }
        <form onSubmit={handleSubmit}>
            <h2>Edit job:</h2>
            <input placeholder='Title' value={title} onChange={(e) => setTitle(e.target.value)} />
            <input placeholder='Description' value={description} onChange={(e) => setDescription(e.target.value)} />
            <input placeholder='Date(s)' type='date' value={date} onChange={(e) => setDate(e.target.value)} />
            <input placeholder='Location' value={location} onChange={(e) => setLocation(e.target.value)} />
            <input placeholder='Budget' value={budget} onChange={(e) => setBudget(e.target.value)} />
            <input type='submit' />
        </form>
        <h2>Delete job:</h2>
        <button onClick={handleClick}>Delete Job</button>
    </div>
  )
}

export default JobSettings

