import React from 'react';
import '../styles/Navbar.css';

const Navbar = ({ toggleDarkMode, darkMode }) => {
  return (
    <nav className="navbar">
      <h1>Portfolio</h1>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <button onClick={toggleDarkMode} className="dark-mode-toggle">
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </nav>
  );
};

export default Navbar;