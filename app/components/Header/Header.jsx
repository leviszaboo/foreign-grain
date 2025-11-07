"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { useWindowSize } from "rooks";
import { useStartButtonStore } from "../../hooks/useStartButtonStore";
import { useMenuStore } from "@/app/hooks/useMenuStore";
import { fadeInAnimationProps } from "./animation";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import MenuButton from "../Menu/MenuButton/MenuButton";
import ContentSwitcher from "../Work/ContentSwitcher/ContentSwitcher";
import { BREAKPOINTS } from "@/app/utils/constants";

export default function Header() {
  const { isButtonClicked } = useStartButtonStore();
  const { isMenuVisible } = useMenuStore();

  const [activeLink, setActiveLink] = useState(null);
  const [isHovering, setIsHovering] = useState(false);
  const { innerWidth } = useWindowSize();
  const currentPathname = usePathname();

  useEffect(() => {
    setActiveLink(currentPathname);
  }, [currentPathname]);

  const regex = /^\/gallery.*|^\/digital.*$/;

  const showContentSwitcher =
    innerWidth < BREAKPOINTS.TABLET &&
    regex.test(currentPathname) &&
    !isMenuVisible;

  return (
    <>
      <MenuButton useAsNavigator={false} />
      <motion.header {...fadeInAnimationProps}>
        <AnimatePresence>
          {!isButtonClicked && (
            <>
              <div className="logo-wrapper">
                <AnimatePresence mode="wait">
                  {showContentSwitcher ? (
                    <motion.div
                      key="content-switcher"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ContentSwitcher />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="logo"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Link href="/">
                        <Image
                          src="/logo.png"
                          alt="Foreign Grain Logo"
                          className="logo"
                          width={500}
                          height={300}
                        />
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <nav>
                <div
                  className="nav-item-dropdown"
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                >
                  <h2 className={regex.test(activeLink) ? "active-switch" : ""}>
                    <Link href="/gallery">PHOTOGRAPHY</Link>
                  </h2>
                  <AnimatePresence>
                    {isHovering && (
                      <motion.div
                        className="dropdown"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ContentSwitcher />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                <h2
                  className={activeLink == "/about-me" ? "active-switch" : ""}
                >
                  <Link href="/about-me">ABOUT</Link>
                </h2>
                <h2 className={activeLink == "/contact" ? "active-switch" : ""}>
                  <Link href="/contact">CONTACT</Link>
                </h2>
              </nav>
            </>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
