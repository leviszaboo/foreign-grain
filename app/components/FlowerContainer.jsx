import { motion } from "framer-motion";

export default function FlowerContainer({
  className,
  imageClassName,
  imageSrc,
  id,
  initial,
  animate,
  exit,
  transition,
  onClick,
  forwardedRef,
}) {
  return (
    <motion.div
      id={id}
      className={`cursor-pointer transition-transform duration-300 ${className}`}
      initial={initial}
      animate={animate}
      exit={exit}
      transition={transition}
      onClick={onClick}
      ref={forwardedRef}
    >
      <img className={`w-full h-auto ${imageClassName}`} src={imageSrc} alt="" />
    </motion.div>
  );
}
