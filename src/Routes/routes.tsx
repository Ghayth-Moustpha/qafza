import React from 'react';
import { createBrowserRouter , RouterProvider } from "react-router-dom";
import MainLayout from '../layouts/MainLayout';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import OurServicesPage from '../pages/OurServicesPage';
import OurProgramsPage from '../pages/OurProgramsPage';
import ContactUsPage from '../pages/ContactUsPage';

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
        ,  {
          path:'/Services' , 
          element:<OurServicesPage/>
        }
        ,  {
          path:'/contact' , 
          element:<ContactUsPage/>
        }

      ]
    },


]); 
const AppRoutes: React.FC = () => {
  return <RouterProvider router={router} />;
};
export default AppRoutes;
