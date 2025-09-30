"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

import { useMenuStore } from "../../../hooks/useMenuStore";
import { contentSwitcherAnimationProps } from "./animation";
import { useState } from "react";

export default function ContentSwitcher() {
  const [activeLink, setActiveLink] = useState(null);
  const { isMenuVisible } = useMenuStore();
  const currentPathname = usePathname();

  useEffect(() => {
    setActiveLink(currentPathname);
  }, [currentPathname]);

  const regex = /^\/digital.*$/;

  return (
    // <AnimatePresence>
    //   {!isMenuVisible && (
    <h1
      className="content-switcher"
      // {...contentSwitcherAnimationProps}
    >
      <Link
        href="/gallery"
        className={activeLink == "/gallery" ? "active-switch" : ""}
      >
        GALLERY
      </Link>
      <span>/</span>
      <Link
        href="/digital"
        className={regex.test(activeLink) ? "active-switch" : ""}
      >
        PORTFOLIO
      </Link>
    </h1>
    //   )}
    // </AnimatePresence>
  );
}
