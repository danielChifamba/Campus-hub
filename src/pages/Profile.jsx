import React from 'react'
import { User, Settings, LogOut, Shield, Bell, ChevronRight } from 'lucide-react'
import { motion } from 'framer-motion'

const Profile = () => {
  const sections = [
    { icon: Bell, label: 'Notifications', value: 'On' },
    { icon: Shield, label: 'Privacy & Security', value: '' },
    { icon: Settings, label: 'App Settings', value: '' },
  ]

  return (
    <div className="profile-container">
      <div className="profile-header glass">
        <div className="avatar">
          <User size={40} />
        </div>
        <div className="profile-info">
          <h2>Daniel Smith</h2>
          <span>Computer Science • Year 2</span>
        </div>
        <button className="edit-btn">Edit</button>
      </div>

      <div className="stats-row">
        <div className="stat-card glass">
          <span className="stat-value">12</span>
          <span className="stat-label">Posts</span>
        </div>
        <div className="stat-card glass">
          <span className="stat-value">4</span>
          <span className="stat-label">Notes</span>
        </div>
        <div className="stat-card glass">
          <span className="stat-value">85</span>
          <span className="stat-label">Likes</span>
        </div>
      </div>

      <div className="settings-list">
        {sections.map((item, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="settings-item glass"
          >
            <div className="item-left">
              <div className="item-icon">
                <item.icon size={20} />
              </div>
              <span>{item.label}</span>
            </div>
            <div className="item-right">
              {item.value && <span className="item-value">{item.value}</span>}
              <ChevronRight size={18} />
            </div>
          </motion.div>
        ))}
      </div>

      <button className="logout-btn">
        <LogOut size={20} />
        <span>Log Out</span>
      </button>

      <style jsx>{`
        .profile-container {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .profile-header {
          padding: 24px;
          border-radius: var(--radius-lg);
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .avatar {
          width: 70px;
          height: 70px;
          background: var(--bg-tertiary);
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-primary);
          border: 2px solid var(--accent-glow);
        }

        .profile-info h2 {
          font-size: 1.25rem;
          margin-bottom: 4px;
        }

        .profile-info span {
          font-size: 0.85rem;
          color: var(--text-secondary);
        }

        .edit-btn {
          margin-left: auto;
          color: var(--accent-primary);
          font-size: 0.85rem;
          font-weight: 600;
        }

        .stats-row {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
        }

        .stat-card {
          padding: 16px;
          border-radius: var(--radius-md);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
        }

        .stat-value {
          font-size: 1.2rem;
          font-weight: 800;
          color: var(--accent-primary);
        }

        .stat-label {
          font-size: 0.7rem;
          color: var(--text-muted);
          text-transform: uppercase;
          font-weight: 700;
        }

        .settings-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .settings-item {
          padding: 16px;
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: space-between;
          color: var(--text-primary);
        }

        .item-left {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .item-icon {
          width: 32px;
          height: 32px;
          background: var(--bg-tertiary);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-secondary);
        }

        .item-right {
          display: flex;
          align-items: center;
          gap: 10px;
          color: var(--text-muted);
        }

        .item-value {
          font-size: 0.8rem;
          color: var(--accent-primary);
          font-weight: 600;
        }

        .logout-btn {
          margin-top: 20px;
          padding: 16px;
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          color: var(--error);
          font-weight: 700;
          border: 1px solid rgba(239, 68, 68, 0.2);
          background: rgba(239, 68, 68, 0.05);
        }
      `}</style>
    </div>
  )
}

export default Profile
