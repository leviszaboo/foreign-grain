import { create } from 'zustand'

export const useIntroScrollStore = create((set) => ({
  scrollDown: false,
  setScrollDown: (value) => set({ 
    scrollDown:  value}),
  })
);