import { create } from 'zustand'

export const usePostStore = create((set) => ({
  posts: [
    {
      id: 1,
      author: 'Daniel',
      content: 'Does anyone have the notes for CS101 lecture today?',
      timestamp: '2h ago',
      isAnonymous: false,
      likes: 12,
      comments: 5
    },
    {
      id: 2,
      author: 'Anonymous',
      content: 'Pro tip: The library 3rd floor is empty right now if anyone needs a quiet study spot!',
      timestamp: '4h ago',
      isAnonymous: true,
      likes: 24,
      comments: 2
    },
    {
      id: 3,
      author: 'Sarah',
      content: 'Selling my old chemistry textbook. DM if interested!',
      timestamp: '5h ago',
      isAnonymous: false,
      likes: 3,
      comments: 1
    }
  ],
  addPost: (post) => set((state) => ({ 
    posts: [
      { 
        id: Date.now(), 
        timestamp: 'Just now', 
        likes: 0, 
        comments: 0, 
        ...post 
      }, 
      ...state.posts 
    ] 
  })),
  likePost: (id) => set((state) => ({
    posts: state.posts.map(p => p.id === id ? { ...p, likes: p.likes + 1 } : p)
  }))
}))
