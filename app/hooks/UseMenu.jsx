import { create } from 'zustand';

export const useMenuStore = create((set) => ({
  characterIndex: 0,
  isMenuVisible: false,
  buttonDisabled: false,
  toggleMenu: () => {
    set((state) => ({
      isMenuVisible: !state.isMenuVisible,
      buttonDisabled: true,
    }));

    setTimeout(() => {
      set((state) => ({
        buttonDisabled: false,
        characterIndex: (state.isMenuVisible ? state.characterIndex : (state.characterIndex + 1) % 3),
      }));
      
    }, 900);
  },
}));
