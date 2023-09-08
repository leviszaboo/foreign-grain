import { motion } from "framer-motion";
import { useRef, useEffect } from "react";
import { useInView } from "framer-motion";

import BlinkingArrows from "./BlinkingArrows";

import { useIntroScrollStore } from "@/app/hooks/useIntroScroll";

export default function ScrollSign() {
  
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
        <div>
          <BlinkingArrows count={3} down={true} left={false}/>
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
          <BlinkingArrows count={3} down={true} left={false}/>
        </div>
      </motion.h2>
    </>
  )
}
