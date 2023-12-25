import { motion, useTransform } from 'framer-motion'
import React from 'react'

export default function Word({ children, range, progress, color }) {
  const opacity = useTransform(progress, range, [0.2, 1]);
  
  return (
    <motion.span className="aboutme-word" style={{opacity, color}}>
      {children}
    </motion.span>
  )
}
