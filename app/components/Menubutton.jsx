"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useMenuStore } from "../hooks/UseMenu";
import { useStartButtonStore } from "../hooks/UseStartButton";

export default function Menubutton() {
    const { characterIndex, isMenuVisible, buttonDisabled ,toggleMenu } = useMenuStore();
    const { isButtonClicked, setButtonClicked } = useStartButtonStore();

    return (
        <>
            <motion.div 
            className={
                `btn-hamburger-menu
                ${isMenuVisible 
                    ? 'change' 
                    : ''
                    }
                
                ${isButtonClicked 
                    ? 'intro-open' 
                    : ''
                }`
            }
            onClick={
                !buttonDisabled && !isButtonClicked
                ?  toggleMenu
                :  !buttonDisabled && isButtonClicked
                    ? () => setButtonClicked(false)
                    : null
            }
            initial={{ 
                opacity: 0 
            }}
            animate={{ 
                opacity: 1 
            }}
            transition={{ 
                duration: 0.6 
            }}
            >
                <div 
                    className="bar-bar-1">
                </div>
                <div 
                    className="bar-bar-2">
                </div>
            </motion.div>
        </>
    );
}

