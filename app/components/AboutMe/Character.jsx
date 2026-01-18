import { motion, useTransform } from 'framer-motion'

export default function Character({ children, range, progress }) {
  const opacity = useTransform(progress, range, [0, 1]);

  return (
    <motion.span className="inline-block" style={{opacity}}>
      {children}
    </motion.span>
  )
}
