import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/UI/Button';
import './Auth.css';

const TwoFactor = () => {
  return (
    <div className="auth-page">
      <header className="auth-header">
        <Link to="/" className="nav-logo neon-glow">
          <img src="/logo.png" alt="" style={{ height: '32px', width: 'auto' }} />
          <span className="mfa-badge ml-4">MFA v2.4</span>
        </Link>
        <div className="header-meta">
          <span className="icon">🛡</span>
          <span className="icon">?</span>
        </div>
      </header>

      <main className="auth-main fade-in">
        <div className="auth-content text-center">
          <div className="protocol-notice mb-8" style={{ background: 'rgba(0, 255, 157, 0.05)', padding: '0.5rem', border: '1px solid var(--border-color)', fontSize: '0.65rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
            <span className="status-dot green"></span> ENCRYPTED HANDSHAKE PROTOCOL ACTIVE
          </div>

          <h1 className="auth-title" style={{ fontSize: '3rem' }}>Two-Factor Authentication</h1>
          <p className="auth-subtitle text-muted">Verification required. Enter the 6-digit code from your <br /> <span className="neon-glow">Authenticator App</span> to secure this session.</p>
          
          <div className="auth-card glass">
            <div className="otp-inputs mb-8" style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
              {[4, 9, 0, 0, 0, 0].map((digit, i) => (
                <div key={i} className="otp-digit glass" style={{ width: '60px', height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', fontWeight: '700', color: i < 2 ? 'var(--accent-green)' : 'var(--text-muted)' }}>
                  {digit}
                </div>
              ))}
            </div>

            <Link to="/loading-dashboard" style={{ display: 'block' }}>
              <Button variant="primary" size="lg" className="btn-full p-6">Verify Identity <span>→</span></Button>
            </Link>

            <div className="text-center mt-6" style={{ fontSize: '0.65rem', color: 'var(--text-muted)', letterSpacing: '2px' }}>
              RESEND CODE IN <span className="neon-glow">00:48</span>
            </div>

            <div className="alternative-methods mt-12 pt-8" style={{ borderTop: '1px solid var(--border-color)' }}>
              <p className="text-left uppercase tracking-widest text-muted mb-4" style={{ fontSize: '0.6rem' }}>Alternative Secure Methods</p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div className="method-card glass p-4 text-left" style={{ cursor: 'pointer' }}>
                  <div className="icon mb-2">💬</div>
                  <div className="font-bold uppercase" style={{ fontSize: '0.65rem' }}>SMS Protocol</div>
                  <div className="text-muted" style={{ fontSize: '0.6rem' }}>Send to ending in ••82</div>
                </div>
                <div className="method-card glass p-4 text-left" style={{ cursor: 'pointer' }}>
                  <div className="icon mb-2">🔑</div>
                  <div className="font-bold uppercase" style={{ fontSize: '0.65rem' }}>Recovery Key</div>
                  <div className="text-muted" style={{ fontSize: '0.6rem' }}>Use 24-word paper key</div>
                </div>
              </div>
            </div>
          </div>

          <div className="auth-footer-meta mt-4" style={{ justifyContent: 'space-between', fontSize: '0.6rem' }}>
            <span>IP: 192.168.1.104 LOC: 40.7128° N, 74.0060° W</span>
            <span><span className="status-dot green"></span> LIVE SESSION SECURE</span>
          </div>
        </div>
        
        <div className="sidebar-text" style={{ position: 'absolute', left: '20px', top: '50%', transform: 'translateY(-50%) rotate(-90deg)', fontSize: '0.65rem', color: 'var(--text-muted)', letterSpacing: '4px' }}>
          AUTHORIZATION _ PHASE _ 02
        </div>
      </main>

      <footer className="auth-page-footer">
        <div className="copyright text-muted">TRACESNITCH OS</div>
        <div className="footer-links" style={{ flex: '1', justifyContent: 'center' }}>
          <span className="text-muted">© 2024 TRACESNITCH. ENCRYPTED ENVIRONMENT.</span>
        </div>
        <div className="footer-links">
          <a href="#">Privacy Protocol</a>
          <a href="#">Security Whitepaper</a>
          <a href="#">Terms of Access</a>
        </div>
      </footer>
    </div>
  );
};

export default TwoFactor;
