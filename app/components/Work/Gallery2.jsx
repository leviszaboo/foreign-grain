import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useEffect, useRef } from "react";

import { useMenuStore } from "@/app/hooks/useMenu";
import { useIntroScrollStore } from "@/app/hooks/useIntroScroll";
import RowTypeA from "./rows/RowTypeA";
import RowTypeB from "./rows/RowTypeB";
import RowTypeC from "./rows/RowTypeC";
import RowTypeD from "./rows/RowTypeD";
import FadeIn from "./rows/FadeIn";
import IntroMainSection from "../Home/Intro/IntroMainSection";


export default function Gallery2() {
  const ref = useRef(null)
  const inView = useInView(ref);
  const { setScrollDown } = useIntroScrollStore()

  useEffect(() => {
    console.log(inView)
    console.log(ref.current)
    if (ref.current) {
      setScrollDown(inView)
    }
  }, [inView, ref.current])

  const { isMenuVisible } = useMenuStore();

  const sources = [
    "/Media/gallery/dj.jpeg",
    "/Media/gallery/frankfurt.jpeg",
    "/Media/gallery/aura.jpeg",
    "/Media/gallery/blockparty.jpeg",
    "/Media/gallery/camera.jpeg",
    "/Media/gallery/duck.jpeg",
    "/Media/gallery/boyer.jpeg",
    "/Media/horizontal-final/patta-hor.jpeg",
    "/Media/vertical-final/mask.jpeg",
    "/Media/gallery/boyer-2.jpeg",
    "/Media/gallery/frankfurt-2.jpeg",
    "/Media/vertical-final/patta-vert.jpeg",
    "/Media/horizontal-final/pond.jpeg",
    "/Media/gallery/boyer-3.jpeg",
    "/Media/gallery/leather.jpeg",
    "/Media/gallery/boyer-4.jpeg",
    "/Media/horizontal-final/stonebwoy.jpeg",
    "/Media/vertical-final/tno-vert.jpeg",
    "/Media/gallery/boyer-5.jpeg",
    "/Media/gallery/light.jpeg",
    "/Media/gallery/roll.jpeg",
    "/Media/gallery/pink.jpeg",
    "/Media/gallery/street.jpeg",
    "/Media/gallery/boyer-6.jpeg",
    "/Media/gallery/sauf.jpeg",
    "/Media/gallery/shoes.jpeg",
    "/Media/gallery/ski.jpeg",
    "/Media/gallery/vinyl-store.jpeg",
    "/Media/gallery/tno-girls.jpeg",
    "/Media/gallery/statue.jpeg",
    "/Media/gallery/smoke.jpeg",
    "/Media/gallery/camera-2.jpeg"
  ];
              
  return(
    <>
      {!isMenuVisible && (
        <section 
            className="sec-work"
        >
          <div 
              className="gallery"
          >
            <FadeIn>
              <div ref={ref}>
              <RowTypeA src={sources[5]} />
              </div>
            </FadeIn>
            <FadeIn>
              <RowTypeB src1={sources[2]} src2={sources[3]} />
            </FadeIn>
            <FadeIn>
              <RowTypeC src1={sources[17]} src2={sources[5]} />
            </FadeIn>
            <FadeIn>
              <RowTypeD src={sources[11]} />
            </FadeIn>
            <FadeIn>

              <RowTypeA src={sources[5]} />

            </FadeIn>
            <FadeIn>
              <RowTypeB src1={sources[2]} src2={sources[3]} />
            </FadeIn>  
            <FadeIn>
              <RowTypeC src1={sources[17]} src2={sources[5]} />
            </FadeIn> 
            <FadeIn>
              <RowTypeD src={sources[11]} />
            </FadeIn>  
          </div>
          <div className="sub-label-wrapper">
            <h2 className="sub-label">
                *amsterdam <span>2023</span>
            </h2>
          </div>
          <motion.div 
                    className="flower-container-4"
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
                            delay: 0.25,
                            ease: "easeInOut" 
                        }
                    }}
                    transition={{
                        duration: 0.7,
                        delay: 0.35,
                        ease: "easeOut"
                    }}
                >
                    <img 
                        style={{transform: "scale(0.7)"}}
                        className="flower-4" 
                        src="/Media/flowers/flower-3.png"
                    />
                </motion.div>
        </section>
      )}
    </>
  )

}
        