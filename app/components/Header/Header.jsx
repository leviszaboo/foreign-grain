"use client"

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useStartButtonStore } from "../../hooks/useStartButtonStore";
import { fadeInAnimationProps } from "./animation";


export default function Header() {
    const { isButtonClicked } = useStartButtonStore();

    return (
      <motion.header {...fadeInAnimationProps}>
        <AnimatePresence>
          {!isButtonClicked && (
            <div className="title-wrapper">
              <motion.h1 className="title" {...fadeInAnimationProps}>
                <Link href="/">
                  Foreign Grain
                </Link>
              </motion.h1>
            </div>
          )}
        </AnimatePresence>
      </motion.header>
  );
}


