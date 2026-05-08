import { create } from 'zustand'

export const useMarketStore = create((set) => ({
  items: [
    {
      id: 1,
      title: 'Ergonomic Desk Chair',
      price: 45,
      seller: 'Mike R.',
      category: 'Furniture',
      condition: 'Like New',
      timestamp: '1d ago'
    },
    {
      id: 2,
      title: 'Ti-84 Plus Calculator',
      price: 30,
      seller: 'Emma W.',
      category: 'Electronics',
      condition: 'Good',
      timestamp: '2d ago'
    },
    {
      id: 3,
      title: 'Bike Lock & Chain',
      price: 15,
      seller: 'Chris O.',
      category: 'Outdoors',
      condition: 'Well Used',
      timestamp: '3d ago'
    }
  ],
  addItem: (item) => set((state) => ({ 
    items: [
      { 
        id: Date.now(), 
        timestamp: 'Just now', 
        ...item 
      }, 
      ...state.items 
    ] 
  }))
}))
