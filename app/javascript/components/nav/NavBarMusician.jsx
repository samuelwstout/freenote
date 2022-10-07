import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const NavBarMusician = ({setCurrentUser}) => {

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
      <li onClick={ handleLogout }>Freenote</li>
        <li><Link to="/find_work">Find Work</Link></li>
        <li><Link to="/my_applications">My Applications</Link></li>
        <p><button onClick={handleLogout}>Logout</button></p>
      </ul>
    </div>
  )
}

export default NavBarMusician