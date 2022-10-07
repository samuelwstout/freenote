import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import NavBarContractor from '../nav/NavBarContractor';

const ContractorProfile = ({currentUser}) => {

  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser == null) {
      navigate('/')
    }
  }, [currentUser])

  return (
    <div>
      <NavBarContractor />
        <h3>First name: First name</h3>
        <h3>Last name: Last name</h3>
        <h3>Email: email</h3>
        <h3>Password: password</h3>
        <button>Edit account</button>
        <button>Delete account</button>
    </div>
  )
}

export default ContractorProfile