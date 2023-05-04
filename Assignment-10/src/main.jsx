import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Nav from './components/Nav/Nav';
import Home from './components/Home/Home';
import Blog from './components/Blog/Blog';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Chef from './components/Chef/Chef';
import Recipes from './components/Recipes/Recipes';
import Recipe from './components/Recipe/Recipe';
import NavChef from './components/NavChef/NavChef';
import NavRecipes from './components/NavRecipes/NavRecipes';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Nav></Nav>,
    children: [
      {
        path: '/home',
        element: <Home></Home>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signup',
        element: <Signup></Signup>
      },
      {
        path: '/chef',
        element: <Chef></Chef>
      },
      {
        path: '/recipe',
        element: <Recipe></Recipe>
      },
      {
        path: '/chefs',
        element: <NavChef></NavChef>
      },
      {
        path: '/recipes',
        element: <NavRecipes></NavRecipes>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
