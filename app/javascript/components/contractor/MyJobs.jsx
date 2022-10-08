import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import NavBarContractor from '../nav/NavBarContractor';

const MyJobs = ({currentUser, setCurrentUser}) => {

  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser) {
      if (currentUser.type === 'Musician') {
        navigate('/find-work')
      }
      if (Object.keys(currentUser).length === 0) {
        navigate('/')
      }
    }
  }, [currentUser])

  return (
    <div>
        <NavBarContractor setCurrentUser={setCurrentUser} />
        <h1>My Jobs</h1>
        <h2>Jobs go here</h2>
    </div>
  )
}

export default MyJobs