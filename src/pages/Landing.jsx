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

      <style jsx>{`
        .landing-container {
          padding-top: 40px;
          display: flex;
          flex-direction: column;
          gap: 60px;
        }

        .hero {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 40px;
        }

        .hero-content {
          max-width: 500px;
        }

        .badge-premium {
          display: inline-block;
          padding: 6px 16px;
          background: var(--accent-glow);
          color: var(--accent-primary);
          border-radius: 20px;
          font-size: 0.75rem;
          font-weight: 800;
          text-transform: uppercase;
          margin-bottom: 20px;
          border: 1px solid var(--accent-primary);
        }

        h1 {
          font-size: 2.5rem;
          line-height: 1.1;
          margin-bottom: 16px;
        }

        h1 span {
          background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        p {
          color: var(--text-secondary);
          font-size: 1.1rem;
          margin-bottom: 32px;
        }

        .hero-actions {
          display: flex;
          gap: 16px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .btn-primary {
          background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
          color: white;
          padding: 14px 28px;
          border-radius: 16px;
          font-weight: 700;
          display: flex;
          align-items: center;
          gap: 10px;
          box-shadow: 0 10px 20px var(--accent-glow);
        }

        .btn-secondary {
          background: var(--bg-tertiary);
          color: var(--text-primary);
          padding: 14px 28px;
          border-radius: 16px;
          font-weight: 700;
          display: flex;
          align-items: center;
          gap: 10px;
          border: 1px solid var(--glass-border);
        }

        .app-preview {
          width: 200px;
          height: 350px;
          border-radius: 30px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, var(--bg-secondary), var(--bg-primary));
          position: relative;
          border: 4px solid var(--bg-tertiary);
        }

        .phone-icon {
          opacity: 0.1;
          position: absolute;
        }

        .mock-ui {
          width: 80%;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .mock-line {
          height: 8px;
          background: var(--bg-tertiary);
          border-radius: 4px;
        }

        .mock-line.short { width: 40%; }
        .mock-line.long { width: 100%; }
        .mock-line.mid { width: 70%; }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
        }

        .feature-card {
          padding: 32px;
          border-radius: var(--radius-lg);
          text-align: center;
        }

        .feat-icon {
          color: var(--accent-primary);
          margin-bottom: 20px;
        }

        .feature-card h3 {
          margin-bottom: 12px;
        }

        .install-guide {
          padding: 32px;
          border-radius: var(--radius-lg);
          border: 1px dashed var(--accent-primary);
        }

        .install-guide h3 {
          margin-bottom: 16px;
          color: var(--accent-primary);
        }

        ol {
          margin-top: 16px;
          padding-left: 20px;
          color: var(--text-secondary);
        }

        li {
          margin-bottom: 8px;
        }
      `}</style>
    </div>
  )
}

export default Landing
