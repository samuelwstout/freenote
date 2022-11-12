import React, { useState } from 'react'

const CallEmailConfirmation = () => {

    const [email, setEmail] = useState('')

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
        .then(console.log)
        setEmail('')
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor='email'>Email: </label>
            <input name='email' value={email} onChange={(e) => setEmail(e.target.value)} />
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default CallEmailConfirmation