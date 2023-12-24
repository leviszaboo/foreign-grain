import { motion, useTransform } from 'framer-motion'
import React from 'react'

export default function Character({ children, range, progress }) {
  const opacity = useTransform(progress, range, [0, 1]);

  return (
    <motion.span className="aboutme-character" style={{opacity}}>
      {children}
    </motion.span>
  )
}
