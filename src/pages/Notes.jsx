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


    </div>
  )
}

export default Notes
