import { motion } from "framer-motion"

import { useMenuStore } from "@/app/hooks/UseMenu"

export default function CharacterContainer() {
  const characters = [
    "/Media/graphic/teddy-1.png",
    "/Media/graphic/luigi-1.png",
    "/Media/graphic/luigi-3.png"
  ]

  const { characterIndex } = useMenuStore()

  return (
    <motion.div 
      className="character-container"
      initial={{
        opacity: 0
      }}
      animate={{
        opacity: 1,
      }}
      exit={{   
        opacity: 0, 
        transition: {
          duration: 0.25,
          delay: 0.1,
          ease: "easeInOut" 
        }
      }}
      transition={{
        duration: 1.2,
        ease: "easeInOut"
      }}
    >
      <img 
        className="character" 
        src={characters[characterIndex]}
      />
    </motion.div>
  )
}
