import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import NavBarContractor from '../nav/NavBarContractor';

const MyJobs = ({currentUser}) => {

  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser == null) {
      navigate('/')
    }
  }, [currentUser])

  return (
    <div>
        <NavBarContractor />
        <h1>My Jobs</h1>
        <h2>Jobs go here</h2>
    </div>
  )
}

export default MyJobs