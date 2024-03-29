"use client"
import { motion, AnimatePresence } from 'framer-motion'
import { useStartButtonStore } from '../hooks/useStartButtonStore'

export default function Footer() {

  const currentYear = new Date().getFullYear();
  const { isButtonClicked } = useStartButtonStore();

  return (
    <>
      <AnimatePresence>
        {!isButtonClicked && (
          <motion.div
            initial={{ 
              opacity: 0, 
            }}
            animate={{ 
              opacity: 1, 
            }}
            exit={{ 
              opacity: 0, 
              }}
            transition = {{
              duration: 0.6, 
            }}
          >
            <div className="sub-label-wrapper" style={{bottom: "30px"}}>
              <h2 className="sub-label">
                *amsterdam <span>{currentYear}</span>
              </h2>
            </div> 
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}