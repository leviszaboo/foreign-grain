"use client";

import { motion } from "framer-motion";
import { useMenuStore } from "@/app/context/UIContext";
import { fadeIn } from "@/app/lib/animations";

export default function MenuButton() {
  const { isMenuVisible, buttonDisabled, toggleMenu } = useMenuStore();

  function handleClick() {
    if (buttonDisabled) return;
    toggleMenu();
  }

  return (
    <motion.div
      className={`btn-hamburger-menu ${isMenuVisible ? "change" : ""}`}
      onClick={handleClick}
      {...fadeIn}
    >
      <div className="bar-bar-1"></div>
      <div className="bar-bar-2"></div>
    </motion.div>
  );
}
