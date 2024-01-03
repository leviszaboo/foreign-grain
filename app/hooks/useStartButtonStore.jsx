import { create } from 'zustand'

export const useStartButtonStore = create((set) => ({
  isButtonClicked: false,
  setButtonClicked: (value) => set({ 
    isButtonClicked: value }),
  })
);