import { motion, AnimatePresence } from "framer-motion";
import { useScroll, animated, useInView } from "@react-spring/web";

import { useMenuStore } from "@/app/hooks/UseMenu";
import Footer from "../Footer";
import RowTypeA from "./rows/RowTypeA";
import RowTypeB from "./rows/RowTypeB";


export default function Gallery2() {
  
  const { scrollYProgress  } = useScroll()

  const [ref, springs] = useInView(
    () => ({
      from: {
        opacity: 0,
      },
      to: {
        opacity: 1,
      },
    }),
    {
      rootMargin: "-6% 0%"
    }
  )

  const { isMenuVisible } = useMenuStore();

  const sources = [
    "/Media/gallery/dj.jpeg",
    "/Media/gallery/frankfurt.jpeg",
    "/Media/gallery/aura.jpeg",
    "/Media/gallery/blockparty.jpeg",
    "/Media/gallery/camera.jpeg",
    "/Media/gallery/duck.jpeg",
    "/Media/gallery/dude.jpeg",
    "/Media/horizontal-final/patta-hor.jpeg",
    "/Media/vertical-final/mask.jpeg",
    "/Media/gallery/dude-2.jpeg",
    "/Media/gallery/frankfurt-2.jpeg",
    "/Media/vertical-final/patta-vert.jpeg",
    "/Media/horizontal-final/pond.jpeg",
    "/Media/gallery/dude-3.jpeg",
    "/Media/gallery/leather.jpeg",
    "/Media/gallery/dude-4.jpeg",
    "/Media/horizontal-final/stonebwoy.jpeg",
    "/Media/vertical-final/tno-vert.jpeg",
    "/Media/gallery/dude-5.jpeg",
    "/Media/gallery/light.jpeg",
    "/Media/gallery/roll.jpeg",
    "/Media/gallery/pink.jpeg",
    "/Media/gallery/street.jpeg",
    "/Media/gallery/dude-6.jpeg",
    "/Media/gallery/sauf.jpeg",
    "/Media/gallery/shoes.jpeg",
    "/Media/gallery/ski.jpeg",
    "/Media/gallery/vinyl-store.jpeg",
    "/Media/gallery/tno-girls.jpeg",
    "/Media/gallery/statue.jpeg",
    "/Media/gallery/smoke.jpeg",
    "/Media/gallery/camera-2.jpeg"
  ];


  function RowTypeC({ src1, src2 }) {

    return(
      <>
          <animated.div ref={ref} style={springs}>
        <div className="grid-row c">
            <div className="block">
              <img src={src1} alt=""/>
            </div>
            <div className="block">
              <img src={src2} alt=""/>
            </div>
        </div>
            </animated.div>
      </>
    )
  }

  function RowTypeD({ src }) {

    return(
      <>
        <div className="grid-row d">
          <div className="block">
            <img src={src}/>
          </div>
        </div>
      </>
    )
  }
              
  return(
    <>
      {!isMenuVisible && (
        <section 
            className="sec-work"
        >
          <div 
              className="gallery"
          >
            <RowTypeA src={sources[5]} />
            <RowTypeB src1={sources[2]} src2={sources[3]} />
            <RowTypeC src1={sources[17]} src2={sources[5]} />
            <RowTypeD src={sources[11]} />
          </div>
          <div className="sub-label-wrapper">
            <h2 className="sub-label">
                *amsterdam <span>2023</span>
            </h2>
          </div>
        </section>
      )}
    </>
  )

}
        