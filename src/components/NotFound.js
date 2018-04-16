import React from 'react';
import { Link } from 'react-router-dom';
import '../css/notfound.css';

const NotFound = () => (
  <div className="notfound">
    <h1 className="notfound-title">
      Page does not exist!
    </h1>
    <Link to="/" className="notfound-link">
      Homepage
    </Link>
  </div>
);

export default NotFound;
