import React from 'react';
import { useDarkMode } from '../hooks/useDarkMode';

const Navbar = () => {

  const [darkMode, setDarkMode] = useDarkMode(false);
  
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  
  return (
    <nav className="navbar">
      <h1>Women's WORLD CUP Players List</h1>
      <div className="lights">
        <h6>Lights ON</h6>
        <div className="dark-mode__toggle">
          <div
            onClick={toggleMode}
            className={darkMode ? 'toggle toggled' : 'toggle'}
          />
        </div>
        <h6>Lights OFF</h6>
      </div>
    </nav>
  );
};

export default Navbar;
