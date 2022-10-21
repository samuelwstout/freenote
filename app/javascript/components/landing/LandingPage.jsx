import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const LandingPage = ({currentUser}) => {

   const navigate = useNavigate()

    useEffect(() => {
    if (currentUser) {
      if (currentUser.type === 'Musician') {
        navigate('/find-work')
      }
      if (currentUser.type === 'Contractor') {
        navigate('/create-job')
      }
    }
    }, [currentUser])

    return (
      <div>
        <h1>Freenote</h1>
        <button onClick={() => navigate('/signin')}>Sign in</button>
        <button onClick={() => navigate('/signup')}>Sign up</button>
      </div>
    )
}
export default LandingPage