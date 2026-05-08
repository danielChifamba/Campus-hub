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


    </nav>
  )
}

export default Navigation
