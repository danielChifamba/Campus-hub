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


    </header>
  )
}

export default AppBar
