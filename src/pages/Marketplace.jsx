import React, { useState } from 'react'
import { useMarketStore } from '../stores/useMarketStore'
import { ShoppingBag, Tag, Search, PlusCircle, Filter } from 'lucide-react'
import { motion } from 'framer-motion'

const Marketplace = () => {
  const { items } = useMarketStore()
  const [search, setSearch] = useState('')

  const filteredItems = items.filter(item => 
    item.title.toLowerCase().includes(search.toLowerCase()) ||
    item.category.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="market-container">
      <div className="search-box glass">
        <Search size={18} />
        <input 
          type="text" 
          placeholder="What are you looking for?" 
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Filter size={18} />
      </div>

      <div className="categories">
        {['All', 'Electronics', 'Furniture', 'Books', 'Other'].map(cat => (
          <button key={cat} className={`cat-tag ${cat === 'All' ? 'active' : ''}`}>
            {cat}
          </button>
        ))}
      </div>

      <div className="items-grid">
        {filteredItems.map((item) => (
          <motion.div 
            key={item.id}
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="item-card glass"
          >
            <div className="item-image">
              <ShoppingBag size={32} />
              <div className="price-tag">${item.price}</div>
            </div>
            <div className="item-info">
              <h3 className="item-title">{item.title}</h3>
              <div className="item-meta">
                <span className="condition">{item.condition}</span>
                <span className="dot">•</span>
                <span className="category">{item.category}</span>
              </div>
              <div className="seller-box">
                <span className="seller-name">By {item.seller}</span>
                <span className="time">{item.timestamp}</span>
              </div>
            </div>
            <button className="contact-btn">
              Contact
            </button>
          </motion.div>
        ))}
      </div>

      <button className="fab-btn glass">
        <PlusCircle size={24} />
      </button>

      <style jsx>{`
        .market-container {
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

        .categories {
          display: flex;
          gap: 10px;
          overflow-x: auto;
          padding-bottom: 10px;
          scrollbar-width: none;
        }

        .cat-tag {
          padding: 6px 14px;
          border-radius: 20px;
          border: 1px solid var(--glass-border);
          font-size: 0.8rem;
          color: var(--text-secondary);
          white-space: nowrap;
        }

        .cat-tag.active {
          background: var(--accent-primary);
          color: white;
          border-color: var(--accent-primary);
        }

        .items-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
        }

        .item-card {
          border-radius: var(--radius-md);
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }

        .item-image {
          height: 120px;
          background: var(--bg-tertiary);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-muted);
          position: relative;
        }

        .price-tag {
          position: absolute;
          bottom: 8px;
          right: 8px;
          background: var(--accent-primary);
          color: white;
          padding: 2px 8px;
          border-radius: 8px;
          font-weight: 700;
          font-size: 0.9rem;
          box-shadow: 0 4px 8px rgba(0,0,0,0.2);
        }

        .item-info {
          padding: 12px;
          flex: 1;
        }

        .item-title {
          font-size: 0.9rem;
          margin-bottom: 4px;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .item-meta {
          font-size: 0.7rem;
          color: var(--text-muted);
          display: flex;
          align-items: center;
          gap: 4px;
          margin-bottom: 8px;
        }

        .seller-box {
          display: flex;
          justify-content: space-between;
          font-size: 0.65rem;
          color: var(--text-secondary);
        }

        .contact-btn {
          width: 100%;
          padding: 8px;
          background: rgba(255,255,255,0.05);
          color: var(--accent-primary);
          font-size: 0.8rem;
          font-weight: 600;
          border-top: 1px solid var(--glass-border);
        }

        .fab-btn {
          position: fixed;
          bottom: calc(var(--nav-height) + 20px);
          right: 20px;
          width: 56px;
          height: 56px;
          border-radius: 28px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-primary);
          box-shadow: 0 8px 16px rgba(0,0,0,0.3);
          border: 1px solid var(--accent-primary);
        }

        @media (max-width: 400px) {
          .items-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  )
}

export default Marketplace
