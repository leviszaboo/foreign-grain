import { create } from 'zustand'

export const TogglePages = create((set) => ({
  isWorkVisible: false,
  isHomeVisible: true,
  toggleWork: () => {
    set((state) => ({ 
      isWorkVisible: !state.isWorkVisible, 
      }));
    },
}));