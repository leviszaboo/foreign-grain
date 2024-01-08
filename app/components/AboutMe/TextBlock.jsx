import { motion } from "framer-motion"
import MainTitle from "./MainTitle"
import Paragraph from "./Paragraph"
import { textBlockAnimationProps } from "./animation"

export default function TextBlock({ paragraphs }) {
  return (
    <motion.div className="aboutme-text-wrapper" {...textBlockAnimationProps}>
      <MainTitle />
      {paragraphs.map((paragraph, i) => {
        return (
          <Paragraph text={paragraph.value} key={i} />
        )
      })}
    </motion.div>
  )
}
