"use client"

import { motion } from "framer-motion"
import { fadeInScaleAnimationProps } from "./animation"

export default function ContactLabel() {
  return (
    <motion.div {...fadeInScaleAnimationProps}>
      <div className="contact-label-wrapper">
        <h1 className="contact-label">LET&apos;S GET IN TOUCH.</h1>
      </div>
    </motion.div>
  )
}
