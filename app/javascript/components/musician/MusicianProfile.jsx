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
      <h3>First name: Insert here</h3>
        <h3>Last name: Insert here</h3>
        <h3>Password: Insert here</h3>
        <h3>Instrument(s): Insert here</h3>
        <h3>Location: Insert here</h3>
        <h3>Bio: Insert here</h3>
        <h3>Media: Insert</h3>
        <button>Edit account</button>
        <button>Delete account</button>
    </div>
  )
}

export default MusicianProfile