import React from 'react'
import { Clock, Book, MapPin, Plus } from 'lucide-react'
import { motion } from 'framer-motion'

const Timetable = () => {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri']
  const schedule = [
    { day: 'Mon', time: '09:00', course: 'CS101', room: 'Laby 3', color: 'var(--accent-primary)' },
    { day: 'Mon', time: '11:00', course: 'MATH201', room: 'Hall B', color: 'var(--accent-secondary)' },
    { day: 'Tue', time: '10:00', course: 'PHYS102', room: 'Lab 1', color: 'var(--success)' },
    { day: 'Wed', time: '09:00', course: 'CS101', room: 'Lab 3', color: 'var(--accent-primary)' },
    { day: 'Thu', time: '14:00', course: 'ECON101', room: 'Rm 402', color: 'var(--warning)' },
    { day: 'Fri', time: '11:00', course: 'MATH201', room: 'Hall B', color: 'var(--accent-secondary)' },
  ]

  return (
    <div className="timetable-container">
      <div className="header-row">
        <h1>Your Schedule</h1>
        <button className="add-btn glass">
          <Plus size={20} />
        </button>
      </div>

      <div className="schedule-grid">
        {days.map(day => (
          <div key={day} className="day-column">
            <span className="day-label">{day}</span>
            <div className="day-slots">
              {schedule.filter(s => s.day === day).map((slot, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="slot-card glass"
                  style={{ borderLeftColor: slot.color }}
                >
                  <div className="slot-time">
                    <Clock size={12} />
                    <span>{slot.time}</span>
                  </div>
                  <h3 className="slot-course">{slot.course}</h3>
                  <div className="slot-room">
                    <MapPin size={12} />
                    <span>{slot.room}</span>
                  </div>
                </motion.div>
              ))}
              {schedule.filter(s => s.day === day).length === 0 && (
                <div className="slot-empty">No classes</div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="upcoming-alert glass">
        <Book size={20} className="alert-icon" />
        <div className="alert-text">
          <strong>Next: CS101</strong>
          <span>Starts in 25 minutes • Lab 3</span>
        </div>
      </div>


    </div>
  )
}

export default Timetable
