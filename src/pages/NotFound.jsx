import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/UI/Button';
import './Auth.css';

const NotFound = () => {
  return (
    <div className="auth-page flex-center h-screen">
      <div className="auth-content text-center">
        <h1 className="hero-title neon-glow" style={{ fontSize: '6rem' }}>404</h1>
        <p className="auth-subtitle text-muted mb-8">Access Denied. Node Identifier Not Found in Central Registry.</p>
        <Link to="/dashboard">
          <Button variant="primary">Return to Command Center</Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
