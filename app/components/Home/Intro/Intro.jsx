"use client";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { motion, AnimatePresence } from "framer-motion";

import { useStartButtonStore } from "@/app/hooks/useStartButtonStore";
import { useWindowSize } from "rooks";
import { BREAKPOINTS } from "@/app/utils/constants";

import IntroFlowers from "./IntroFlowers";
import IntroText from "./IntroText";
import IntroMainSection from "./IntroMainSection";
import ScrollSign from "./ScrollSign";
import IntroMiddlePanel from "./IntroMiddlePanel";

export default function Intro({ docs }) {
  const { isButtonClicked } = useStartButtonStore();
  const { innerWidth } = useWindowSize();
  const pages = innerWidth < BREAKPOINTS.MOBILE ? 2.58 : 2.44;

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
                <ScrollSign delay1={5} delay2={5.1} />
              </ParallaxLayer>
              <IntroMiddlePanel docs={docs} />
              <ParallaxLayer speed={1.1} offset={1.5}>
                <IntroMainSection />
              </ParallaxLayer>
            </Parallax>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
