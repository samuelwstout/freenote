import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const ForgotPassword = () => {

    const navigate = useNavigate()

    const [email, setEmail] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch('/api/forgot_password', {
            credentials: 'include',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(email)
        })
        .then(r => r.json())
        .then(data => {
            console.log(data)
        })
        .catch(console.log)
        navigate('/')
    }

  return (
    <div>
        <p>Request password reset:</p>
            <form onSubmit={handleSubmit}>
            <input required id="forgotpasswordemail" onChange={(e) => setEmail(e.target.value)} name="email" placeholder="email" type="email" value={email} />
            <button>Submit</button>
         </form>
    </div>
  )
}

export default ForgotPassword