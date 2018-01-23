import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
      <h1> SoapBox </h1>
        <ul className="navLinks">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/books">See all books</Link></li>
        </ul>
    </div>
    );
};

export default Header;

