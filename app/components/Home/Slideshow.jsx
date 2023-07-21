import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useMenuStore } from "@/app/hooks/UseMenu";
import { useSlideshowStore } from "@/app/hooks/UseSlideshow";

export default function Slideshow() {

    const { isMenuVisible } = useMenuStore();

    let totalSlides = 3;
    const animationTime = 7500;
    const [aspectRatio, setAspectRatio] = useState(0);
    const { currentSlide, setCurrentSlide } = useSlideshowStore();

    const horizontalSlides = [
        "/Media/horizontal-final/stonebwoy.jpeg",
        "/Media/horizontal-final/patta-hor.jpeg",
        "/Media/horizontal-final/pond.jpeg"
    ];

    const verticalSlides = [
        "/Media/vertical-final/mask.jpeg",
        "/Media/vertical-final/tno-vert.jpeg",
        "/Media/vertical-final/patta-vert.jpeg" 
    ];

    const checkAspectRatio = () => {
        const width = window.innerWidth;
        const height = window.innerHeight;
        const aspectRatio = width / height;
        return aspectRatio;
    };

    useEffect(() => {
        const handleResize = () => {
            const newAspectRatio = checkAspectRatio();
            setAspectRatio(newAspectRatio);
        };

        handleResize(); // Initial calculation on component mount

        const interval = setInterval(() => {
            setCurrentSlide((currentSlide + 1) % totalSlides);
        }, animationTime);

        window.addEventListener("resize", handleResize);
        return () => {
            clearInterval(interval);
            window.removeEventListener("resize", handleResize);
        };
    }, [currentSlide]);
   


    return (
        <>
            <AnimatePresence>
                {!isMenuVisible && (
                    <motion.div 
                        className="background"
                        initial = {{
                            opacity: 0,
                        }}
                        animate = {{
                            opacity: 1,
                        }}
                        exit={{
                            opacity: 0,
                            transition : {
                                duration: 0.55
                            }
                        }}
                        transition={{
                            duration: 0.8
                        }}
                    >
                        <motion.div
                        className = "slide-wrapper"
                            key={ currentSlide }
                            initial = {{
                                opacity: 0,
                                scale: 1.08,
                            }}
                            animate = {{
                                x: 0,
                                opacity: 1,
                                scale: 1,
                                
                            }}
                            transition = {{
                                opacity: {
                                    duration: 1
                                },
                                scale: {
                                    duration: 8
                                }
                            }}
                            exit={{
                                opacity: 0,
                                transition: {
                                    duration: 0.3
                                }
                            }}
                        >
                            <img
                                src={
                                    aspectRatio > 0.85 
                                    ? horizontalSlides[currentSlide] 
                                    : verticalSlides[currentSlide]
                                }
                                className="slide"
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}