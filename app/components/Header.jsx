"use client"

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";


import MenuButton from "./Menu/MenuButton/MenuButton";
import { useStartButtonStore } from "../hooks/useStartButtonStore";
import ContentSwitcher from "./Work/ContentSwitcher/ContentSwitcher";
import { usePathname } from "next/navigation";
import { useMenuStore } from "../hooks/useMenuStore";

export default function Header() {

    const [showWorkHeader, setShowWorkHeader] = useState(false);
    const { isMenuVisible,  } = useMenuStore()
    const currentPathname = usePathname();

    useEffect(() => {
      setShowWorkHeader(currentPathname !== '/'); 
    }, [currentPathname]);

    const { isButtonClicked } = useStartButtonStore();

    return (
      <>
      <header>
        <nav>
        <MenuButton/>
        <AnimatePresence>
          {!isButtonClicked && (
            <motion.h1 
              className={`title ${showWorkHeader ? "title-small" : null}`}
              initial={{ 
                opacity: 0 
              }}
              animate={{ 
                opacity: 1 
              }}
              exit={{ 
                opacity: 0 
              }}
              transition={{ 
                duration: 0.6 
              }}
            >
              <Link href="/">
                Foreign Grain
              </Link>
            </motion.h1>
          )}
          {showWorkHeader && <ContentSwitcher />}
        </AnimatePresence>
        </nav>
        </header>
    </>
  );
}
