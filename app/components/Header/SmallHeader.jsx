"use client"

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInAnimationProps } from "./animation";

export default function SmallHeader() {

    return (
      <motion.header {...fadeInAnimationProps}>
        <div className="title-wrapper title-small">
          <h1 className="title" {...fadeInAnimationProps}>
            <Link href="/">
              Foreign Grain
            </Link>
          </h1>
        </div>
      </motion.header>
  );
}