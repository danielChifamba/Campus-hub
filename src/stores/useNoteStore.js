import { create } from 'zustand'

export const useNoteStore = create((set) => ({
  notes: [
    {
      id: 1,
      title: 'Advanced Calculus Summary',
      course: 'MATH301',
      author: 'Professor X',
      downloads: 145,
      type: 'PDF',
      size: '2.4MB'
    },
    {
      id: 2,
      title: 'Intro to Economics - Week 1-4',
      course: 'ECON101',
      author: 'John Doe',
      downloads: 89,
      type: 'DOCX',
      size: '1.1MB'
    },
    {
      id: 3,
      title: 'Data Structures & Algorithms',
      course: 'CS202',
      author: 'Jane Smith',
      downloads: 230,
      type: 'PDF',
      size: '4.7MB'
    }
  ],
  addNote: (note) => set((state) => ({ 
    notes: [
      { 
        id: Date.now(), 
        downloads: 0, 
        ...note 
      }, 
      ...state.notes 
    ] 
  }))
}))
