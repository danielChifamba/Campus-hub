import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Navigation from './components/Navigation'
import AppBar from './components/AppBar'
import Feed from './pages/Feed'
import Notes from './pages/Notes'
import Marketplace from './pages/Marketplace'
import Campus from './pages/Campus'
import Timetable from './pages/Timetable'
import Profile from './pages/Profile'
import Landing from './pages/Landing'

// Set Home to Landing
const HomePage = Landing
const FeedPage = Feed
const NotesPage = Notes
const MarketplacePage = Marketplace
const CampusPage = Campus
const TimetablePage = Timetable
const ProfilePage = Profile

function App() {
  const location = useLocation()
  const isLanding = location.pathname === '/'

  return (
    <div className="app-shell">
      {!isLanding && <AppBar />}
      
      <main className={`content ${isLanding ? 'full-width' : ''}`}>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<PageWrapper><HomePage /></PageWrapper>} />
            <Route path="/feed" element={<PageWrapper><FeedPage /></PageWrapper>} />
            <Route path="/notes" element={<PageWrapper><NotesPage /></PageWrapper>} />
            <Route path="/marketplace" element={<PageWrapper><MarketplacePage /></PageWrapper>} />
            <Route path="/campus" element={<PageWrapper><CampusPage /></PageWrapper>} />
            <Route path="/timetable" element={<PageWrapper><TimetablePage /></PageWrapper>} />
            <Route path="/profile" element={<PageWrapper><ProfilePage /></PageWrapper>} />
          </Routes>
        </AnimatePresence>
      </main>

      {!isLanding && <Navigation />}
      

    </div>
  )
}

const PageWrapper = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.3, ease: 'easeOut' }}
  >
    {children}
  </motion.div>
)

export default App
