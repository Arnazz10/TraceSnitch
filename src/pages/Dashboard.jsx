import React from 'react';
import Sidebar from '../components/Sidebar';
import Button from '../components/UI/Button';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-page">
      <Sidebar />
      
      <main className="dashboard-content">
        <header className="dashboard-header">
          <div className="header-left">
            <div className="breadcrumb text-muted uppercase tracking-widest" style={{ fontSize: '0.65rem' }}>
              SYSTEM . ROOT . DASHBOARD
            </div>
            <h1 className="header-title">Precision Overlook</h1>
          </div>
          
          <div className="header-right glass">
            <div className="status-item">
              <span className="label">GLOBAL STATUS</span>
              <span className="value neon-glow">NOMINAL</span>
            </div>
            <div className="divider"></div>
            <div className="status-item">
              <span className="label">UPTIME</span>
              <span className="value">99.98%</span>
            </div>
          </div>
        </header>

        <section className="stats-grid">
          <div className="stat-card glass">
            <div className="stat-header">
              <span className="stat-icon">📑</span>
              <span className="stat-label">BOARDS SCANNED</span>
            </div>
            <div className="stat-value">1,248</div>
            <div className="stat-meta green">+12% vs last 24h</div>
          </div>
          
          <div className="stat-card glass">
            <div className="stat-header">
              <span className="stat-icon">⚠️</span>
              <span className="stat-label">DEFECTS FOUND</span>
            </div>
            <div className="stat-value">05</div>
            <div className="stat-meta red">3 critical</div>
          </div>
          
          <div className="stat-card glass">
            <div className="stat-header">
              <span className="stat-icon">✅</span>
              <span className="stat-label">PASS RATE</span>
            </div>
            <div className="stat-value">96.2%</div>
            <div className="stat-progress-bg">
              <div className="stat-progress-bar" style={{ width: '96.2%' }}></div>
            </div>
          </div>
          
          <div className="stat-card glass">
            <div className="stat-header">
              <span className="stat-icon">⏳</span>
              <span className="stat-label">QUEUE PENDING</span>
            </div>
            <div className="stat-value">03</div>
            <div className="stat-meta">Est. processing time: 4m 20s</div>
          </div>
        </section>

        <div className="main-grid stats-focus">
          <div className="analytics-card glass">
            <div className="panel-header">ANOMALY DISTRIBUTION <span className="text-muted ml-2">LAST 24H</span></div>
            <div className="chart-container mt-6">
              <div className="bar-chart-large">
                <div className="bar-item">
                  <div className="bar green" style={{ height: '70%' }}></div>
                  <span className="label">Short</span>
                </div>
                <div className="bar-item">
                  <div className="bar red" style={{ height: '40%' }}></div>
                  <span className="label">Bridge</span>
                </div>
                <div className="bar-item">
                  <div className="bar blue" style={{ height: '90%' }}></div>
                  <span className="label">Shift</span>
                </div>
                <div className="bar-item">
                  <div className="bar yellow" style={{ height: '60%' }}></div>
                  <span className="label">Missing</span>
                </div>
              </div>
            </div>
          </div>

          <div className="side-panels">
            <div className="panel system-load glass">
              <div className="panel-header">SYSTEM LOAD (NETWORK)</div>
              <div className="load-visual mt-4">
                <div className="load-line"></div>
                <div className="load-meta">
                  <div className="meta-item"><span>Ingress</span> <span className="neon-glow">4.2 GB/s</span></div>
                  <div className="meta-item"><span>Latency</span> <span className="neon-glow">12ms</span></div>
                </div>
              </div>
            </div>

            <div className="panel trends glass">
              <div className="panel-header">DEFECT TREND (7D)</div>
              <div className="chart-mock">
                <div className="bar" style={{ height: '40%' }}></div>
                <div className="bar" style={{ height: '60%' }}></div>
                <div className="bar" style={{ height: '30%' }}></div>
                <div className="bar active" style={{ height: '80%' }}></div>
                <div className="bar" style={{ height: '50%' }}></div>
                <div className="bar" style={{ height: '45%' }}></div>
                <div className="bar red" style={{ height: '90%' }}></div>
              </div>
              <div className="chart-labels">
                <span>MON</span>
                <span>WED</span>
                <span>FRI</span>
                <span>SUN</span>
              </div>
            </div>
          </div>
        </div>

        <section className="production-table glass">
          <div className="table-header">
            <h3>PRODUCTION QUEUE</h3>
            <div className="table-actions">
              <span className="icon">≡</span>
              <span className="icon">⬇</span>
            </div>
          </div>
          <table className="q-table">
            <thead>
              <tr>
                <th>BATCH ID</th>
                <th>BOARD MODEL</th>
                <th>PRIORITY</th>
                <th>COMPONENTS</th>
                <th>STATUS</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>#992-TX-04</td>
                <td className="font-bold">GTX-CORE-V2</td>
                <td><span className="badge red">CRITICAL</span></td>
                <td>412 Units</td>
                <td><span className="status-dot green"></span> IN PROGRESS</td>
                <td><span className="icon">⋮</span></td>
              </tr>
              <tr>
                <td>#992-TX-05</td>
                <td className="font-bold">WIFI-SOC-REV4</td>
                <td><span className="badge blue">NORMAL</span></td>
                <td>1,200 Units</td>
                <td><span className="status-dot gray"></span> QUEUED</td>
                <td><span className="icon">⋮</span></td>
              </tr>
              <tr>
                <td>#992-TX-01</td>
                <td className="font-bold">AUDIO-DAC-PRO</td>
                <td><span className="badge gray">LOW</span></td>
                <td>85 Units</td>
                <td><span className="status-dot green"></span> DONE</td>
                <td><span className="icon">👁</span></td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
