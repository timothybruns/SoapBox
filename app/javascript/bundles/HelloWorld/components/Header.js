import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
      <h1> This is the header </h1>
        <ul className="navLinks">
            <li><Link to="/">Home</Link></li>
            <li id="newBook"><Link to="/books/new">Create Book</Link></li>
        </ul>
    </div>
    );
};

export default Header;

