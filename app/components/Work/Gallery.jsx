"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useMenuStore } from "@/app/hooks/UseMenu";

export default function Gallery() {

    const { isMenuVisible } = useMenuStore();

    function RowTypeA(src) {

        return(
            <>
                <div class="grid-row a">
                    <div class="block">
                        <img src={src}/>
                    </div>
                </div>
            </>
        )
    }

    function RowTypeB(src1, src2) {

        return(
            <>
                <div class="grid-row b">
                    <div class="block">
                        <img src={src1}/>
                    </div>
                    <div class="block">
                        <img src={src2}/>
                    </div>
                </div>
            </>
        )
    }

    function RowTypeC(src1, src2) {

        return(
            <>
                 <div class="grid-row c">
                    <div class="block">
                        <img src={src1} alt=""/>
                    </div>
                    <div class="block">
                        <img src={src2} alt=""/>
                     </div>
                </div>
            </>
        )
       
    }

    function RowTypeA(src) {

        return(
            <>
                <div class="grid-row d">
                    <div class="block">
                        <img src={src}/>
                    </div>
                </div>
            </>
        )
    }

    return(
        <>
            <AnimatePresence>
                {!isMenuVisible && (
                
                <motion.div 
                    className="grid-container"
                    initial={{
                        opacity: 0
                    }}
                    animate={{
                        opacity: 1
                    }}
                    exit={{
                        opacity: 0,
                        transition: {
                            duration: 0.7
                        }
                    }}
                    transition={{
                        duration: 0.7
                    }}
                >
                <div
                    className="gallery-wrapper"
                >
                    <div 
                        className="img-container"
                    >
                        <img src="/Media/gallery/dj.jpeg"/>
                        <img src="/Media/gallery/frankfurt.jpeg"/>
                        <img src="/Media/gallery/aura.jpeg"/>
                        <img src="/Media/gallery/blockparty.jpeg"/>
                        <img src="/Media/gallery/camera.jpeg"/>
                        <img src="/Media/gallery/duck.jpeg"/>
                        <img src="/Media/gallery/dude.jpeg"/>
                        <img src="/Media/horizontal-final/patta-hor.jpeg"/>
                        <img src="/Media/vertical-final/mask.jpeg"/>
                        <img src="/Media/gallery/dude-2.jpeg"/>
                        {/*<img src="/Media/gallery/frankfurt-2.jpeg"/>
                        <img src="/Media/vertical-final/patta-vert.jpeg"/>
                        <img src="/Media/horizontal-final/pond.jpeg"/>
                        <img src="/Media/gallery/dude-3.jpeg"/>
                        <img src="/Media/gallery/leather.jpeg"/>
                        <img src="/Media/gallery/dude-4.jpeg"/>*/}
                        <img src="/Media/horizontal-final/stonebwoy.jpeg"/>
                        <img src="/Media/vertical-final/tno-vert.jpeg"/>
                        <img src="/Media/gallery/dude-5.jpeg"/>
                        <img src="/Media/gallery/light.jpeg"/>
                        <img src="/Media/gallery/roll.jpeg"/>
                        <img src="/Media/gallery/pink.jpeg"/>
                        <img src="/Media/gallery/street.jpeg"/>
                        <img src="/Media/gallery/dude-6.jpeg"/>
                        <img src="/Media/gallery/sauf.jpeg"/>
                        <img src="/Media/gallery/shoes.jpeg"/>
                        <img src="/Media/gallery/ski.jpeg"/>
                        <img src="/Media/gallery/vinyl-store.jpeg"/>
                        <img src="/Media/gallery/tno-girls.jpeg"/>
                        <img src="/Media/gallery/statue.jpeg"/>
                        <img src="/Media/gallery/smoke.jpeg"/>
                        <img src="/Media/gallery/camera-2.jpeg"/>
                    </div>
                </div>
                </motion.div>
                
                )}
    
            </AnimatePresence>
        </>
    )
}