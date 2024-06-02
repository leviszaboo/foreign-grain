"use client";

import { useMenuStore } from "../../../hooks/useMenuStore";
import { motion, AnimatePresence } from "framer-motion";

import MenuItem from "../MenuItem/MenuItem";
import Divider from "../Divider/Divider";
import CharacterContainer from "../CharacterContainer/CharacterContainer";
import MenuFlowers from "../Flowers/MenuFlowers";
import Backdrop from "../Backdrop/Backdrop";
import { menuAnimationProps } from "./animation";

export default function Menu() {
  const { isMenuVisible, toggleMenu } = useMenuStore();

  return (
    <>
      <AnimatePresence>
        {isMenuVisible && (
          <>
            <Backdrop />
            <motion.ul className="popup-menu" {...menuAnimationProps}>
              <MenuItem
                className="home"
                href="/"
                label="Home"
                toggleMenu={toggleMenu}
                transition={{ duration: 0.5, delay: 0.15 }}
              />
              <MenuItem
                className="work"
                href="/analog"
                label="Work"
                toggleMenu={toggleMenu}
                transition={{ duration: 0.5, delay: 0.1 }}
              />
              <MenuItem
                className="info"
                href="/about-me"
                label="About me"
                toggleMenu={toggleMenu}
                transition={{ duration: 0.55, delay: 0.2 }}
              />
              <MenuItem
                className="contact"
                href="/contact"
                label="Contact"
                toggleMenu={toggleMenu}
                transition={{ duration: 0.4, delay: 0.2 }}
              />
            </motion.ul>
            <MenuFlowers />
            <Divider />
            <CharacterContainer />
          </>
        )}
      </AnimatePresence>
    </>
  );
}
