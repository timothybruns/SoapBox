import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
      <div className="topbar">
        <h1 className="logo">
          <Link to="/"> SoapBox </Link>
            </h1>
            <div className="pull-right">
              <a> Logout </a>
              <input type="search-bar" class="searchTerm" placeholder="Search"></input>
              <input type="submit"></input>
            </div>
          </div>
        <ul className="navLinks">
            <Link to="/books"><div   className="bookCircle"><div className="innerText">Books</div></div></Link>
            <Link to="/articles"><div className="articleCircle"><div className="innerText">Articles</div></div></Link>
            <Link to="/podcasts"><div className="podcastCircle"><div className="innerText">Podcasts</div></div></Link>
        </ul>
    </div>
    );
};

export default Header;

