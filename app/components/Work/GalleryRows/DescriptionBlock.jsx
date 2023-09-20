import { motion } from "framer-motion"

import { descriptionAnimationProps } from "./animation"

export default function DescriptionBlock() {
  return (
    <motion.div className="block description-block" {...descriptionAnimationProps}>
      <div className="image-title">
        <h3>The New Originals, Amsterdam</h3>
      </div>
      <div className="image-date">
        <h3>2023</h3>
      </div>
      <div className="image-description">
        <h4>Some description here. Anything about the picture or just some thoughts. Could be optional.</h4>
      </div>
    </motion.div>
  )
}
