import { motion } from 'framer-motion';

export default function FlowerContainer({ className, imageClassName, imageSrc, id, initial, animate, exit, transition, onClick, forwardedRef }) {
  return (
    <motion.div
      id={id}
      className={className}
      initial={initial}
      animate={animate}
      exit={exit}
      transition={transition}
      onClick={onClick}
      ref={forwardedRef}
    >
      <img
        className={`flower ${imageClassName}`}
        src={imageSrc}
      />
    </motion.div>
  )
};
