import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <div>
      <header>
        <nav>
          <h1>Logo</h1>

          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/login">Log in</Link></li>
          </ul>
        </nav>
      </header>
    </div>
  )
}