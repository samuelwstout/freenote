import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const SignupAsMusician = ({setCurrentUser}) => {

// const navigate = useNavigate()

const [firstName, setFirstName] = useState('')
const [lastName, setLastName] = useState('')
const [username, setUsername] = useState('')
const [password, setPassword] = useState('')
const [passwordConfirmation, setPasswordConfirmation] = useState('')

const handleSubmit = (e) => {
    e.preventDefault()

    fetch('/api/signup_as_musician', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        first_name: firstName,
        last_name: lastName,
        username,
        password,
        password_confirmation: passwordConfirmation
      })
    })
      .then(res => {
        if (res.ok) {
          res.json().then(user => {
            setCurrentUser(user)
            // navigate('/find_work')
          })
        } else {
          res.json().then(errors => {
            console.error(errors)
          })
        }
      })
      setFirstName('')
      setLastName('')
      setUsername('')
      setPassword('')
      setPasswordConfirmation('')
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
          <h1>Sign up to find work</h1>
          <p>
            <label htmlFor='firstname'>First Name </label>
            <input type="text" name="first_name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
          </p>
          <p>
            <label htmlFor='lastname'>Last Name </label>
            <input type="text" name="last_name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
          </p>
          <p>
            <label htmlFor='username'>Username </label>
            <input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
          </p>
          <p>
            <label htmlFor='password'>Password </label>
            <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </p>
          <p>
          <label htmlFor='password_confirmation'>Password Confirmation </label>
          <input type="password" name="password_confirmation" value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)} />
          </p>
          <input type='submit' />
        </form>
        <h4>Already have an account? <button><Link to="/signin">Sign in</Link></button></h4>
    </div>
  )
}

export default SignupAsMusician