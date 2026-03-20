import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/UI/Button';
import './Auth.css';

const SignUp = () => {
  return (
    <div className="auth-page">
      <header className="auth-header">
        <Link to="/" className="nav-logo neon-glow">TRACESNITCH</Link>
        <div className="header-meta">
          <span className="icon">🛡</span>
          <span className="icon">?</span>
        </div>
      </header>

      <main className="auth-main fade-in">
        <div className="auth-content">
          <div className="text-center mb-6">
            <span className="security-badge uppercase text-muted" style={{ border: '1px solid var(--border-color)', padding: '2px 8px', fontSize: '10px' }}>
              Secure Environment Initialization
            </span>
            <h1 className="auth-title mt-4" style={{ fontSize: '3rem' }}>Create <span className="neon-glow">Identity.</span></h1>
            <p className="auth-subtitle text-muted">Join the encrypted network. Define your role and secure your operational credentials.</p>
          </div>
          
          <div className="auth-card glass">
            <div className="form-group">
              <label>Full Name</label>
              <div className="input-wrapper">
                <input type="text" placeholder="Johnathan Doe" />
                <span className="input-icon">👤</span>
              </div>
            </div>

            <div className="form-group">
              <label>Professional Email</label>
              <div className="input-wrapper">
                <input type="email" placeholder="j.doe@agency.security" />
                <span className="input-icon">@</span>
              </div>
            </div>

            <div className="form-group">
              <label>Password</label>
              <div className="input-wrapper">
                <input type="password" placeholder="••••••••••••" />
                <span className="input-icon">🔒</span>
              </div>
            </div>

            <div className="form-group">
              <label>Operational Role</label>
              <div className="input-wrapper">
                <select className="auth-select glass" style={{ width: '100%', background: 'transparent', border: '1px solid var(--border-color)', color: 'var(--text-primary)', padding: '0.875rem' }}>
                  <option>Select Assignment</option>
                  <option>Field Agent</option>
                  <option>Operations Analyst</option>
                  <option>System Architect</option>
                </select>
                <span className="input-icon">💼</span>
              </div>
            </div>

            <Link to="/dashboard" style={{ display: 'block' }}>
              <Button variant="primary" size="lg" className="btn-full">Create Account <span>→</span></Button>
            </Link>

            <div className="text-center mt-6" style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
              Already authenticated? <Link to="/login" className="neon-glow uppercase font-bold ml-2">Access Portal</Link>
            </div>
          </div>
        </div>
      </main>

      <footer className="auth-page-footer">
        <div className="copyright text-muted">© 2024 TRACESNITCH. ENCRYPTED ENVIRONMENT.</div>
        <div className="footer-links">
          <a href="#">Privacy Protocol</a>
          <a href="#">Security Whitepaper</a>
          <a href="#">Terms of Access</a>
        </div>
      </footer>
    </div>
  );
};

export default SignUp;
