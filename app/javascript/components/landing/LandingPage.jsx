import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const LandingPage = ({currentUser, setCurrentUser}) => {

    // const navigate = useNavigate();

    // useEffect(() => {
    //   if (currentUser) {
        
    //   }
    // }, [currentUser])

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