import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
      <div className="topbar">
        <div className="logo">
          <Link to="/"><h1> SoapBox </h1> </Link>
              <span className="logout"><a> Logout </a>
              <input type="search-bar" class="searchTerm" placeholder="Search"></input>
              <input type="submit"></input></span>
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

