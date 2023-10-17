import React from 'react'
import ReactDOM from 'react-dom/client'
 import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App';
import Student from './screens/student-login';
import Profesor from './screens/profesor-login';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1>Error</h1>,
  },
  {
    path: "/estudiante",
    element: <Student />,
  },
  {
    path: "/profesor",
    element: <Profesor />,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
