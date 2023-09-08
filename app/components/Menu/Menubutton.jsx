"use client";

import { motion } from "framer-motion";
import { useMenuStore } from "../../hooks/UseMenu";
import { useStartButtonStore } from "../../hooks/UseStartButton";

export default function Menubutton() {
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
        initial={{ 
          opacity: 0 
        }}
        animate={{ 
          opacity: 1 
        }}
        transition={{ 
          duration: 0.6 
        }}
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

