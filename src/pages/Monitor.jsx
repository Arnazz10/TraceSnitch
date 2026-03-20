import React from 'react';
import Sidebar from '../components/Sidebar';
import Button from '../components/UI/Button';
import './Monitor.css';

const Monitor = () => {
  return (
    <div className="monitor-page">
      <div className="monitor-sidebar glass">
        <div className="sidebar-header">
          <div className="header-top">
            <span className="neon-glow font-bold">TRACESNITCH</span>
          </div>
          <div className="core-status mt-6">
            <div className="flex items-center gap-3">
              <span className="status-dot green pulse"></span>
              <div>
                <div className="font-bold text-sm">Core-01</div>
                <div className="text-muted" style={{ fontSize: '10px' }}>ACTIVE MONITORING</div>
              </div>
            </div>
          </div>
        </div>
        
        <nav className="monitor-nav mt-12">
          <div className="nav-item active">📊 Dashboard</div>
          <div className="nav-item">📹 Camera Feed</div>
          <div className="nav-item">📜 Event Log</div>
          <div className="nav-item">⚙️ System Vitals</div>
          <div className="nav-item">📁 Archived</div>
        </nav>

        <div className="sidebar-footer mt-auto">
          <Button variant="outline" className="btn-full mb-8" style={{ background: 'rgba(255, 75, 75, 0.05)', color: '#ff4b4b', borderColor: 'rgba(255, 75, 75, 0.2)' }}>
            EMERGENCY KILL
          </Button>
          <div className="footer-links">
            <div className="footer-link">❓ Support</div>
            <div className="footer-link">📄 Documentation</div>
          </div>
        </div>
      </div>

      <main className="monitor-main">
        <div className="monitor-top-nav glass">
          <div className="nav-tabs">
            <span className="tab active">Monitor</span>
            <span className="tab">Logs</span>
            <span className="tab">Vitals</span>
            <Link to="/config" className="tab">Settings</Link>
          </div>
          
          <div className="nav-actions">
            <span className="icon">🔔</span>
            <div className="operator-badge glass">
              <div className="text-right mr-3">
                <div className="text-muted" style={{ fontSize: '9px' }}>OPERATOR</div>
                <div className="font-bold" style={{ fontSize: '11px' }}>ADMIN_CORE_01</div>
              </div>
              <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=admin" alt="avatar" className="avatar" />
              <span className="power-icon ml-3">⏻</span>
            </div>
          </div>
        </div>

        <div className="monitor-grid">
          <div className="left-panel">
            <div className="panel-title">VISUAL FEEDS <span className="text-muted ml-2">4 ACTIVE</span></div>
            <div className="camera-list mt-4">
              <div className="cam-item glass active">
                <div className="cam-preview" style={{ background: '#000' }}>
                  <div className="error-overlay">SIGNAL LOSS / FAIL</div>
                </div>
                <span className="cam-label">CAM-01</span>
              </div>
              <div className="cam-item glass">
                <div className="cam-preview" style={{ background: '#1a1a1a' }}></div>
                <span className="cam-label">CAM-02</span>
              </div>
              <div className="cam-item glass">
                <div className="cam-preview" style={{ background: '#222' }}></div>
                <span className="cam-label">CAM-03</span>
              </div>
              <div className="cam-item glass">
                <div className="cam-preview" style={{ background: '#111' }}></div>
                <span className="cam-label">CAM-04</span>
              </div>
            </div>
          </div>

          <div className="center-panel">
            <div className="active-scan-card glass">
              <div className="card-header">
                <div className="scan-title">
                  Active Scan: <span className="neon-glow">Board #0012-A</span>
                  <div className="uuid text-muted">UUID: 550E8400-E29B-41D4-A716-446655440003</div>
                </div>
                <div className="defects-badge">DEFECTS DETECTED: 02</div>
              </div>
              
              <div className="main-scan-visual">
                <div className="scan-display">
                  <div className="scan-content">
                    <div className="label-top">ACTIVE SCAN</div>
                    <div className="target-rect"></div>
                    <div className="defect-box short" style={{ top: '40%', left: '30%' }}>
                      <span className="label">MISSING COMPONENT [R12]</span>
                    </div>
                    <div className="defect-box bridge" style={{ top: '70%', left: '60%' }}>
                      <span className="label">SOLDER BRIDGE [U4]</span>
                    </div>
                  </div>
                  <div className="scan-line"></div>
                </div>
                <div className="progress-bar-wrap">
                  <div className="progress-info">
                    <span>SCAN PROGRESSION</span>
                    <span className="neon-glow">64.2%</span>
                  </div>
                  <div className="progress-bar-bg">
                    <div className="progress-bar-fill" style={{ width: '64.2%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="event-log-panel glass mt-6">
              <div className="panel-header">
                <span className="icon">📟</span> REAL-TIME EVENT LOG
                <span className="text-muted uppercase float-right" style={{ fontSize: '10px' }}>LOCKED_KERNEL__09</span>
              </div>
              <div className="log-entries font-mono">
                <div className="log-line"><span className="time">[14:22:01]</span> <span className="text-green">INITIALIZING SCAN SESSION ID_8921</span></div>
                <div className="log-line"><span className="time">[14:22:05]</span> PCB ALIGNMENT SECURED @ DELTA_Z: 0.002</div>
                <div className="log-line"><span className="time">[14:22:10]</span> <span className="text-red">TRACE BREAK DETECTED AT X:210 Y:45</span></div>
                <div className="log-line"><span className="time">[14:22:15]</span> THERMAL THRESHOLD NOMINAL: 42.1°C</div>
                <div className="log-line"><span className="time">[14:22:18]</span> <span className="text-red font-bold">CRITICAL_DEFECT: MISSING COMPONENT R12</span></div>
                <div className="log-line"><span className="time">[14:22:22]</span> BUFFERING NEXT SEGMENT...</div>
                <div className="log-line"><span className="time">[14:22:25]</span> WAITING FOR INFERENCE RESPONSE...</div>
              </div>
            </div>
          </div>

          <div className="right-panel">
            <div className="panel-title">SYSTEM VITALS</div>
            <div className="vital-grid mt-4">
              <div className="vital-card glass">
                <div className="label">INFERENCE</div>
                <div className="value">5.2 <span className="unit">ms</span></div>
              </div>
              <div className="vital-card glass">
                <div className="label">QUEUE DEPTH</div>
                <div className="value">14 <span className="unit text-green">UNIT</span></div>
              </div>
              <div className="vital-card glass">
                <div className="label">AVG CONF</div>
                <div className="value text-green">98.4<span className="unit text-green">%</span></div>
              </div>
            </div>

            <div className="vitals-charts mt-6">
              <div className="usage-item">
                <div className="usage-labels"><span>CPU USAGE</span> <span>42%</span></div>
                <div className="usage-bar glass"><div className="fill" style={{ width: '42%' }}></div></div>
              </div>
              <div className="usage-item mt-4">
                <div className="usage-labels text-green"><span>GPU USAGE (TENSOR)</span> <span>80%</span></div>
                <div className="usage-bar glass"><div className="fill green" style={{ width: '80%' }}></div></div>
              </div>
            </div>

            <div className="recent-failures mt-12">
              <div className="panel-title text-sm">RECENT FAILURES</div>
              <div className="failure-list mt-4">
                <div className="failure-item glass border-red">
                  <div className="flex justify-between">
                    <div className="font-bold">FAIL_0011-Z</div>
                    <span className="text-muted">14:10:02</span>
                  </div>
                  <div className="text-muted text-xs">Solder Integrity Error</div>
                </div>
                <div className="failure-item glass border-red">
                  <div className="flex justify-between">
                    <div className="font-bold">FAIL_0010-B</div>
                    <span className="text-muted">14:05:44</span>
                  </div>
                  <div className="text-muted text-xs">Critical Dimension Off</div>
                </div>
                <div className="failure-item glass border-red">
                  <div className="flex justify-between">
                    <div className="font-bold">FAIL_0009-S</div>
                    <span className="text-muted">13:58:12</span>
                  </div>
                  <div className="text-muted text-xs">Missing Chipset U2</div>
                </div>
              </div>
              <Button variant="ghost" size="sm" className="btn-full mt-4" style={{ fontSize: '10px' }}>VIEW FAILURE ARCHIVE</Button>
            </div>

            <div className="sync-badge glass text-green mt-auto p-4 flex items-center justify-between">
              <span className="font-bold uppercase tracking-widest" style={{ fontSize: '10px' }}>Live Sync Active</span>
              <span className="status-dot green pulse"></span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Monitor;
