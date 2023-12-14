import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Users from './Components/Users.jsx';
import User from './Components/User.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
     path: "/users",
     element: <Users/>,
     loader: () => fetch('http://localhost:5000/users')
  },
  {
     path: '/users/:id' ,
     element: <User/>,
     loader: ({params}) => fetch(` http://localhost:5000/users/${params.id}`)
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
