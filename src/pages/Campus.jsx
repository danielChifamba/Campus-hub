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


    </div>
  )
}

export default Campus
