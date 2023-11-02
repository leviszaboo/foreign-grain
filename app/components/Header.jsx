"use client"

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";


import MenuButton from "./Menu/MenuButton/MenuButton";
import { useStartButtonStore } from "../hooks/useStartButtonStore";
import ContentSwitcher from "./Work/ContentSwitcher/ContentSwitcher";
import { usePathname } from "next/navigation";

export default function Header() {
    const [showWorkSwitcher, setshowWorkSwitcher] = useState(false);
    const [smallTitle, setSmallTitle] = useState(false);

    const [headerOptions, setHeaderOptions] = useState({
      smallTitlle: false,

    })

    const currentPathname = usePathname();

    useEffect(() => {
      setSmallTitle(currentPathname !== '/'); 
      setshowWorkSwitcher(currentPathname === '/analog' || currentPathname === '/digital')
    }, [currentPathname]);

    const { isButtonClicked } = useStartButtonStore();

    return (
      <>
        <header>
          <div className="flex-button">
            <MenuButton />
          </div>
        <AnimatePresence>
          {!isButtonClicked && (
            <div className="flex-title">
              <div className={`title-wrapper ${smallTitle ? "title-small" : null}`}>
                <motion.h1 
                  className={`title`}
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
              </div>
            </div>
          )}
          <div className="flex-switcher">
          {showWorkSwitcher && (
            <ContentSwitcher />
          )}
          </div>
        </AnimatePresence>
      </header>
    </>
  );
}


