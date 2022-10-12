import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import NavBarMusician from '../nav/NavBarMusician';

const MusicianProfile = ({setCurrentUser, currentUser}) => {

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
      <NavBarMusician setCurrentUser={setCurrentUser} />
        <h3>First name: {currentUser.first_name}</h3>
        <h3>Last name: {currentUser.last_name}</h3>
        <h3>Username: {currentUser.username}</h3>
    </div>
  )
}

export default MusicianProfile