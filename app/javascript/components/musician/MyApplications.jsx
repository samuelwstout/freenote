import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import NavBarMusician from '../nav/NavBarMusician';

const MyApplications = ({ setCurrentUser, currentUser }) => {

  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser) {
      if (currentUser.type === 'Contractor') {
        navigate('/create-job')
      }
      if (Object.keys(currentUser).length === 0) {
        navigate('/')
      }
    }
  }, [currentUser])

  return (
    <div>
       <NavBarMusician setCurrentUser={setCurrentUser}/>
        <h2>My applications</h2>
        <h3>Headline           status: insert status</h3>
        <p>So on...</p>
    </div>
  )
}

export default MyApplications