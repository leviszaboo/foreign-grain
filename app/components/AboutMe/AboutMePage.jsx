"use client"

import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { motion, AnimatePresence } from "framer-motion";
import { useMenuStore } from "@/app/hooks/useMenuStore";
import FadeIn from "../FadeIn";
import Paragraph from "./Paragraph";
import { fadeInAnimationProps } from "./animation";
import AboutMeGallery from "./AboutMeGallery";
import TextBlock from './TextBlock';

export default function AboutMePage({ paragraphs, sources }) {
  const { isMenuVisible } = useMenuStore();

  return (
    <AnimatePresence>
      {!isMenuVisible && (
        <motion.div className="aboutme-wrapper" {...fadeInAnimationProps}>
          <TextBlock paragraphs={paragraphs} />
          <AboutMeGallery sources={sources} />
        </motion.div>
      )}
    </AnimatePresence>
  )
}