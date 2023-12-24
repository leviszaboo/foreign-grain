"use client"

import { motion, AnimatePresence } from "framer-motion";
import { useMenuStore } from "@/app/hooks/useMenuStore";
import FadeIn from "../FadeIn";
import TextBlock from "./TextBlock";
import { fadeInAnimationProps } from "./animation";
import AboutMeGallery from "./AboutMeGallery";

export default function AboutMePage({ paragraphs, sources }) {
  const { isMenuVisible } = useMenuStore();

  return (
    <AnimatePresence>
      {!isMenuVisible && (
        <motion.div className="aboutme-wrapper" {...fadeInAnimationProps}>
          <div className="aboutme-text-wrapper">
            {paragraphs.map((paragraph, i) => {
              return (
                <TextBlock text={paragraph} key={i}/>
              )
            })}
          </div>
          <AboutMeGallery sources={sources}/>
        </motion.div>
      )}
    </AnimatePresence>
  )
}