import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar glass">
      <div className="nav-container">
        <Link to="/" className="nav-logo neon-glow flex items-center gap-2">
          <img src="/logo.png" alt="Logo" style={{ width: '28px', height: 'auto' }} />
          TRACESNITCH
        </Link>
        <div className="nav-links">
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/docs">Docs</Link>
          <Link to="/login" className="nav-login">Login</Link>
          <Link to="/signup" className="nav-btn btn btn-primary btn-sm">Sign Up</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
