"use client"

import { motion, AnimatePresence } from "framer-motion";
import { useMenuStore } from "@/app/context/UIContext";
import HeroSection from "./HeroSection";
import ScrollingQuote from "./ScrollingQuote";
import LinkToContact from './LinkToContact';

export default function AboutMePage({ paragraphs, sources }) {
  const { isMenuVisible } = useMenuStore();

  return (
    <AnimatePresence>
      {!isMenuVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <HeroSection sources={sources} />
          <ScrollingQuote paragraphs={paragraphs} />
          <LinkToContact />
        </motion.div>
      )}
    </AnimatePresence>
  )
}