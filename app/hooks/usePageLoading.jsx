import { create } from 'zustand'

export const usePageLoadingStore = create((set) => ({
  loading: false,
  setLoading: (value) => set({ 
    scrollDown:  value}),
  })
);