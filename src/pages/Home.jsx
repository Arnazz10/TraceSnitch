import React from 'react';
import Navbar from '../components/Navbar';
import Button from '../components/UI/Button';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <Navbar />
      
      <main>
        <section className="hero">
          <div className="container hero-content fade-in">
            <h1 className="hero-title">
              PRECISION <span className="neon-glow italic">BEYOND</span> PERCEPTION
            </h1>
            <p className="hero-subtitle">
              Deploying sub-micron fidelity neural scanning for next-generation hardware manufacturing. 
              Elimination of defects through advanced spectral analysis.
            </p>
            <div className="hero-actions">
              <Button size="lg" to="/monitor">Initiate Scan Protocol</Button>
              <Button variant="outline" size="lg" to="/docs">Technical Documents</Button>
            </div>
          </div>
          
          <div className="hero-visual glass">
            <div className="scan-line"></div>
            <div className="scan-grid"></div>
            <div className="circuit-paths">
              <div className="path horizontal p1"></div>
              <div className="path horizontal p2"></div>
              <div className="path vertical p3"></div>
              <div className="path vertical p4"></div>
              {/* Added Red and Blue Signals */}
              <div className="path horizontal p1 red small"></div>
              <div className="path horizontal p2 blue small"></div>
              <div className="path vertical p3 blue small"></div>
              <div className="path vertical p4 red small"></div>
            </div>
            <div className="scan-target"></div>
          </div>
        </section>

        <section className="features container section">
          <div className="section-header">
            <h2 className="section-title">INSPECTION <span className="neon-glow">LOGIC</span></h2>
            <p className="section-desc">
              Proprietary spatio-transformer networks identify thermal and structural anomalies
              with zero latency in high-speed production environments.
            </p>
          </div>
          
          <div className="feature-grid">
            <div className="feature-card glass">
              <div className="feature-icon neon-glow">◈</div>
              <h3>Sub-Micron Fidelity</h3>
              <p>Opto-electronic scanners resolve trace defects down to 0.1 microns, ensuring total integrity for aerospace hardware.</p>
            </div>
            
            <div className="feature-card glass">
              <div className="feature-icon neon-glow">◓</div>
              <h3>Real-Time ML</h3>
              <p>Edge processors inference complex categorical defects in under 10ms per board cycle.</p>
            </div>
            
            <div className="feature-card glass">
              <div className="feature-icon neon-glow">▤</div>
              <h3>Mesh Fabric</h3>
              <p>Synchronize data across global manufacturing lines for predictive yield optimization.</p>
            </div>
            
            <div className="feature-card glass">
              <div className="feature-icon neon-glow">▣</div>
              <h3>API-First Protocol</h3>
              <p>Seamless integration via gRPC into SCADA environments. Automated JSON reporting as standard.</p>
            </div>
          </div>
        </section>

        <section className="cta glass container">
          <div className="cta-content">
            <h2>HARDEN YOUR <span className="neon-glow">PRODUCTION</span></h2>
            <p>Elite manufacturing moving toward 100% yield through high-fidelity automated inspection.</p>
            <div className="cta-actions">
              <Button>Request Demo</Button>
              <Button variant="outline">Contact Sales</Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer container">
        <div className="footer-logo neon-glow">
          <img src="/logo.png" alt="" style={{ height: '30px', width: 'auto' }} />
        </div>
        <div className="footer-links">
          <a href="#">Documentation</a>
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">API</a>
        </div>
        <div className="footer-copy">© 2024 TRACESNITCH. ENCRYPTED ENVIRONMENT.</div>
      </footer>
    </div>
  );
};

export default Home;
