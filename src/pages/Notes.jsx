import React, { useState } from 'react'
import { useNoteStore } from '../stores/useNoteStore'
import { FileText, Download, Filter, Search, Plus } from 'lucide-react'
import { motion } from 'framer-motion'

const Notes = () => {
  const { notes } = useNoteStore()
  const [search, setSearch] = useState('')

  const filteredNotes = notes.filter(n => 
    n.title.toLowerCase().includes(search.toLowerCase()) || 
    n.course.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="notes-container">
      <div className="search-box glass">
        <Search size={18} />
        <input 
          type="text" 
          placeholder="Search by course or title..." 
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Filter size={18} />
      </div>

      <div className="actions-row">
        <span>Recent Uploads</span>
        <button className="upload-btn">
          <Plus size={18} />
          <span>Upload</span>
        </button>
      </div>

      <div className="notes-list">
        {filteredNotes.map((note) => (
          <motion.div 
            key={note.id}
            layout
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="note-card glass"
          >
            <div className="note-icon">
              <FileText size={24} />
            </div>
            <div className="note-details">
              <h3 className="note-title">{note.title}</h3>
              <div className="note-meta">
                <span className="course-tag">{note.course}</span>
                <span className="dot">•</span>
                <span>{note.author}</span>
              </div>
              <div className="file-info">
                <span>{note.type}</span>
                <span className="dot">•</span>
                <span>{note.size}</span>
              </div>
            </div>
            <button className="download-btn">
              <Download size={20} />
              <span className="download-count">{note.downloads}</span>
            </button>
          </motion.div>
        ))}
      </div>

      <style jsx>{`
        .notes-container {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .search-box {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 16px;
          border-radius: 12px;
          color: var(--text-secondary);
        }

        .search-box input {
          flex: 1;
          background: none;
          border: none;
          color: var(--text-primary);
          outline: none;
          font-family: inherit;
        }

        .actions-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: var(--text-secondary);
          font-size: 0.9rem;
          font-weight: 600;
        }

        .upload-btn {
          color: var(--accent-primary);
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.85rem;
        }

        .note-card {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 16px;
          border-radius: var(--radius-md);
          margin-bottom: 12px;
        }

        .note-icon {
          width: 48px;
          height: 48px;
          background: var(--bg-tertiary);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-primary);
        }

        .note-details {
          flex: 1;
        }

        .note-title {
          font-size: 0.95rem;
          margin-bottom: 4px;
        }

        .note-meta {
          font-size: 0.75rem;
          color: var(--text-secondary);
          display: flex;
          align-items: center;
          gap: 6px;
          margin-bottom: 4px;
        }

        .course-tag {
          color: var(--accent-secondary);
          font-weight: 700;
        }

        .file-info {
          font-size: 0.7rem;
          color: var(--text-muted);
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .dot {
          opacity: 0.5;
        }

        .download-btn {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
          color: var(--text-secondary);
          padding: 8px;
        }

        .download-count {
          font-size: 0.7rem;
        }

        .download-btn:hover {
          color: var(--accent-primary);
        }
      `}</style>
    </div>
  )
}

export default Notes
