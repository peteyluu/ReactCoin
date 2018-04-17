import React from 'react';
import { Link } from 'react-router-dom';
import Search from './Search';
import logo from '../assets/logo.svg';
import '../css/header.css';

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <img src={logo} className="header-logo" alt="logo" />
        <span className="header-logo-text">Coin</span>
      </Link>
      <Search />
    </div>
  );
};

export default Header;
