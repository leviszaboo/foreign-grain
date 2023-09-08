import { motion } from "framer-motion"

import { useMenuStore } from "@/app/hooks/useMenu"
import { characterContainerAnimationProps } from "./animation"

export default function CharacterContainer() {
  const characters = [
    "/Media/graphic/teddy-1.png",
    "/Media/graphic/luigi-1.png",
    "/Media/graphic/luigi-3.png"
  ]

  const { characterIndex } = useMenuStore()

  return (
    <motion.div className="character-container" {...characterContainerAnimationProps}>
      <img className="character" src={characters[characterIndex]} />
    </motion.div>
  )
}
