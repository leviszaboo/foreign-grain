"use client";

import "/Users/leventeszabo/Desktop/website/website.html/website-next13/app/styles/mainpage.css";
import '/Users/leventeszabo/Desktop/website/website.html/website-next13/app/styles/work.css'

import { AnimatePresence, motion } from "framer-motion"

import Header from "./components/Header.jsx";
import Menu2 from "./components/Menu";
import Slideshow from "./components/Home/Slideshow";
import Startbutton from "./components/Home/Startbutton";
import Tagline from "./components/Home/Tagline";
import HomeFlowers from "./components/Home/HomeFlowers";
import Footer from "./components/Footer";
import Intro from "./components/Home/Intro";
import { useStartButtonStore } from "./hooks/UseStartButton";

export default function Home() {
    const { isButtonClicked } = useStartButtonStore();

    return (

        <>
            <AnimatePresence>
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ scale: 3, opacity: 0 }}
                    transition = {{duration: 1}}
                >
                    <Header />
                    <Menu2 />
                    <AnimatePresence>
                        {!isButtonClicked && (
                            <motion.div
                                initial = {{ 
                                    opacity: 0 
                                }}
                                animate = {{
                                    opacity: 1
                                }}
                                exit= {{
                                    opacity: 0
                                }}
                                transition={{
                                    duration: 0.5
                                }}
                            >
                                <Slideshow />
                                <Tagline />
                                <Startbutton />
                            </motion.div>
                        )}
                    </AnimatePresence>
                    <Intro />
                    <HomeFlowers />
                    <Footer />
                </motion.div>   
            </AnimatePresence>
        </>
    );
}