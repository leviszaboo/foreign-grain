import { motion } from "framer-motion"

import { backdropAnimationProps } from "./animation"
import { useMenuStore } from "@/app/hooks/useMenuStore"

export default function Backdrop() {
  const { toggleMenu } = useMenuStore()
  
  return (
    <motion.div
      className="menu-backdrop"
      {...backdropAnimationProps}
      onClick={toggleMenu}
    >
    </motion.div>
  )
}
