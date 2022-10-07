import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Signin = ({setCurrentUser}) => {

  const navigate = useNavigate();

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')


  const handleSubmit = (event) => {
    event.preventDefault()
    fetch('/api/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({username, password})
    })
      .then(res => {
        if (res.ok) {
          res.json().then(user => {
            if (user.type === 'Contractor') {
              navigate('/create-job')
              console.log(user.type)
            }
            if (user.type === 'Musician') {
              navigate('/find-work')
              console.log(user.type)
            }
            setCurrentUser(user)
          })
        } else {
          res.json().then(errors => {
            console.error(errors)
          })
        }
      })
  }

  return (
    <div>
        <form onSubmit={handleSubmit}>
          <h1>Sign In</h1>
        <p>
          <label htmlFor="username">Username </label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </p>
        <p>
          <label htmlFor="password">Password </label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </p>
          <input type='submit' value='Login' />
        </form>

        <h4>Don't have an account? <button><Link to="/signup">Sign up</Link></button></h4>
    </div>
  )
}

export default Signin