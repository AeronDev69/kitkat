import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider,} from "react-router-dom"
import "./index.css"
import Login from './routes/Login';
import Home from './routes/Home';
import Movie from './routes/Movie';

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/movie",
    element: <Movie />
  }
])

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <RouterProvider router={router}/>
);