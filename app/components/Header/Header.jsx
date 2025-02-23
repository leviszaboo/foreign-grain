"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useStartButtonStore } from "../../hooks/useStartButtonStore";
import { fadeInAnimationProps } from "./animation";
import Image from "next/image";
import MenuButton from "../Menu/MenuButton/MenuButton";

export default function Header() {
  const { isButtonClicked } = useStartButtonStore();

  return (
    <>
      <MenuButton useAsNavigator={false} />
      <motion.header {...fadeInAnimationProps}>
        <AnimatePresence>
          {!isButtonClicked && (
            <div className="logo-wrapper">
              <Image
                src="/logo.png"
                alt="Foreign Grain Logo"
                className="logo pt-15"
                width={247.64}
                height={89}
              />
            </div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
