import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/UI/Button';
import './Auth.css';

const Recovery = () => {
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
          <div className="auth-card glass text-center">
            <h1 className="auth-title mb-4" style={{ fontSize: '2.5rem' }}>Recover Access</h1>
            <p className="auth-subtitle text-muted mb-8">Enter your encrypted identifier to receive <br /> a temporary decryption link.</p>
            
            <div className="form-group text-left">
              <label>Node Identifier (Email)</label>
              <div className="input-wrapper">
                <input type="email" placeholder="operator@tracesnitch.internal" />
              </div>
            </div>

            <Button variant="primary" size="lg" className="btn-full mb-6">Send Recovery Link <span>→</span></Button>

            <Link to="/login" className="link-muted uppercase tracking-widest" style={{ fontSize: '0.65rem' }}>
              ← Back to Secure Login
            </Link>
          </div>
          
          <div className="text-center mt-8 text-muted uppercase tracking-widest" style={{ fontSize: '0.6rem' }}>
            🔒 End-to-end encrypted tunnel
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

export default Recovery;
