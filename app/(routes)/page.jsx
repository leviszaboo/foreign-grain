"use client";

import "@/app/styles/mainpage.css";
import '@/app/styles/work.css'

import { AnimatePresence, motion } from "framer-motion"
import { useScroll } from "@react-spring/web";
import { useEffect } from "react";

import Header from "../components/Header.jsx";
import Menu from "../components/Menu/Menu/Menu.jsx";
import Slideshow from "../components/Home/Slideshow/Slideshow.jsx";
import Startbutton from "../components/Home/StartButton/StartButton.jsx";
import Tagline from "../components/Home/Tagline/Tagline.jsx";
import Footer from "../components/Footer.jsx";
import Intro from "../components/Home/Intro/Intro.jsx";
import { useStartButtonStore } from "../hooks/useStartButtonStore.jsx";
import HomeFlowers from "../components/Home/Flowers/HomeFlowers.jsx";

export default function Home() {
    const { isButtonClicked } = useStartButtonStore();

    const { scrollYProgress } = useScroll();

    useEffect(() => {
      console.log(scrollYProgress);
    }, [scrollYProgress])
  

    return (
      <>
          <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition = {{duration: 1}}
        >
          <Menu />
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
          <HomeFlowers />
          <Intro />
          <Footer />
        </motion.div>   
      </>
    );
}