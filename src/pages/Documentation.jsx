import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Button from '../components/UI/Button';
import './Documentation.css';

const Documentation = () => {
  return (
    <div className="docs-page">
      <div className="docs-sidebar glass">
        <div className="sidebar-header">
          <Link to="/" className="sidebar-logo thin neon-glow">TRACESNITCH <span className="text-muted">Docs</span></Link>
          <div className="doc-version text-muted mt-2">v2.4.0-stable</div>
        </div>

        <nav className="docs-nav mt-8">
          <div className="nav-group">
            <div className="group-title uppercase tracking-widest">Core Documentation</div>
            <Link to="/docs" className="nav-item active">Introduction</Link>
            <Link to="/docs/quickstart" className="nav-item">Quickstart</Link>
            <Link to="/docs/auth" className="nav-item">Authentication</Link>
            <Link to="/docs/architecture" className="nav-item">Architecture</Link>
            <Link to="/docs/security" className="nav-item">Security</Link>
          </div>
        </nav>

        <div className="sidebar-footer mt-auto">
          <div className="system-status flex items-center gap-2 mb-4">
            <span className="status-dot green"></span>
            <span className="text-muted" style={{ fontSize: '10px' }}>System Online</span>
          </div>
          <Button variant="outline" className="btn-full text-xs">Offline PDF</Button>
        </div>
      </div>

      <main className="docs-main">
        <header className="docs-header glass">
          <div className="header-links">
            <Link to="/docs">Docs</Link>
            <Link to="/api">API</Link>
            <Link to="/changelog">Changelog</Link>
            <Link to="/status">Status</Link>
          </div>
          
          <div className="header-actions">
            <div className="search-box glass">
              <span className="icon">🔍</span>
              <input type="text" placeholder="Search documentation..." />
            </div>
            <span className="icon ml-4">📖</span>
            <span className="icon ml-4">⚙️</span>
          </div>
        </header>

        <div className="docs-content container">
          <section className="hero-section mt-12">
            <h1 className="hero-title" style={{ fontSize: '4rem' }}>Digital <span className="neon-glow">Intelligence</span> <br /> at Scale.</h1>
            <p className="hero-subtitle text-lg mt-6" style={{ maxWidth: '800px' }}>
              TraceSnitch provides an impenetrable logging and tracing architecture 
              designed for modern distributed systems. Monitor, analyze, and secure your 
              data streams in real-time with zero-latency overhead.
            </p>
            <div className="hero-actions mt-8">
              <Button variant="primary">Get Started →</Button>
              <Button variant="outline" className="ml-4">View Sample API</Button>
            </div>
          </section>

          <section className="docs-section mt-20">
            <h2 className="section-title">AUTHENTICATION PROTOCOLS</h2>
            
            <div className="protocol-grid mt-8">
              <div className="protocol-card glass">
                <div className="card-header">
                  <span className="icon neon-glow">✺</span>
                  <span className="protocol-id">PROTOCOL_01</span>
                </div>
                <h3 className="mt-4">JWT-S Key Exchange</h3>
                <p className="text-muted mt-2">
                  Our proprietary Secure-JSON Web Token standard utilizes asymmetric encryption via ECC (Elliptic Curve Cryptography) for stateless, multi-tenant authentication environments.
                </p>
              </div>

              <div className="protocol-card glass">
                <div className="card-header">
                  <span className="icon neon-glow">💠</span>
                  <span className="protocol-id">PROTOCOL_02</span>
                </div>
                <h3 className="mt-4">Hardware Handshake</h3>
                <p className="text-muted mt-2">
                  For enterprise nodes, we support TPM-based hardware verification. This ensures that only physically authenticated devices can initiate a TraceSnitch stream.
                </p>
              </div>
            </div>

            <div className="code-block glass mt-12">
              <div className="code-header">
                <div className="dots"><span></span><span></span><span></span></div>
                <div className="filename">AUTHENTICATE.JS</div>
                <span className="copy-icon">📋</span>
              </div>
              <pre>
                <code>
{`01 const trace = require('@tracesnitch/node');
02
03 const client = new trace.Sentinel({
04   apiKey: process.env.TS_API_KEY,
05   protocol: 'phanton_ecc',
06   region: 'v-us-east-4'
07 });
08
09 await client.establishHandshake();`}
                </code>
              </pre>
            </div>
          </section>

          <section className="docs-grid mt-20 mb-20">
            <div className="feature-highlight glass">
              <div className="highlight-content">
                <h3 className="neon-glow uppercase tracking-widest text-sm">Architecture Node</h3>
                <p className="mt-4 italic text-muted">"The system utilizes a distributed ledger of logs that ensures immutability across 48 global availability zones."</p>
              </div>
              <div className="highlight-visual">
                <div className="node-icon">⬢⬢⬢</div>
              </div>
            </div>

            <div className="feature-list">
              <div className="feature-item">
                <div className="icon-wrap glass"><span className="icon neon-glow">⚡</span></div>
                <div className="text">
                  <div className="font-bold">Zero-Lag Injection</div>
                  <div className="text-muted text-sm">Sub-3ms latency from event trigger to dashboard rendering.</div>
                </div>
              </div>
              <div className="feature-item mt-8">
                <div className="icon-wrap glass"><span className="icon neon-glow">🔒</span></div>
                <div className="text">
                  <div className="font-bold">End-to-End Encryption</div>
                  <div className="text-muted text-sm">AES-256 GCM encryption at rest and in transit. Your keys, your data.</div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Documentation;
