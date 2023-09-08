import { motion } from "framer-motion";

export default function BlinkingArrows({ count, down, left }) {
  const spans = Array.from({ length: count }, (_, i) => (
    <motion.span
      key={i}
      animate={{
        opacity: [0.3, 1, 0.3],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        delay: 5.1 + 0.35 * i,
      }}
    >
      {left ? "<" : ">"}
    </motion.span>
  ));

  return <span className={down ? "down" : null}>{spans}</span>;
}

