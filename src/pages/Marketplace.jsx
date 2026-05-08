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


    </div>
  )
}

export default Marketplace
