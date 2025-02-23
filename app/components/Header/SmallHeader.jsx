"use client";

import { motion } from "framer-motion";
import { fadeInAnimationProps } from "./animation";
import ContentSwitcher from "../Work/ContentSwitcher/ContentSwitcher";
import MenuButton from "../Menu/MenuButton/MenuButton";

export default function SmallHeader({
  showSwitcher = false,
  useMenuButtonAsNavigator = false,
}) {
  return (
    <>
      <MenuButton useAsNavigator={useMenuButtonAsNavigator} />
      <motion.header {...fadeInAnimationProps}>
        <div className="logo-wrapper logo-small">
          <img
            src="/logo.png"
            alt="Foreign Grain Logo"
            className="logo pb-15"
          />
        </div>
        {showSwitcher && <ContentSwitcher />}
      </motion.header>
    </>
  );
}
