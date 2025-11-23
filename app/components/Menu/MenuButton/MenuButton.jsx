"use client";

import { motion } from "framer-motion";
import { useMenuStore } from "../../../hooks/useMenuStore";
import { useStartButtonStore } from "../../../hooks/useStartButtonStore";
import { menuButtonAnimationProps } from "./animation";
import { useRouter } from "next/navigation";

export default function MenuButton({ useAsNavigator }) {
  const { isMenuVisible, buttonDisabled, toggleMenu } = useMenuStore();
  const { isButtonClicked, setButtonClicked } = useStartButtonStore();
  const router = useRouter();

  function handleClick() {
    if (buttonDisabled) return;

    if (!buttonDisabled && !isButtonClicked && !useAsNavigator) {
      toggleMenu();
    } else if (!buttonDisabled && isButtonClicked) {
      setButtonClicked(false);
    } else if (!buttonDisabled && useAsNavigator) {
      router.push("/digital");
    }
  }

  return (
    <>
      <motion.div
        className={`btn-hamburger-menu ${isMenuVisible ? "change" : ""} ${useAsNavigator ? "navigator" : ""} ${isButtonClicked ? "intro-open" : ""}`}
        onClick={handleClick}
        {...menuButtonAnimationProps}
      >
        <div className="bar-bar-1"></div>
        <div className="bar-bar-2"></div>
      </motion.div>
    </>
  );
}
