import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Loading.css';

const Loading = ({ nextPath = '/login' }) => {
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState('INITIALIZING PROTOCOLS...');
  const navigate = useNavigate();

  useEffect(() => {
    const statusMessages = [
      'INITIALIZING PROTOCOLS...',
      'ESTABLISHING SECURE TUNNEL...',
      'SYNCING NEURAL INTERFACE...',
      'DECRYPTING HARDWARE SIGNATURES...',
      'SYSTEM INTELLIGENCE ACTIVE'
    ];

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => navigate(nextPath), 800);
          return 100;
        }
        
        // Update status message based on progress
        const messageIndex = Math.floor((prev / 100) * statusMessages.length);
        if (statusMessages[messageIndex]) {
          setStatus(statusMessages[messageIndex]);
        }
        
        return prev + Math.random() * 5;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [navigate, nextPath]);

  return (
    <div className="loading-screen">
      <div className="loading-grid"></div>
      
      <div className="loading-content">
        <div className="logo-box-wrapper">
          <div className="rotating-frame frame-1"></div>
          <div className="rotating-frame frame-2"></div>
          <div className="logo-box">
            <img src="/logo.png" alt="TS Logo" className="loading-logo" />
          </div>
        </div>

        <div className="loading-info">
          <h1 className="loading-title">T R A C E S N I T C H</h1>
          <p className="loading-subtitle">SYSTEM INTELLIGENCE INTERFACE</p>
        </div>

        <div className="progress-container">
          <div className="progress-bar-wrapper">
            <div 
              className="progress-bar-fill" 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="progress-stats">
            <span className="status-text italic">
              <span className="pulse-dot"></span> {status}
            </span>
            <span className="percentage-text">{progress.toFixed(2)}%</span>
          </div>
        </div>

        <div className="technical-footer">
          <div className="footer-item">NODE: US-EAST-01</div>
          <div className="footer-item">LATENCY: 12MS</div>
          <div className="footer-item footer-right">SECURE TUNNEL: ESTABLISHED</div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
