import { create } from 'zustand'

export const useSlideshowStore = create((set) => ({
  
  currentSlide: 0,
  setCurrentSlide: (value) => set({ 
    currentSlide:  value}),
  })
);