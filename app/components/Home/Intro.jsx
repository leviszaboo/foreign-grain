import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { useInView, animated } from '@react-spring/web';
import { 
  motion,
  AnimatePresence, 
} from "framer-motion";
import { useEffect, useRef } from 'react';

import { useStartButtonStore } from "@/app/hooks/UseStartButton";

import IntroFlowers from "./IntroFlowers";
import Gallery2 from "../Work/Gallery2";
import IntroText from "./IntroText";
import ScrollSign from "./ScrollSign";

export default function Intro() {
  const { isButtonClicked } = useStartButtonStore();

  const [ref, springs] = useInView()

  const scrollToTop = () => {
    console.log(springs)
    if (springs) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useEffect(() => {
    if (isButtonClicked) {
      scrollToTop();
    }
  }, [springs])

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
            <Parallax pages={3}>
              <ParallaxLayer speed={2}>
            <IntroText />
              </ParallaxLayer>
            
              <IntroFlowers />
      
             <ParallaxLayer speed={1.2}>
                <ScrollSign />
              </ParallaxLayer>
              <ParallaxLayer>
                <div ref={ref} className="div1">
                  <Gallery2 />
                </div>
              </ParallaxLayer>
              <ParallaxLayer>
                <div className="div2">
                  <div className="text-wrapper">
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                      totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta
                      sunt explicabo.
                    </p>
                    <p>
                      Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
                      magni dolores eos qui ratione voluptatem sequi nesciunt.
                    </p>
                    <p>
                      Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
                      quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                      Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
                      aliquid ex ea commodi consequatur?
                    </p>
                    <p>
                      Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae
                      consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                    </p>
                  </div>
                </div>

              </ParallaxLayer>

            </Parallax>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
