import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";


import MenuButton from "./Menu/MenuButton/MenuButton";
import { useStartButtonStore } from "../hooks/useStartButton";

export default function Header() {

    const { isButtonClicked } = useStartButtonStore();

    return (
      <>
      <header>
        <nav>
        <MenuButton/>
        <AnimatePresence>
          {!isButtonClicked && (
            <motion.h1 
              className="title"
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
        </AnimatePresence>
        </nav>
        </header>
    </>
  );
}
