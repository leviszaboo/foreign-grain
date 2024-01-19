"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { fadeInScaleAnimationProps } from "./animation"

export default function Signature() {
  return (
    <motion.div {...fadeInScaleAnimationProps}>
    <div className="signature">
       <h1>
         Developed by&nbsp;
         <Link href={"https://github.com/leviszaboo"} target="_blank">
          Levi
         </Link>
       </h1>
    </div>
    </motion.div>
  )
}
