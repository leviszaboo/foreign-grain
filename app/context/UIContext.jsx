"use client";

import { createContext, useContext, useState, useCallback } from "react";

/**
 * Unified UI state context
 * Manages menu visibility and related state
 */

const UIContext = createContext(null);

export function UIProvider({ children }) {
  // Menu state
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [characterIndex, setCharacterIndex] = useState(0);
  const [buttonDisabled, setButtonDisabled] = useState(false);

  // Toggle menu with debounce logic
  const toggleMenu = useCallback(() => {
    setIsMenuVisible((prev) => !prev);
    setButtonDisabled(true);

    setTimeout(() => {
      setButtonDisabled(false);
      setCharacterIndex((prev) => {
        // Only update character index when closing menu
        return isMenuVisible ? prev : (prev + 1) % 3;
      });
    }, 900);
  }, [isMenuVisible]);

  const value = {
    // Menu
    isMenuVisible,
    characterIndex,
    buttonDisabled,
    toggleMenu,
    setButtonDisabled,
  };

  return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
}

/**
 * Hook to access UI state
 */
export function useUI() {
  const context = useContext(UIContext);
  if (!context) {
    throw new Error("useUI must be used within a UIProvider");
  }
  return context;
}

// Compatibility hook for menu state
export function useMenuStore() {
  const { isMenuVisible, characterIndex, buttonDisabled, toggleMenu, setButtonDisabled } = useUI();
  return { isMenuVisible, characterIndex, buttonDisabled, toggleMenu, setButtonDisabled };
}
