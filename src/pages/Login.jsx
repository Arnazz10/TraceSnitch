import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/UI/Button';
import './Auth.css';

const Login = () => {
  return (
    <div className="auth-page">
      <header className="auth-header">
        <Link to="/" className="nav-logo neon-glow">
          <img src="/logo.png" alt="" style={{ height: '32px', width: 'auto' }} />
        </Link>
        <div className="header-meta">
          <span className="icon">🛡</span>
          <span className="icon">?</span>
        </div>
      </header>

      <main className="auth-main fade-in">
        <div className="auth-content text-center">
          <h1 className="auth-title">SYSTEM ACCESS</h1>
          <p className="auth-subtitle uppercase tracking-widest text-muted">Encrypted Terminal Entry Required</p>
          
          <div className="auth-card glass">
            <div className="form-group">
              <label>Identification Hash</label>
              <div className="input-wrapper">
                <input type="email" placeholder="USER@TRACESNITCH.INT" />
                <span className="input-icon">@</span>
              </div>
            </div>

            <div className="form-group">
              <label>Secure Cipher</label>
              <div className="input-wrapper">
                <input type="password" placeholder="••••••••••••" />
                <span className="input-icon">👁</span>
              </div>
            </div>

            <div className="flex justify-between items-center mb-6">
              <label className="checkbox-container">
                <input type="checkbox" />
                <span className="checkmark"></span>
                Maintain Session
              </label>
              <Link to="/recovery" className="link-muted">Recovery Protocol?</Link>
            </div>

            <Link to="/loading-home" style={{ display: 'block' }}>
              <Button variant="primary" size="lg" className="btn-full">Access System</Button>
            </Link>

            <div className="auth-footer-meta">
              <span className="status-dot green"></span> NODES: SECURE
              <span className="status-dot green ml-4"></span> SSL: ACTIVE
            </div>
          </div>

          <p className="security-notice text-muted uppercase">
            Unauthorized access attempts are logged <br />
            and traced to source origin.
          </p>
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

export default Login;
