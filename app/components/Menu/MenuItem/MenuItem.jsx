"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function MenuItem({ href, label, toggleMenu, delay = 0 }) {
  return (
    <motion.li
      className="animate-fade-in"
      style={{ animationDelay: `${delay}s` }}
      exit={{
        scale: 0.6,
        opacity: 0,
        transition: { duration: 0.5, delay: delay }
      }}
    >
      <Link
        href={href}
        onClick={toggleMenu}
        className="relative font-light inline-block py-4 no-underline text-left z-[120] text-white hover:text-[#ffd700] transition-colors max-sm:py-3 tracking-wider"
      >
        {label}
      </Link>
    </motion.li>
  );
}
