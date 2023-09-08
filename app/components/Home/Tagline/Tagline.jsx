"use client";

import { motion, AnimatePresence } from "framer-motion";

import { useMenuStore } from "../../../hooks/useMenu";
import { taglineAnimationProps } from "./animation";

export default function Tagline() {
  const { isMenuVisible } = useMenuStore()

  return (
    <>
      <AnimatePresence>
        {!isMenuVisible && (
          <div className="main-tagline">
            <motion.h2 {...taglineAnimationProps}>
              PEOPLE PLACES POSSIBILITIES
            </motion.h2>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}