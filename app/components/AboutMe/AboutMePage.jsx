"use client"

import { motion, AnimatePresence } from "framer-motion";
import { useMenuStore } from "@/app/hooks/useMenuStore";
import { fadeInAnimationProps } from "./animation";
import AboutMeGallery from "./AboutMeGallery";
import TextBlock from './TextBlock';

export default function AboutMePage({ paragraphs, sources }) {
  const { isMenuVisible } = useMenuStore();

  return (
    <AnimatePresence>
      {!isMenuVisible && (
        <motion.div className="aboutme-wrapper">
            <TextBlock paragraphs={paragraphs} />
            <AboutMeGallery sources={sources} />
        </motion.div>
      )}
    </AnimatePresence>
  )
}