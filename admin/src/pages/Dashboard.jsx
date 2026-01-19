import { useState, useEffect } from 'react';
import apiClient from '../config/api';
import './Dashboard.css';

function Dashboard() {
  const [apiStatus, setApiStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const checkAPIHealth = async () => {
    setLoading(true);
    try {
      const response = await apiClient.get('/health');
      setApiStatus(response.data);
    } catch (error) {
      setApiStatus({ status: 'error', message: 'Cannot connect to API' });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    checkAPIHealth();
  }, []);

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>AiCoach Admin Dashboard</h1>
        <p className="subtitle">Manage your AiCoach application</p>
      </header>

      <div className="dashboard-content">
        <div className="stats-grid">
          <div className="stat-card">
            <h3>Backend API Status</h3>
            <div className="status-indicator">
              {loading ? (
                <span className="status-loading">Checking...</span>
              ) : (
                <span className={`status ${apiStatus?.status === 'healthy' ? 'healthy' : 'error'}`}>
                  {apiStatus?.status || 'Unknown'}
                </span>
              )}
            </div>
            <button onClick={checkAPIHealth} disabled={loading} className="refresh-btn">
              Refresh Status
            </button>
          </div>

          <div className="stat-card">
            <h3>Total Users</h3>
            <p className="stat-number">0</p>
            <p className="stat-label">Coming soon</p>
          </div>

          <div className="stat-card">
            <h3>Active Sessions</h3>
            <p className="stat-number">0</p>
            <p className="stat-label">Coming soon</p>
          </div>

          <div className="stat-card">
            <h3>System Health</h3>
            <p className="stat-number">100%</p>
            <p className="stat-label">All systems operational</p>
          </div>
        </div>

        <div className="info-section">
          <h2>Quick Start Guide</h2>
          <ul>
            <li>✅ Admin dashboard is running</li>
            <li>✅ Backend API configured</li>
            <li>✅ Mobile app ready for development</li>
            <li>🔄 Add authentication to secure your admin panel</li>
            <li>🔄 Create API endpoints for user management</li>
            <li>🔄 Implement database models and controllers</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
