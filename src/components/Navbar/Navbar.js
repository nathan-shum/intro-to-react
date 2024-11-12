// src/components/Navbar/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link to navigate between pages
import './Navbar.css'; // Import the CSS file for styling

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/nothome">Not Home</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar; // Always export your components so they can be imported in other files