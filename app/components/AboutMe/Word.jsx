import { motion, useTransform } from 'framer-motion'

export default function Word({ children, range, progress }) {
  const opacity = useTransform(progress, range, [0.2, 1]);

  return (
    <motion.span className="inline-block mr-2" style={{ opacity }}>
      {children}
    </motion.span>
  )
}
