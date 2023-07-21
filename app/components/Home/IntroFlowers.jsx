"use client"

import { motion, AnimatePresence } from "framer-motion";

import { useSlideshowStore } from "@/app/hooks/UseSlideshow";

export default function IntroFlowers() {

    const { currentSlide, setCurrentSlide } = useSlideshowStore();
    
    return (
        <>
            <motion.div 
                className="flower-container-1"
                initial={{
                    scale: 0.65,
                    opacity: 0
                }}
                animate={{
                    scale: 1,
                    opacity: 1,
                    }}
                exit={{
                    scale: 0.5, 
                    opacity: 0, 
                    transition: {
                        duration: 0.3,
                        delay: .25,
                        ease: "easeInOut" 
                        }
                    }}
                transition={{
                    duration: 0.7,
                    delay: 5.05,
                    ease: "easeOut"
                }}
            >
                <img 
                    className="flower flower-1" 
                    id="0" 
                    src="/Media/flowers/flower.png"
                />
            </motion.div>
            <motion.div 
                className="flower-container-intro-2"
                initial={{
                    scale: 0.65,
                    opacity: 0
                }}
                animate={{
                    scale: 1,
                    opacity: 1,
                }}
                exit={{
                    scale: 0.5, 
                    opacity: 0, 
                    transition: {
                        duration: 0.25,
                        delay: 0.17,
                        ease: "easeInOut" 
                    }
                }}
                transition={{
                    duration: 0.7,
                    delay: 4.85,
                    ease: "easeOut"
                }}
            >
                <img 
                    className="flower flower-1" 
                    id="0" 
                    src="/Media/flowers/flower.png"
                />
            </motion.div>
            <motion.div 
                className="flower-container-intro-3"
                initial={{
                    scale: 0.65,
                    opacity: 0
                }}
                animate={{
                    scale: 1,
                    opacity: 1,
                }}
                exit={{
                    scale: 0.5, 
                    opacity: 0, 
                    transition: {
                        duration: 0.25,
                        delay: 0.1,
                        ease: "easeInOut" 
                    }
                }}
                transition={{
                    duration: 0.7,
                    delay: 4.65,
                    ease: "easeOut"
                }}
            >
                <img 
                    className="flower flower-3" 
                    id="2" 
                    src="/Media/flowers/flower-3.png"
                />
            </motion.div>
        </>
    )
}