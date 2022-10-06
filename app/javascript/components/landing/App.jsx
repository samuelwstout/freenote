import React from 'react'
import { Link } from 'react-router-dom'

// App is the landing page ('/')

const App = () => {

  return (
    <div>
      <h1>Freenote</h1>
      <h3>a job board for freelance musicians</h3>
      <button><Link to="/signin">Sign in</Link></button>
      <button><Link to="/signup">Sign up</Link></button>
    </div>
  );
};

export default App;