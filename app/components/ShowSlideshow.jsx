"use client"
import { motion, AnimatePresence } from 'framer-motion'
import { useStartButtonStore } from '../hooks/useStartButtonStore'

export default function ShowSlideshow({ children }) {
  const { isButtonClicked } = useStartButtonStore()
  return (
    <AnimatePresence>
    {!isButtonClicked && (
        <motion.div
            initial = {{ 
                opacity: 0 
            }}
            animate = {{
                opacity: 1
            }}
            exit= {{
                opacity: 0
            }}
            transition={{
                duration: 0.5
            }}
        >
            { children }
        </motion.div>
    )}
  </AnimatePresence>
  )
}
