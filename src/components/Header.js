import React from 'react';
import Navbar from './Navbar.js';
import logo from '../image/logo.png';

const Header = () => {
  return (
    <header>
      <div className='logo-section'>
        <img src={logo} alt='logo.png' />
      </div>
      <Navbar />
    </header>
  );
};

export default Header;
