import React, {useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Signup = ({currentUser}) => {

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
        <h1>Join as musician or contractor</h1>
        <button><Link to="/signup-as-contractor">I'm a contractor, hiring for a project</Link></button>
        <button><Link to="/signup-as-musician">I'm a musician, looking for work</Link></button>
    </div>
  )
}

export default Signup