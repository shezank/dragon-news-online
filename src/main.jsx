import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import AuthProvider from './Shard/AuthProvider/AuthProvider';
import NewsDetails from './Pages/NewsDetails/NewsDetails';
import PrivateRoute from './Shard/PrivateRoute/PrivateRoute';
import ErrorPage from './Pages/ErrorPage/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: ()=> fetch('/news.json') 
      },
      {
        path: "/catagory/:id",
        element: <Home></Home>
      },
      {
        path: "/news/:id",
        element: <PrivateRoute><NewsDetails></NewsDetails></PrivateRoute>,
        loader: ()=> fetch("/news.json")

      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
