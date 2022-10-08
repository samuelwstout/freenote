import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import NavBarMusician from '../nav/NavBarMusician';

const FindWork = ({currentUser, setCurrentUser}) => {
  
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
        <input placeholder='search'></input>
        <input type='submit'></input>

        <div>
            <h2>Headline</h2>
            <h3>budget</h3>
            <h3>date</h3>
            <h3>location</h3>
            <h3>Bio</h3>
            <button>Save Job</button>
            <button>Apply</button>
        </div>
        <p>So on...</p>
      
    </div>
    )
}

export default FindWork