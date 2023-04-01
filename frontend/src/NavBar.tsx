import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg">
      <p className="navbar-brand">JHMC</p>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/Podcast" className="nav-link">
              Podcast
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/MovieList" className="nav-link">
              MovieList
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
