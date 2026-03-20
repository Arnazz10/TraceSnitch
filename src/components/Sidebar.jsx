import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Button from './UI/Button';
import './Sidebar.css';

const Sidebar = () => {
  const location = useLocation();

  const menuItems = [
    { name: 'Dashboard', icon: '📊', path: '/dashboard' },
    { name: 'Live Monitor', icon: '📹', path: '/monitor' },
    { name: 'Configuration', icon: '⚙️', path: '/config' },
    { name: 'Documentation', icon: '📜', path: '/docs' },
    { name: 'Pricing', icon: '🏷️', path: '/pricing' },
  ];

  return (
    <aside className="sidebar glass">
      <div className="sidebar-header">
        <Link to="/" className="sidebar-logo neon-glow flex items-center gap-2">
          <img src="/logo.png" alt="Logo" style={{ width: '30px', height: 'auto' }} />
          TRACESNITCH
        </Link>
        <div className="sidebar-sub">
          <span className="dot active"></span>
          <div>
            <div className="sub-title">TRACESNITCH CORE</div>
            <div className="sub-status">Active Monitoring</div>
          </div>
        </div>
      </div>

      <nav className="sidebar-nav">
        {menuItems.map((item) => (
          <Link 
            key={item.name} 
            to={item.path} 
            className={`nav-item ${location.pathname === item.path ? 'active' : ''}`}
          >
            <span className="icon">{item.icon}</span>
            {item.name}
          </Link>
        ))}
      </nav>

      <div className="sidebar-footer">
        <Button variant="primary" size="lg" className="btn-full mb-6">Initiate Deep Scan</Button>
        
        <div className="footer-links">
          <Link to="/support" className="footer-link">
            <span className="icon">❓</span> Support
          </Link>
          <Link to="/login" className="footer-link">
            <span className="icon">🚪</span> Logout
          </Link>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
