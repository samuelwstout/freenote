import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import App from '../components/landing/App';
import Signup from '../components/auth/Signup';
import Signin from '../components/auth/Signin';
import SignupAsContractor from '../components/auth/SignupAsContractor';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/signup',
    element: <Signup />
  },
  {
    path: '/signin',
    element: <Signin />
  },
  {
    path: '/signup-as-contractor',
    element: <SignupAsContractor />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);