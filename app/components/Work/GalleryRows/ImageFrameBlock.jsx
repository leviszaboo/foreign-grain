import { motion } from "framer-motion"

import { frameAnimationProps } from "./animation"

export default function ImageFrameBlock({ src }) {
  return (
    <motion.div className="block" {...frameAnimationProps}>
      <img src={src}/>
    </motion.div>
  )
}
