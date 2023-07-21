"use client";

import { motion, AnimatePresence } from "framer-motion";

import { useMenuStore } from "../../hooks/UseMenu";
import { useStartButtonStore } from "@/app/hooks/UseStartButton"


export default function Startbutton() {

    const { isMenuVisible } = useMenuStore();
    const chars = "<>/?;\\[{}]+_ABEGHPTYWOERSQ";
    const {
        isStarted,
        buttonText,
        setIsStarted,
        setButtonText,
        setButtonClicked
      } = useStartButtonStore();
    

    const handleMouseEnter = () => {
        if (isStarted) return;
        setIsStarted(true);
        let iterations = 0;

        const interval = setInterval(() => {
            setButtonText(
                buttonText
                .split("")
                .map((letter, index) => {
                    if (index + 1 < iterations) {
                    return letter;
                    }
                    return chars[Math.floor(Math.random() * chars.length)];
                }).join("")
            );

            if (iterations > buttonText.length + 1) {
                clearInterval(interval);
                setIsStarted(false);
            }

            iterations += 1/2;
        }, 50);
    }

    return (
        <>
            <AnimatePresence>
                {!isMenuVisible && (
                    <motion.div 
                        className="button-wrapper"
                        initial={{ 
                            opacity: 0, 
                            scale: 0.8, 
                            x: "-50%"}}
                        animate={{ 
                            opacity: 1, 
                            scale: 1, 
                            x: "-50%"}}
                        exit={{ 
                            opacity: 0, 
                            scale: 0.8, 
                            x: "-50%", 
                            transition: { 
                                duration: 0.5 } }}
                        transition = {{
                            duration: 0.6, 
                            delay: 0.3, 
                            ease: "easeInOut"}}
                    >
                        <button 
                            className="start" 
                            data-displayed="true"
                            onClick={() => setButtonClicked(true)}
                            onMouseEnter={handleMouseEnter}
                        >
                            <h2 
                                className="start-h2" 
                            >
                                { buttonText }
                            </h2>
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}