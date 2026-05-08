import React, { useState } from 'react'
import { Calendar, MapPin, Search as SearchIcon, Heart, Users, Clock } from 'lucide-react'
import { motion } from 'framer-motion'

const Campus = () => {
  const [activeTab, setActiveTab] = useState('events')

  const events = [
    { id: 1, title: 'Startup Pitch Competition', location: 'Innovation Hub', time: 'Tomorrow, 2:00 PM', attendees: 120, category: 'Academic' },
    { id: 2, title: 'Main Quad Concert', location: 'Central Square', time: 'Friday, 6:00 PM', attendees: 450, category: 'Social' },
    { id: 3, title: 'Yoga Session', location: 'Uni Gym', time: 'Daily, 7:00 AM', attendees: 15, category: 'Wellness' },
  ]

  const lostAndFound = [
    { id: 1, item: 'Blue Water Bottle', location: 'Science Building', timestamp: '2h ago', status: 'Lost' },
    { id: 2, item: 'Keys with Red Keychain', location: 'Library Lobby', timestamp: '5h ago', status: 'Found' },
    { id: 3, item: 'AirPods Case', location: 'Cafeteria', timestamp: 'Yesterday', status: 'Found' },
  ]

  return (
    <div className="campus-container">
      <div className="tab-switcher glass">
        <button 
          className={activeTab === 'events' ? 'active' : ''} 
          onClick={() => setActiveTab('events')}
        >
          Events
        </button>
        <button 
          className={activeTab === 'lost' ? 'active' : ''} 
          onClick={() => setActiveTab('lost')}
        >
          Lost & Found
        </button>
        <button 
          className={activeTab === 'rooms' ? 'active' : ''} 
          onClick={() => setActiveTab('rooms')}
        >
          Study Rooms
        </button>
      </div>

      <div className="tab-content">
        {activeTab === 'events' && (
          <div className="events-list">
            {events.map((event) => (
              <motion.div 
                key={event.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="event-card glass"
              >
                <div className="event-date">
                  <Calendar size={18} />
                  <span>{event.time}</span>
                </div>
                <h3>{event.title}</h3>
                <div className="event-meta">
                  <div className="meta-item">
                    <MapPin size={14} />
                    <span>{event.location}</span>
                  </div>
                  <div className="meta-item">
                    <Users size={14} />
                    <span>{event.attendees} attending</span>
                  </div>
                </div>
                <button className="join-btn">I'm going</button>
              </motion.div>
            ))}
          </div>
        )}

        {activeTab === 'lost' && (
          <div className="lost-found-list">
            {lostAndFound.map((item) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="item-card glass"
              >
                <div className={`status-badge ${item.status.toLowerCase()}`}>
                  {item.status}
                </div>
                <h3>{item.item}</h3>
                <div className="item-meta">
                  <MapPin size={14} />
                  <span>{item.location}</span>
                </div>
                <div className="item-time">
                  <Clock size={14} />
                  <span>{item.timestamp}</span>
                </div>
                <button className="claim-btn">
                  {item.status === 'Found' ? 'This is mine!' : 'I found this!'}
                </button>
              </motion.div>
            ))}
          </div>
        )}

        {activeTab === 'rooms' && (
          <div className="rooms-empty glass">
            <SearchIcon size={48} className="empty-icon" />
            <p>Searching for available study rooms...</p>
            <button className="reserve-btn">Check Availability</button>
          </div>
        )}
      </div>

      <style jsx>{`
        .campus-container {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .tab-switcher {
          display: flex;
          padding: 4px;
          border-radius: 12px;
          gap: 4px;
        }

        .tab-switcher button {
          flex: 1;
          padding: 10px;
          border-radius: 10px;
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-secondary);
        }

        .tab-switcher button.active {
          background: var(--bg-tertiary);
          color: var(--accent-primary);
        }

        .event-card {
          padding: 16px;
          border-radius: var(--radius-md);
          margin-bottom: 16px;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .event-date {
          display: flex;
          align-items: center;
          gap: 8px;
          color: var(--accent-secondary);
          font-size: 0.8rem;
          font-weight: 600;
        }

        .event-card h3 {
          font-size: 1.1rem;
        }

        .event-meta {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
        }

        .meta-item {
          display: flex;
          align-items: center;
          gap: 6px;
          color: var(--text-muted);
          font-size: 0.75rem;
        }

        .join-btn {
          width: 100%;
          padding: 10px;
          background: var(--accent-glow);
          border: 1px solid var(--accent-primary);
          color: var(--accent-primary);
          border-radius: 10px;
          font-weight: 600;
        }

        .item-card {
          padding: 16px;
          border-radius: var(--radius-md);
          margin-bottom: 12px;
          position: relative;
        }

        .status-badge {
          position: absolute;
          top: 16px;
          right: 16px;
          padding: 4px 8px;
          border-radius: 6px;
          font-size: 0.65rem;
          font-weight: 800;
          text-transform: uppercase;
        }

        .status-badge.lost {
          background: rgba(239, 68, 68, 0.2);
          color: #ef4444;
        }

        .status-badge.found {
          background: rgba(16, 185, 129, 0.2);
          color: #10b981;
        }

        .item-card h3 {
          font-size: 1rem;
          margin-bottom: 8px;
        }

        .item-meta, .item-time {
          display: flex;
          align-items: center;
          gap: 6px;
          color: var(--text-muted);
          font-size: 0.75rem;
          margin-bottom: 4px;
        }

        .claim-btn {
          margin-top: 12px;
          color: var(--accent-primary);
          font-size: 0.85rem;
          font-weight: 600;
          text-decoration: underline;
        }

        .rooms-empty {
          padding: 40px 20px;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
          color: var(--text-secondary);
        }

        .empty-icon {
          opacity: 0.2;
        }

        .reserve-btn {
          background: var(--bg-tertiary);
          padding: 10px 24px;
          border-radius: 12px;
          color: var(--text-primary);
          font-weight: 600;
        }
      `}</style>
    </div>
  )
}

export default Campus
