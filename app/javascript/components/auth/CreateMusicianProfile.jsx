import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const CreateMusicianProfile = ({currentUser}) => {

    const navigate = useNavigate()

    useEffect(() => {
      if (currentUser) {
        if (currentUser.type === 'Contractor') {
          navigate('/create-job')
        }
      }
      }, [currentUser])

      const [location, setLocation] = useState('')
      const [instrument, setInstrument] = useState('')
      const [bio, setBio] = useState('')
      const [mediaUrl, setMediaUrl] = useState('')

      const handleSubmit = (e) => {
        e.preventDefault();
        fetch('/api/musician_profiles', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                location,
                instrument,
                bio,
                media_url: mediaUrl,
                musician_id: currentUser.id
            })
        })
        .then(res => {
            if (res.ok) {
              res.json().then(data => {
                console.log(data)
                navigate('/find-work')
              })
            } else {
              res.json().then(errors => {
                console.error(errors)
              })
            }
          })
        setLocation('')
        setInstrument('')
        setBio('')
        setMediaUrl('')
      }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <h1>Create Musician Profile</h1>
            <p>
                <label htmlFor='location'>Location </label>
                <input type="text" name="location" value={location} onChange={(e) => setLocation(e.target.value)} />
            </p>
            <p>
                <label htmlFor='instrument'>Instrument </label>
                <input type="text" name="instrument" value={instrument} onChange={(e) => setInstrument(e.target.value)} />
            </p>
            <p>
                <label htmlFor='bio'>Bio </label>
                <input type="text" name="bio" value={bio} onChange={(e) => setBio(e.target.value)} />
            </p>
            <p>
                <label htmlFor='media_url'>Media Url </label>
                <input type="text" name="media_url" value={mediaUrl} onChange={(e) => setMediaUrl(e.target.value)} />
            </p>
            <input type='submit' />
        </form>
    </div>  
  )
}

export default CreateMusicianProfile