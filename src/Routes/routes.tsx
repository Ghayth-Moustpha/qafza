import React from 'react';
import { createBrowserRouter , RouterProvider } from "react-router-dom";
import MainLayout from '../layouts/MainLayout';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import OurServicesPage from '../pages/OurServicesPage';
import OurProgramsPage from '../pages/OurProgramsPage';
import ContactUsPage from '../pages/ContactUsPage';
import LibraryPage from '../pages/LibraryPage';
import AdPage from '../pages/AdPage';
import BookingPage from '../pages/BookingPage';

const router = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout />,
      children:[
        {
          path:'/' , 
          element:<HomePage/>
        },  
        {
          path:'/academic' , 
          element:<OurProgramsPage/>
        },{
          path:"academic/ads" , 
          element : <AdPage />
        },
        {
          path:"/library" , 
          element: <LibraryPage/>
        },
        
         {
          path:'/services' , 

          element:<OurServicesPage/>
        },
        {
          path:'/about' , 
          element:<AboutPage/>
        }
        ,  {
          path:'/contact' , 
          element:<ContactUsPage/>
        }
        ,  {
          path:'/booking' , 
          element:<BookingPage/>
        }

      ]
    },


]); 
const AppRoutes: React.FC = () => {
  return <RouterProvider router={router} />;
};
export default AppRoutes;
