import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

const ResetPassword = () => {

    const navigate = useNavigate()

    const [token, setToken] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')
    const [pwNoMatch, setPwNoMatch] = useState('')
    const [success, setSuccess] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== passwordConfirmation) {
            setPwNoMatch("Passwords don't match")
        } else {
            fetch('/api/reset_password', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    token,
                    email,
                    password
                })
            })
            .then(r => r.json())
            .then(data => {
                setSuccess(data.alert)
            })
        }
    setToken('')
    setEmail('')
    setPassword('')
    setPasswordConfirmation('')
    }

  return (
    <div>
        <p>Reset Password:</p>
        <form onSubmit={handleSubmit}>
            <label for="token">Token:</label>
            <input required id="token" onChange={(e) => setToken(e.target.value)} name="token" placeholder="token" type="token" value={token} />
            <p>The code that was emailed to you. This is case-sensitive.</p>
            <label for="email">Email:</label>
            <input required id="email" onChange={(e) => setEmail(e.target.value)} name="email" placeholder="email" type="email" value={email} />
            {pwNoMatch &&
            <h1>{pwNoMatch}</h1>
            }
            <label for="password">New password:</label>
            <input required id="password" onChange={(e) => setPassword(e.target.value)} name="password" placeholder="password" type="password" value={password} />
            <p>Set your new password here.</p>
            <label for="password_confirmation">Confirm new password:</label>
            <input required id="password_confirmation" onChange={(e) => setPasswordConfirmation(e.target.value)} name="password_confirmation" placeholder="password confirmation" type="password" value={passwordConfirmation}/>
            <button type="secondary">Reset Password</button>
        </form>
        {success &&
        <div>
            <h1>{success}</h1>
            <button onClick={() => navigate('/')}>Go to app</button>
        </div>
        }
    </div>
  )
}

export default ResetPassword
