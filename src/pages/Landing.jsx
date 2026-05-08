import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Download, Users, Shield, Zap, ArrowRight, Smartphone } from 'lucide-react'

const Landing = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null)

  useEffect(() => {
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault()
      setDeferredPrompt(e)
    })
  }, [])

  const handleInstall = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt()
      const { outcome } = await deferredPrompt.userChoice
      if (outcome === 'accepted') {
        setDeferredPrompt(null)
      }
    } else {
      alert('To install on Android: Open Chrome menu (three dots) and tap "Install app" or "Add to Home screen".')
    }
  }

  return (
    <div className="landing-container">
      <section className="hero">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="hero-content"
        >
          <div className="badge-premium">University exclusive</div>
          <h1>Connect your <span>Campus</span> like never before.</h1>
          <p>The all-in-one social utility for students. Post announcements, share notes, trade items, and manage your schedule.</p>
          
          <div className="hero-actions">
            <Link to="/feed" className="btn-primary">
              <span>Open App</span>
              <ArrowRight size={20} />
            </Link>
            <button onClick={handleInstall} className="btn-secondary">
              <Download size={20} />
              <span>Install on Android</span>
            </button>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="app-preview glass"
        >
          <Smartphone size={100} className="phone-icon" />
          <div className="mock-ui">
            <div className="mock-line short" />
            <div className="mock-line long" />
            <div className="mock-line mid" />
          </div>
        </motion.div>
      </section>

      <section className="features-grid">
        <div className="feature-card glass">
          <Shield size={32} className="feat-icon" />
          <h3>Anonymous Feed</h3>
          <p>Share your thoughts or tips without revealing your identity.</p>
        </div>
        <div className="feature-card glass">
          <Zap size={32} className="feat-icon" />
          <h3>Real-time Updates</h3>
          <p>Instant notifications for important campus announcements.</p>
        </div>
        <div className="feature-card glass">
          <Users size={32} className="feat-icon" />
          <h3>Student Community</h3>
          <p>Verified university environment for trading and collaboration.</p>
        </div>
      </section>

      <div className="install-guide glass">
        <h3>Install the App</h3>
        <p>Get the full experience with notifications and offline access.</p>
        <ol>
          <li>Open this site in Chrome on Android.</li>
          <li>Tap the <strong>three dots</strong> in the corner.</li>
          <li>Select <strong>"Install App"</strong>.</li>
        </ol>
      </div>


    </div>
  )
}

export default Landing
