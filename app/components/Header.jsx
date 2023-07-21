import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";


import Menubutton from "./Menubutton";
import { useStartButtonStore } from "../hooks/UseStartButton";

export default function Header() {

    const { isButtonClicked } = useStartButtonStore();

    return (
        <>
        <header>
            <nav>
                <Menubutton/>
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
