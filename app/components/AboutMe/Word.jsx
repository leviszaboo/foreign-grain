import { motion, useTransform } from 'framer-motion'
import React from 'react'

export default function Word({ children, range, progress }) {
  const opacity = useTransform(progress, range, [0, 1]);
  
  return (
    <motion.span className="aboutme-word" style={{opacity}}>
      {children}
    </motion.span>
  )
}
