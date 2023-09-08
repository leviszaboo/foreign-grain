"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useMenuStore } from "../../hooks/UseMenu";

export default function Tagline() {

  const { isMenuVisible } = useMenuStore()

  return (
    <>
      <AnimatePresence>
        {!isMenuVisible && (
          <div className="main-tagline">
            <motion.h2 
                className="ppp"
                initial={{ 
                    opacity: 0, 
                    scale: 0.8}}
                animate={{ 
                    opacity: 1, 
                    scale: 1}}
                exit={{ 
                    opacity: 0, 
                    scale: 0.8, 
                    transition: { 
                        duration: 0.5 } 
                    }}
                transition = {{
                    duration: 0.45, 
                    delay: 0.22, 
                    ease: "easeInOut"
                }}
            >
              PEOPLE PLACES POSSIBILITIES
            </motion.h2>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}