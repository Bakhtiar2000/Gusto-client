import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import Main from '../Layout/Main';
import Login from '../Pages/Login/Login/Login';
import Register from '../Pages/Login/Register/Register';
import Home from '../Pages/Home/Home/Home';
import Blog from '../Pages/Blog/Blog';
import Contact from '../Pages/Contact/Contact';
import ErrorPage from '../Pages/Shared/ErrorPage/ErrorPage';

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children:[
        {
            path: '/',
            element: <Home></Home>,

        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/register',
            element: <Register></Register>
        },
        {
            path: '/blog',
            element: <Blog></Blog>
        },
        // {
        //     path: '/contact',
        //     element: <Contact></Contact>
        // }
      ]
      
    }
  ]);

export default router;