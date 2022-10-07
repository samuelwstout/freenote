import React from 'react'
import { Link, useNavigate } from 'react-router-dom' 

const NavBarContractor = ({setCurrentUser}) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    fetch('/api/logout', {
      method: 'DELETE',
      credentials: 'include'
    })
    .then(res => {
      if (res.ok) {
        setCurrentUser(null)
        navigate('/')
      }
    })
  }

  return (
    <div>
        <ul>
            <li><Link to="/">Freenote</Link></li>
            <li><Link to="/create_job">Create Job</Link></li>
            <li><Link to="/my_jobs">My Jobs</Link></li>
            <p><button onClick={handleLogout}>Logout</button></p>
        </ul>
    </div>
  )
}

export default NavBarContractor