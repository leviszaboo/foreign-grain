"use client";

import { motion, AnimatePresence } from "framer-motion";

import { useMenuStore } from "../../../hooks/useMenuStore";
import { useStartButtonStore } from "@/app/hooks/useStartButtonStore"
import { buttonAnimationProps } from "./animation";


export default function Startbutton() {

  const { isMenuVisible } = useMenuStore();
  const chars = "<>/?;\\[{}]+_ABEGHPTYWOERSQ";
  const {
    isStarted,
    buttonText,
    setIsStarted,
    setButtonText,
    setButtonClicked
  } = useStartButtonStore();

  function handleClick() {
    setButtonClicked(true)
  }

  const handleMouseEnter = () => {
    if (isStarted) return;
    setIsStarted(true);
    let iterations = 0;

    const interval = setInterval(() => {
      setButtonText(
        buttonText
        .split("")
        .map((letter, index) => {
          if (index + 1 < iterations) {
          return letter;
          }
          return chars[Math.floor(Math.random() * chars.length)];
        }).join("")
      );

      if (iterations > buttonText.length + 1) {
        clearInterval(interval);
        setIsStarted(false);
    }
      iterations += 1/2;
    }, 50);
  }

  return (
    <>
      <AnimatePresence>
        {!isMenuVisible && (
           <motion.div className="button-wrapper" {...buttonAnimationProps}>
            <button className="start" onClick={handleClick} onMouseEnter={handleMouseEnter}>
                <h2 className="start-h2">{buttonText}</h2>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}