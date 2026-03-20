import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Button from '../components/UI/Button';
import './Configuration.css';

const Configuration = () => {
  return (
    <div className="config-page">
      <Sidebar />
      
      <main className="dashboard-content">
        <header className="dashboard-header">
          <div className="header-left">
            <h1 className="header-title">Configuration</h1>
            <p className="text-muted" style={{ fontSize: '0.875rem' }}>
              Optimize optical inspection parameters and neural network sensitivity for high-precision PCB anomaly detection.
            </p>
          </div>
          
          <div className="header-right-actions">
            <div className="system-ready-indicator">
              <span className="dot active"></span> SYSTEM READY
            </div>
            <Button variant="primary">Save Configuration</Button>
          </div>
        </header>

        <div className="config-grid">
          <div className="config-card glass">
            <div className="card-header">
              <div className="header-title-wrap">
                <span className="icon">📹</span>
                <h3>Camera Setup</h3>
              </div>
              <p className="text-muted">Primary Lens: OptiCore X1-Digital</p>
            </div>
            
            <div className="form-grid mt-6">
              <div className="form-group">
                <label>Focus Mode</label>
                <div className="toggle-group glass">
                  <button className="active">Auto</button>
                  <button>Manual</button>
                </div>
              </div>
              
              <div className="form-group">
                <label>Exposure Range</label>
                <select className="glass-select">
                  <option>1/250s</option>
                  <option>1/500s</option>
                  <option>1/1000s</option>
                </select>
              </div>
            </div>

            <div className="form-group mt-6">
              <div className="label-row">
                <label>Lens Magnification (Zoom)</label>
                <span className="neon-glow">4.2x</span>
              </div>
              <input type="range" className="neon-range" min="1" max="10" step="0.1" defaultValue="4.2" />
            </div>

            <div className="toggle-row mt-6">
              <label className="switch-label">
                <div className="switch"><input type="checkbox" defaultChecked /><span className="slider"></span></div>
                Night Vision
              </label>
              <label className="switch-label">
                <div className="switch"><input type="checkbox" /><span className="slider"></span></div>
                HDR Stream
              </label>
            </div>
          </div>

          <div className="config-card glass dark-bg">
            <div className="panel-header" style={{ border: 'none', padding: '0 0 1rem 0' }}>
              LIVE CALIBRATION FEED <span className="red-dot float-right">REC 00:04:12</span>
            </div>
            <div className="calibration-display">
              <div className="microscope-view">
                <div className="target-box">
                  <span className="label">TRACKING LOCK - 82%</span>
                </div>
                <div className="crosshair"></div>
              </div>
            </div>
          </div>

          <div className="config-card glass">
            <div className="card-header">
              <div className="header-title-wrap">
                <span className="icon">⚙️</span>
                <h3>Detection Model</h3>
              </div>
              <p className="text-muted">Model: NeuroTrace v4.2</p>
            </div>

            <div className="form-group mt-6">
              <div className="label-row">
                <label>Sensitivity Threshold</label>
                <span className="neon-glow">82%</span>
              </div>
              <input type="range" className="neon-range" min="0" max="100" defaultValue="82" />
            </div>

            <div className="priority-list mt-6">
              <label className="uppercase tracking-widest text-muted" style={{ fontSize: '0.6rem' }}>Detection Priority</label>
              <div className="priority-item glass mt-2">
                <span>Short Circuits</span>
                <span className="badge red">CRITICAL</span>
              </div>
              <div className="priority-item glass">
                <span>Solder Bridging</span>
                <span className="badge yellow">HIGH</span>
              </div>
              <div className="priority-item glass">
                <span>Component Shift</span>
                <span className="badge gray">MED</span>
              </div>
            </div>
          </div>

          <div className="config-card glass">
            <div className="config-sub-grid">
              <div className="sub-card">
                <div className="header-title-wrap">
                  <span className="icon">🌐</span>
                  <h3>Network Integration</h3>
                </div>
                <div className="mt-4">
                  <div className="text-muted uppercase" style={{ fontSize: '0.6rem' }}>Edge Processing</div>
                  <div className="font-mono">192.168.1.104:8080</div>
                </div>
                <div className="mt-4">
                  <div className="text-muted uppercase" style={{ fontSize: '0.6rem' }}>Latency Optimizer</div>
                  <div className="latency-bar glass mt-2">
                    <div className="fill" style={{ width: '85%' }}></div>
                    <span className="label">12ms Response</span>
                  </div>
                </div>
              </div>

              <div className="sub-card">
                <div className="header-title-wrap">
                  <span className="icon">🕒</span>
                  <h3>Log Retention</h3>
                </div>
                <div className="retention-value mt-4">
                  <span className="num">30</span>
                  <span className="text-muted ml-2">Days of history stored</span>
                </div>
                <Button variant="ghost" size="sm" className="mt-4 p-0">Advanced Cleanup Rules →</Button>
              </div>
            </div>

            <div className="compliance-banner glass mt-6">
              <div className="icon">🛡</div>
              <div className="banner-content">
                <div className="font-bold">Compliance & Calibration</div>
                <div className="text-muted" style={{ fontSize: '0.65rem' }}>Last verified on Oct 24, 2023. Cert ID: TS-9920</div>
              </div>
              <Button size="sm" variant="outline">Re-Certify Now</Button>
            </div>
          </div>
        </div>

        <div className="system-status-popup glass">
          <span className="icon">ℹ</span>
          <div className="popup-text">
            <strong>SYSTEM STATUS</strong>
            <p>Optimal environment parameters detected. Ready for high-speed scan.</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Configuration;
