"use client"

import Link from "next/link";
import { motion } from "framer-motion";
import ContentSwitcher from "../Work/ContentSwitcher/ContentSwitcher";
import { fadeInAnimationProps } from "./animation";


export default function WorkHeader() {

    return (
      <motion.header {...fadeInAnimationProps}>
        <div className="title-wrapper title-small">
          <motion.h1 className={`title`} {...fadeInAnimationProps}>
            <Link href="/">
              Foreign Grain
            </Link>
          </motion.h1>
        </div>
        <ContentSwitcher />
      </motion.header>
  );
}
