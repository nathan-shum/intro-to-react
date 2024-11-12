// src/App.js
import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom'; // Import useLocation
import Navbar from './components/Navbar/Navbar'; // Import Navbar
import Home from './pages/Home/Home'; // Import Home component
import NotHome from './pages/NotHome/NotHome'; // Import NotHome component

const App = () => {
  const location = useLocation(); // Get the current location

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar /> 
      {/* Conditionally render title and instructions */}
      {location.pathname === '/' && (
        <div className="flex-grow flex flex-col justify-center items-center bg-gray-100">
          <h1 className="text-4xl font-bold mb-4">My Website Yay!</h1>
          <p className="text-lg">Click on the links above to navigate.</p>
        </div>
      )}
      <Routes> 
        <Route path="/home" element={<Home />} />
        <Route path="/nothome" element={<NotHome />} />
      </Routes>
    </div>
  );
};

export default App;