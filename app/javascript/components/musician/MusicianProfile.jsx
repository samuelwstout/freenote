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
        {currentUser.musician_profile &&
        <div>
        <h3>Location: {currentUser.musician_profile.location}</h3>
        <h3>Instrument: {currentUser.musician_profile.instrument}</h3>
        <h3>Bio: {currentUser.musician_profile.bio}</h3>
        <h3>Media Url: {currentUser.musician_profile.media_url}</h3>
        </div>
        }
    </div>
  )
}

export default MusicianProfile