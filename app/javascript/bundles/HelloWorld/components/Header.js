import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
      <h1 className="logo"><Link to="/"> SoapBox </Link></h1>
        <ul className="navLinks">
            <Link to="/books"><div className="bookCircle"><div className="innerText">Books</div></div></Link>
            <Link to="/articles"><div className="articleCircle"><div className="innerText">Articles</div></div></Link>
            <Link to="/podcasts"><div className="podcastCircle"><div className="innerText">Podcasts</div></div></Link>
        </ul>
    </div>
    );
};

export default Header;

