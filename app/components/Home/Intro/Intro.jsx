import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { useInView, animated } from '@react-spring/web';
import { 
  motion,
  AnimatePresence, 
} from "framer-motion";
import { useEffect, useRef } from 'react';

import { useStartButtonStore } from "@/app/hooks/useStartButton";

import IntroFlowers from "./IntroFlowers";
import Gallery2 from "../../Work/Gallery2";
import IntroText from "./IntroText";
import IntroMainSection from './IntroMainSection';
import ScrollSign from './ScrollSign';

export default function Intro() {
  const { isButtonClicked } = useStartButtonStore();

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
            <Parallax pages={2}>
              <ParallaxLayer speed={2}>
                <IntroText />
              </ParallaxLayer>
              <IntroFlowers />
              <ParallaxLayer speed={1.2}>
                <ScrollSign />
              </ParallaxLayer>
              <ParallaxLayer>
                <IntroMainSection/>
              </ParallaxLayer>
            </Parallax>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
