"use client";

import { motion } from "framer-motion";
import { useMenuStore } from "../../../hooks/useMenuStore";
import { useStartButtonStore } from "../../../hooks/useStartButtonStore";
import { menuButtonAnimationProps } from "./animation"

export default function MenuButton() {
  const { isMenuVisible, buttonDisabled ,toggleMenu } = useMenuStore();
  const { isButtonClicked, setButtonClicked } = useStartButtonStore();

  function handleClick() {
    if (!buttonDisabled && !isButtonClicked) {
      toggleMenu()
    } else if (!buttonDisabled && isButtonClicked) {
      setButtonClicked(false)
    } else {
      return
    }
  }

  return (
    <>
      <motion.div 
        className={`btn-hamburger-menu ${ isMenuVisible ? 'change' : null } ${isButtonClicked ? 'intro-open' : null }`}
        onClick={handleClick}
        {...menuButtonAnimationProps}
        >
          <div 
            className="bar-bar-1">
          </div>
          <div 
            className="bar-bar-2">
          </div>
        </motion.div>
      </>
  );
}

