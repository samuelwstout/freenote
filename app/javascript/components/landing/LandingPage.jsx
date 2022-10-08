import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

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
            <h3>a job board for freelance musicians</h3>
            <button><Link to="/signin">Sign in</Link></button>
            <button><Link to="/signup">Sign up</Link></button>
        </div>
    )
}

export default LandingPage