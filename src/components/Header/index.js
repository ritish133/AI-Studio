// Header.js
import React from 'react';
import './index.css'; // Create a separate CSS file for header styling
import Logo from '../../assets/PageLogo.png'; // Import your logo

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={Logo} alt="Website Logo" className="logo" />
      </div>
    </header>
  );
};

export default Header;
