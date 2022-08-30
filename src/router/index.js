import React from "react";
import { Navigate } from "react-router-dom";

import Login from "../views/login";
import Register from "../views/register";
import Home from "../views/home";
import Fight from "../views/fight";
import Mine from "../views/mine";
import Operation from "../views/operation";
import NoFound from "../views/no-found";

// const Login = React.lazy(() => import("../views/login"))
// const Register = React.lazy(() => import("../views/register"))

const routes = [
  {
    path: '/',
    element: <Navigate to='/login' />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/register',
    element: <Register />
  },
  {
    path: '/home',
    element: <Home />,
    children: [
      {
        path: '/home',
        element: <Navigate to='/home/fight' />
      },
      {
        path: '/home/fight',
        element: <Fight />
      },
      {
        path: '/home/mine',
        element: <Mine />
      },
      {
        path: '/home/operation',
        element: <Operation />
      }
    ]
  },
  {
    path: '/*',
    element: <NoFound />
  }
]

export default routes