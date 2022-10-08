import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import NavBarContractor from '../nav/NavBarContractor'

const CreateJob = ({setCurrentUser, currentUser}) => {

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
      <h1>Create Job Post</h1>
        <form>
            <input placeholder='Headline'></input>
            <input placeholder='Description'></input>
            <input placeholder='Date(s)'></input>
            <input placeholder='Location'></input>
            <input placeholder='Budget'></input>
            <input type='submit'></input>
        </form>
    </div>
  )
}

export default CreateJob