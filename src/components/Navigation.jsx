import React from 'react'
import { NavLink } from 'react-router-dom'
import { Home, Notebook, ShoppingBag, LayoutGrid, User, Calendar } from 'lucide-react'

const Navigation = () => {
  const links = [
    { to: '/feed', icon: Home, label: 'Feed' },
    { to: '/timetable', icon: Calendar, label: 'Schedule' },
    { to: '/notes', icon: Notebook, label: 'Notes' },
    { to: '/marketplace', icon: ShoppingBag, label: 'Shop' },
    { to: '/campus', icon: LayoutGrid, label: 'Campus' },
  ]

  return (
    <nav className="nav-container glass">
      {links.map(({ to, icon: Icon, label }) => (
        <NavLink 
          key={to} 
          to={to} 
          className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
        >
          <Icon size={24} />
          <span>{label}</span>
        </NavLink>
      ))}

      <style jsx>{`
        .nav-container {
          position: fixed;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 100%;
          max-width: 600px;
          height: var(--nav-height);
          display: flex;
          justify-content: space-around;
          align-items: center;
          padding: 0 10px;
          border-top: 1px solid var(--glass-border);
          border-radius: var(--radius-lg) var(--radius-lg) 0 0;
          z-index: 100;
        }

        .nav-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
          color: var(--text-secondary);
          text-decoration: none;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          flex: 1;
        }

        .nav-item span {
          font-size: 0.7rem;
          font-weight: 500;
        }

        .nav-item.active {
          color: var(--accent-primary);
          transform: translateY(-4px);
        }

        .nav-item.active svg {
          filter: drop-shadow(0 0 8px var(--accent-glow));
        }

        @media (max-width: 480px) {
          .nav-item span {
            display: none;
          }
        }
      `}</style>
    </nav>
  )
}

export default Navigation
