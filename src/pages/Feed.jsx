import React, { useState } from 'react'
import { usePostStore } from '../stores/usePostStore'
import { MessageSquare, Heart, Share2, Send, Shield as UserSecret, User as UserIcon } from 'lucide-react'
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


    </div>
  )
}

export default Feed
