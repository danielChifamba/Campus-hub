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

      <style jsx>{`
        .timetable-container {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .header-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .add-btn {
          width: 40px;
          height: 40px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-primary);
        }

        .schedule-grid {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .day-column {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .day-label {
          font-size: 0.8rem;
          font-weight: 800;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          padding-left: 4px;
        }

        .day-slots {
          display: flex;
          gap: 12px;
          overflow-x: auto;
          padding-bottom: 4px;
          scrollbar-width: none;
        }

        .slot-card {
          min-width: 130px;
          padding: 12px;
          border-radius: var(--radius-md);
          border-left: 4px solid var(--accent-primary);
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .slot-time {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.7rem;
          color: var(--text-secondary);
        }

        .slot-course {
          font-size: 0.9rem;
          font-weight: 700;
        }

        .slot-room {
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: 0.7rem;
          color: var(--text-muted);
        }

        .slot-empty {
          font-size: 0.75rem;
          color: var(--text-muted);
          padding: 12px;
          font-style: italic;
        }

        .upcoming-alert {
          margin-top: 20px;
          padding: 16px;
          border-radius: var(--radius-lg);
          display: flex;
          align-items: center;
          gap: 16px;
          background: linear-gradient(90deg, var(--glass-bg), rgba(56, 189, 248, 0.1));
          border: 1px solid var(--accent-glow);
        }

        .alert-icon {
          color: var(--accent-primary);
        }

        .alert-text {
          display: flex;
          flex-direction: column;
        }

        .alert-text strong {
          font-size: 0.9rem;
        }

        .alert-text span {
          font-size: 0.75rem;
          color: var(--text-secondary);
        }
      `}</style>
    </div>
  )
}

export default Timetable
