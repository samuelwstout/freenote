import React, { useState } from 'react'

const ConfirmEmail = () => {

    const [email, setEmail] = useState('')
    const [token, setToken] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('/api/submit_email_confirmation', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                confirm_token: token,
                email
            })
        })
        .then((r) => {
            if (r.ok) {
                r.json().then((data) => {
                    setMessage(data.message)
                })
            } else {
                setMessage('Incorrect credentials')
            }
        })
    setEmail('')
    setToken('')
    }

  return (
    <div>
        <h1>Confirm email</h1>
        <form onSubmit={handleSubmit}>
            <h3>Email:</h3>
            <input name='email' onChange={(e) => setEmail(e.target.value)} value={email} />
            <h3>Token:</h3>
            <input name='token' onChange={(e) => setToken(e.target.value)} value={token} />
            <button type='submit'>Submit</button>
        </form>
        {message && 
            <h2>{message}</h2>
        }
    </div>
  )
}

export default ConfirmEmail