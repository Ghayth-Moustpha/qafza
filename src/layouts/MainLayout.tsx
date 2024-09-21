// src/components/Layout.tsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const MainLayout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <Nav />
      
      {/* Main Content */}
      <main className="flex-grow container mx-auto p-4">
        <Outlet />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MainLayout;
