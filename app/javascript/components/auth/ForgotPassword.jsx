import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const ForgotPassword = () => {

    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch('/api/forgot_password', {
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
        <p>Request password reset:</p>
            <form onSubmit={handleSubmit}>
            <input required id="forgotpasswordemail" onChange={(e) => setEmail(e.target.value)} name="email" placeholder="email" type="email" value={email} />
            <button>Submit</button>
            </form>
        {message &&
        <div>
            <p>{message}</p>
            <button onClick={() => navigate('/')}>Go back</button>
        </div>
        }
    </div>
  )
}

export default ForgotPassword