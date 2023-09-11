import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useEffect, useRef } from "react";

import { useMenuStore } from "@/app/hooks/useMenu";
import { useIntroScrollStore } from "@/app/hooks/useIntroScroll";
import RowTypeA from "./rows/RowTypeA";
import RowTypeB from "./rows/RowTypeB";
import RowTypeC from "./rows/RowTypeC";
import FadeIn from "./rows/FadeIn";


export default function Gallery2() {

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
      <AnimatePresence>
      {!isMenuVisible && (
        <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ 
          opacity: 0,
          transition: {
            duration: 1
          }
        }}
        transition = {{duration: 1}}
      >
        <section 
            className="sec-work">
          <div 
              className="gallery"
          >
            <FadeIn>
              <RowTypeA src={sources[2]} />
            </FadeIn>
            <FadeIn>
              <RowTypeB src={sources[12]} />
            </FadeIn>
            <FadeIn>
              <RowTypeC src1={sources[0]} src2={sources[3]}/>
            </FadeIn>
          </div>
        </section>
        </motion.div>
      )}
      </AnimatePresence>
    </>
  )

}
        