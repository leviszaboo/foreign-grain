import { create } from 'zustand'

export const useStartButtonStore = create((set) => ({
  isStarted: false,
  isButtonClicked: false,
  buttonText: 'START!',
  setIsStarted: (value) => set({ 
    isStarted:  value}),
  setButtonText: (value) => set({ 
    buttonText: value }),
  setButtonClicked: (value) => set({ 
    isButtonClicked: value }),
  })
);