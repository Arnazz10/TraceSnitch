import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Button from '../components/UI/Button';
import './Pricing.css';

const Pricing = () => {
  return (
    <div className="pricing-page">
      <Navbar />
      
      <main className="container section">
        <div className="pricing-header text-center">
          <h1 className="hero-title">Scale your <span className="neon-glow">Security</span> <br /> at Digital Velocity.</h1>
          <p className="hero-subtitle mx-auto">
            Choose the intelligence tier that matches your infrastructure's complexity. 
            Encrypted, audited, and always active.
          </p>
          
          <div className="billing-toggle glass">
            <span className="active">MONTHLY</span>
            <span className="inactive">ANNUAL <span className="neon-glow">-20%</span></span>
          </div>
        </div>

        <div className="pricing-grid">
          <div className="price-card glass">
            <div className="price-header">
              <h3 className="uppercase tracking-widest">Starter</h3>
              <p className="text-muted">For independent investigators.</p>
            </div>
            <div className="price-amount">
              <span className="currency">$</span>0<span className="period">/mo</span>
            </div>
            <ul className="price-features">
              <li><span className="text-green">✔</span> 50 scans/month</li>
              <li><span className="text-green">✔</span> 1 camera feed</li>
              <li><span className="text-green">✔</span> Basic defect detection</li>
              <li><span className="text-green">✔</span> Email reports</li>
            </ul>
            <Button variant="outline" className="btn-full mt-auto">Initialize Free</Button>
          </div>

          <div className="price-card glass featured">
            <div className="featured-badge neon-glow">RECOMMENDED</div>
            <div className="price-header">
              <h3 className="uppercase tracking-widest">Pro</h3>
              <p className="text-muted">For enterprise-grade surveillance.</p>
            </div>
            <div className="price-amount">
              <span className="currency">$</span>2,999<span className="period">/mo billed annually</span>
            </div>
            <ul className="price-features">
              <li><span className="text-green">✔</span> Unlimited scans</li>
              <li><span className="text-green">✔</span> Up to 4 camera feeds</li>
              <li><span className="text-green">✔</span> Advanced AI detection</li>
              <li><span className="text-green">✔</span> Real-time API access</li>
              <li><span className="text-green">✔</span> Priority support</li>
            </ul>
            <Button variant="primary" className="btn-full mt-auto">Deploy Enterprise</Button>
          </div>
        </div>

        <div className="trust-badges mt-20">
          <div className="trust-item">
            <span className="icon">🛡</span>
            <span>SOC2 COMPLIANT</span>
          </div>
          <div className="trust-item">
            <span className="icon">🔒</span>
            <span>END-TO-END ENCRYPTION</span>
          </div>
          <div className="trust-item">
            <span className="icon">📂</span>
            <span>OPEN SOURCE CORE</span>
          </div>
          <div className="trust-item">
            <span className="icon">🌐</span>
            <span>24/7 INTELLIGENCE</span>
          </div>
        </div>
      </main>

      <footer className="footer container">
        <div className="footer-logo neon-glow">TRACESNITCH</div>
        <div className="footer-links">
          <span>© 2024 TraceSnitch Intelligence Systems. Encrypted Connection Active.</span>
        </div>
        <div className="footer-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Security Audit</a>
          <a href="#">Status</a>
        </div>
      </footer>
    </div>
  );
};

export default Pricing;
