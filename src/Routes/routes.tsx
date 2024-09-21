import React from 'react';
import { createBrowserRouter , RouterProvider } from "react-router-dom";
import MainLayout from '../layouts/MainLayout';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';

const router = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout />,
      children:[
        {
          path:'/' , 
          element:<HomePage/>
        },  {
          path:'/about' , 
          element:<AboutPage/>
        }

      ]
    },


]); 
const AppRoutes: React.FC = () => {
  return <RouterProvider router={router} />;
};
export default AppRoutes;
