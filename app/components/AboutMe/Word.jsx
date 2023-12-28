import { motion, useTransform } from 'framer-motion'
import React from 'react'

export default function Word({ children, range, progress, color, paragraphNumber }) {
  const opacity = useTransform(progress, range, [0.2, 1]);
  // const opacity = paragraphNumber === 0 ? 1 : transformed;
  
  return (
    <motion.span className="aboutme-word" style={{opacity, color}}>
      {children}
    </motion.span>
  )
}
