import React from 'react'
import { Bell, Search, User } from 'lucide-react'
import { Link } from 'react-router-dom'

const AppBar = () => {
  return (
    <header className="app-bar-container glass">
      <Link to="/feed" className="logo">
        <span className="logo-icon">CH</span>
        <span className="logo-text">CampusHub</span>
      </Link>
      
      <div className="actions">
        <button className="action-btn">
          <Search size={20} />
        </button>
        <button className="action-btn">
          <Bell size={20} />
          <span className="badge" />
        </button>
        <Link to="/profile" className="action-btn">
          <User size={20} />
        </Link>
      </div>

      <style jsx>{`
        .app-bar-container {
          height: 64px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 20px;
          position: sticky;
          top: 0;
          z-index: 100;
          border-bottom: 1px solid var(--glass-border);
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .logo-icon {
          background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
          color: white;
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 8px;
          font-weight: 800;
          font-size: 0.8rem;
          box-shadow: 0 4px 12px var(--accent-glow);
        }

        .logo-text {
          font-weight: 800;
          font-size: 1.1rem;
          background: linear-gradient(135deg, var(--text-primary), var(--text-secondary));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .actions {
          display: flex;
          gap: 12px;
        }

        .action-btn {
          color: var(--text-secondary);
          padding: 8px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .action-btn:hover {
          background: var(--bg-tertiary);
          color: var(--text-primary);
        }

        .badge {
          position: absolute;
          top: 8px;
          right: 8px;
          width: 8px;
          height: 8px;
          background: var(--error);
          border-radius: 50%;
          border: 2px solid var(--bg-primary);
        }
      `}</style>
    </header>
  )
}

export default AppBar
