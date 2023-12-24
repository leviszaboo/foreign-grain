'use client'
 
import { usePathname } from 'next/navigation'
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

import { useMenuStore } from '../../../hooks/useMenuStore';
import { contentSwitcherAnimationProps } from "./animation";
import { useState } from "react";

export default function ContentSwitcher() {
  const [activeLink, setActiveLink] = useState(null)
  const { isMenuVisible } = useMenuStore();
  const currentPathname = usePathname();

  useEffect(() => {

    if (currentPathname === '/analog') {
      setActiveLink(0);
    } else if (currentPathname === '/digital') {
      setActiveLink(1);
    }
  }, [currentPathname]);

  return (
    <AnimatePresence>
      {!isMenuVisible && (
        <motion.h1 className="content-switcher" {...contentSwitcherAnimationProps}> 
          <Link href="/analog" className={`${activeLink === 0 ? "active-switch" : null}`}>
            ANALOG
          </Link>
          <span>/</span>
          <Link href="/digital" className={`${activeLink === 1 ? "active-switch" : null}`}>
            DIGITAL
          </Link>
        </motion.h1>
      )}
    </AnimatePresence>
  )
}
