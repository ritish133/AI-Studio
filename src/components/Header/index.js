// Header.js
import React from 'react';
import './index.css';
import Logo from '../../assets/PageLogo.png'; 

const Header = () => {
  return (
    <header className="header h-16">
      <div className="logo-container">
        <img src={Logo} alt="AI Studio" className="logo h-16 w-36" />
      </div>
      <div className='w-full'>
        <ul className='flex flex-row justify-evenly items-center flex-wrap'>
          <a href='#products'>
            <li className='font-bold text-lg text-blue-700 hover:text-blue-800 transition-all'>Our Products</li>
          </a>
          <a href='#details'>
            <li className='font-bold text-lg text-blue-700 hover:text-blue-800 transition-all'>Details</li>
          </a>
          <a href='#tools'>
            <li className='font-bold text-lg text-blue-700 hover:text-blue-800 transition-all'>Tools Used</li>
          </a>
        </ul>
      </div>
    </header>
  );
};

export default Header;
