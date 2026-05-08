import React, { useState } from 'react'
import { usePostStore } from '../stores/usePostStore'
import { MessageSquare, Heart, Share2, Send, UserSecret, User as UserIcon } from 'lucide-react'
import { motion } from 'framer-motion'

const Feed = () => {
  const { posts, addPost, likePost } = usePostStore()
  const [newPost, setNewPost] = useState('')
  const [isAnonymous, setIsAnonymous] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!newPost.trim()) return
    
    addPost({
      author: isAnonymous ? 'Anonymous student' : 'You',
      content: newPost,
      isAnonymous
    })
    setNewPost('')
  }

  return (
    <div className="feed-container">
      <form onSubmit={handleSubmit} className="post-input-container glass">
        <div className="input-row">
          <div className="user-avatar">
            {isAnonymous ? <UserSecret size={20} /> : <UserIcon size={20} />}
          </div>
          <textarea 
            placeholder="What's happening on campus?"
            value={newPost}
            onChange={(e) => setNewPost(e.target.value)}
          />
        </div>
        <div className="input-actions">
          <button 
            type="button" 
            className={`anon-toggle ${isAnonymous ? 'active' : ''}`}
            onClick={() => setIsAnonymous(!isAnonymous)}
          >
            {isAnonymous ? 'Poisting Anonymously' : 'Post as yourself'}
          </button>
          <button type="submit" className="submit-btn" disabled={!newPost.trim()}>
            <Send size={18} />
            <span>Post</span>
          </button>
        </div>
      </form>

      <div className="posts-list">
        {posts.map((post) => (
          <motion.div 
            key={post.id} 
            layout
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="post-card glass"
          >
            <div className="post-header">
              <div className="post-avatar">
                {post.isAnonymous ? <UserSecret size={18} /> : <UserIcon size={18} />}
              </div>
              <div className="post-info">
                <span className="post-author">{post.author}</span>
                <span className="post-time">{post.timestamp}</span>
              </div>
            </div>
            
            <div className="post-content">
              {post.content}
            </div>
            
            <div className="post-actions">
              <button onClick={() => likePost(post.id)}>
                <Heart size={18} className={post.likes > 0 ? 'liked' : ''} />
                <span>{post.likes}</span>
              </button>
              <button>
                <MessageSquare size={18} />
                <span>{post.comments}</span>
              </button>
              <button>
                <Share2 size={18} />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      <style jsx>{`
        .feed-container {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .post-input-container {
          padding: 16px;
          border-radius: var(--radius-lg);
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .input-row {
          display: flex;
          gap: 12px;
        }

        .user-avatar {
          width: 40px;
          height: 40px;
          background: var(--bg-tertiary);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-secondary);
        }

        textarea {
          flex: 1;
          background: none;
          border: none;
          color: var(--text-primary);
          font-family: inherit;
          resize: none;
          padding: 8px 0;
          font-size: 1rem;
          outline: none;
          min-height: 40px;
        }

        .input-actions {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .anon-toggle {
          font-size: 0.8rem;
          color: var(--text-secondary);
          padding: 6px 12px;
          border-radius: 20px;
          border: 1px solid var(--glass-border);
          background: rgba(255, 255, 255, 0.05);
        }

        .anon-toggle.active {
          color: var(--accent-primary);
          border-color: var(--accent-primary);
          background: var(--accent-glow);
        }

        .submit-btn {
          background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
          color: white;
          padding: 8px 16px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          gap: 8px;
          font-weight: 600;
          box-shadow: 0 4px 12px var(--accent-glow);
        }

        .submit-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
          box-shadow: none;
        }

        .post-card {
          padding: 16px;
          border-radius: var(--radius-lg);
          margin-bottom: 16px;
        }

        .post-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 12px;
        }

        .post-avatar {
          width: 32px;
          height: 32px;
          background: var(--bg-tertiary);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-secondary);
        }

        .post-info {
          display: flex;
          flex-direction: column;
        }

        .post-author {
          font-weight: 600;
          font-size: 0.9rem;
        }

        .post-time {
          font-size: 0.75rem;
          color: var(--text-muted);
        }

        .post-content {
          font-size: 0.95rem;
          margin-bottom: 16px;
          white-space: pre-wrap;
        }

        .post-actions {
          display: flex;
          gap: 20px;
          border-top: 1px solid var(--glass-border);
          padding-top: 12px;
        }

        .post-actions button {
          display: flex;
          align-items: center;
          gap: 6px;
          color: var(--text-secondary);
          font-size: 0.85rem;
        }

        .post-actions button:hover {
          color: var(--text-primary);
        }

        .liked {
          color: var(--error);
          fill: var(--error);
        }
      `}</style>
    </div>
  )
}

export default Feed
