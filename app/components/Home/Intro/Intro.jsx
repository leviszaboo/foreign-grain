"use client"

import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { 
  motion,
  AnimatePresence, 
} from "framer-motion";

import { useStartButtonStore } from "@/app/hooks/useStartButtonStore";
import { useWindowSize } from 'rooks';

import IntroFlowers from "./IntroFlowers";
import IntroText from "./IntroText";
import IntroMainSection from './IntroMainSection';
import ScrollSign from './ScrollSign';

export default function Intro() {
  const { isButtonClicked } = useStartButtonStore();
  const { innerWidth } = useWindowSize();
  const pages = innerWidth < 650 ? 2 : 1.94;

  return (
    <>
      <AnimatePresence>
        {isButtonClicked && (
          <motion.div
            className="intro-wrapper"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
              transition: {
                duration: 0.7,
              },
            }}
          >
            <Parallax pages={pages}>
              <ParallaxLayer speed={2}>
                <IntroText />
              </ParallaxLayer>
              <IntroFlowers />
              <ParallaxLayer speed={1.2}>
                <ScrollSign delay1={5} delay2={5.1}/>
              </ParallaxLayer>
              <ParallaxLayer speed={1.1} offset={1}>
                <IntroMainSection/>
              </ParallaxLayer>
            </Parallax>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
