import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import NavBarMusician from '../nav/NavBarMusician';

const MusicianProfile = ({setCurrentUser, currentUser, musicians, musicianProfile}) => {

  let musician;

  if (Object.keys(currentUser).length !== 0) {
    musician = musicians.find(item => item.id === currentUser.id)
  }

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
        {musician && 
        <div>
          <h3>First name: {musician.first_name}</h3>
          <h3>Last name: {musician.last_name}</h3>
          <h3>Username: {musician.username}</h3>
          {Object.keys(musicianProfile).length !== 0 && 
          <div>
            <h3>Email: {musicianProfile.email}</h3>
            <h3>Location: {musicianProfile.location}</h3>
            <h3>Instrument: {musicianProfile.instrument}</h3>
            <h3>Bio: {musicianProfile.bio}</h3>
            <h3>Media Url: {musicianProfile.media_url}</h3>
          </div>
          }
          {musician.musician_profile &&
          <div>
            <h3>Email: {musician.musician_profile.email}</h3>
            <h3>Location: {musician.musician_profile.location}</h3>
            <h3>Instrument: {musician.musician_profile.instrument}</h3>
            <h3>Bio: {musician.musician_profile.bio}</h3>
            <h3>Media Url: {musician.musician_profile.media_url}</h3>
          </div>
          }
        </div>
        }
    </div>
  )
}

export default MusicianProfile