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


    </div>
  )
}

export default Profile
