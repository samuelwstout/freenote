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
            <li><Link to="/create-job">Create Job</Link></li>
            <li><Link to="/my-jobs">My Jobs</Link></li>
            <li><Link to="/contractor-profile">Profile</Link></li>
            <p><button onClick={handleLogout}>Logout</button></p>
        </ul>
    </div>
  )
}

export default NavBarContractor