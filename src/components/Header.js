import React from 'react';
import logo from '../assets/logo.svg';
import '../css/header.css';

const Header = () => {
  return (
    <div className="header">
      <img src={logo} className="header-logo" alt="logo" />
      <span className="header-logo-text">Coin</span>
    </div>
  );
};

export default Header;
