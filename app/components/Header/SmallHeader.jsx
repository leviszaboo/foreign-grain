"use client";

import { motion } from "framer-motion";
import { fadeInAnimationProps } from "./animation";
import ContentSwitcher from "../Work/ContentSwitcher/ContentSwitcher";

export default function SmallHeader({ showSwitcher = false }) {
  return (
    <motion.header {...fadeInAnimationProps}>
      <div className="logo-wrapper logo-small">
        <img src="/logo.png" alt="Foreign Grain Logo" className="logo pb-15" />
      </div>
      {showSwitcher && <ContentSwitcher />}
    </motion.header>
  );
}
