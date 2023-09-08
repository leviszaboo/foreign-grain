import { motion } from "framer-motion"

import { dividerAnimationProps } from "./animation"

export default function Divider() {
  return (
    <motion.div className="divider" {...dividerAnimationProps}>
    </motion.div>
  )
}
