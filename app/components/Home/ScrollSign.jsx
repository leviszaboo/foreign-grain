import { useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { useStartButtonStore } from "@/app/hooks/UseStartButton";

export default function ScrollSign() {
  const spanCount = 3;
  const spans = [];
  const ref = useRef()

  const { scrollYProgress } = useScroll()
  let y = useTransform(scrollYProgress, [0, 1], ["0%", "0%"])

  for (let i = 0; i < spanCount; i++) {
    spans.push(
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
        &gt;
      </motion.span>
    );
  }
  
  return (
    <>
     <motion.h2
        className="start-scroll"
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 1.3,
          ease: "easeIn",
          delay: 5,
        }}
      >
        <span className="down">{spans}</span>
          <motion.span
            initial={{
              y: 5,
            }}
            animate={{
              y: 0,
            }}
            transition={{
              duration: 0.8,
              ease: "easeIn",
              delay: 5.1,
            }}
            onClick={() => {}}
          >
            scroll down
          </motion.span>
        <span className="down">{spans}</span>
      </motion.h2>
    </>
  )
}
