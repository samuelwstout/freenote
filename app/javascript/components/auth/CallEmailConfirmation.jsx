import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const CallEmailConfirmation = () => {

    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('/api/call_email_confirmation', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(email)
        })
        .then(r => r.json())
        .then(data => {
          setMessage(data.alert)
        })
        setEmail('')
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor='email'>Email: </label>
            <input name='email' value={email} onChange={(e) => setEmail(e.target.value)} />
            <button type='submit'>Submit</button>
            {message && 
              <h2>{message}</h2>
            }
        </form>
        <button onClick={() => navigate('/')}>Go back</button>
    </div>
  )
}

export default CallEmailConfirmation