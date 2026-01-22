"use client";

import { useMenuStore } from "@/app/context/UIContext";
import { motion, AnimatePresence } from "framer-motion";
import { menuAnimation } from "@/app/lib/animations";

import MenuItem from "../MenuItem/MenuItem";
import Divider from "../Divider/Divider";
import MenuFlowers from "../Flowers/MenuFlowers";
import Backdrop from "../Backdrop/Backdrop";

export default function Menu() {
  const { isMenuVisible, toggleMenu } = useMenuStore();

  return (
    <AnimatePresence>
      {isMenuVisible && (
        <>
          <Backdrop />
          <motion.ul
            className="fixed flex flex-col justify-center list-none m-0 w-fit h-fit top-1/2 left-[35%] -translate-x-1/2 -translate-y-1/2 text-[2.65rem] z-[100] max-sm:text-[35px]"
            {...menuAnimation}
          >
            <MenuItem
              href="/gallery"
              label="Work"
              toggleMenu={toggleMenu}
              delay={0.1}
            />
            <MenuItem
              href="/"
              label="Home"
              toggleMenu={toggleMenu}
              delay={0.15}
            />
            <MenuItem
              href="/about-me"
              label="About me"
              toggleMenu={toggleMenu}
              delay={0.2}
            />
            <MenuItem
              href="/contact"
              label="Contact"
              toggleMenu={toggleMenu}
              delay={0.2}
            />
          </motion.ul>
          <MenuFlowers />
          <Divider />
        </>
      )}
    </AnimatePresence>
  );
}
