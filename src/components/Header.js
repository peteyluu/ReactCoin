import React from 'react';
import logo from '../assets/logo.png';
import '../css/header.css';

const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="logo" className="header-logo" />
    </div>
  );
};

export default Header;
