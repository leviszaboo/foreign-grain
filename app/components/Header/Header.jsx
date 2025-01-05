"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useStartButtonStore } from "../../hooks/useStartButtonStore";
import { fadeInAnimationProps } from "./animation";

export default function Header() {
  const { isButtonClicked } = useStartButtonStore();

  return (
    <motion.header {...fadeInAnimationProps}>
      <AnimatePresence>
        {!isButtonClicked && (
          <div className="logo-wrapper">
            <img
              src="/logo.png"
              alt="Foreign Grain Logo"
              className="logo pt-15"
            />
          </div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
