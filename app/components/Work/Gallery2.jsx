import { motion, AnimatePresence } from "framer-motion";
import { useMenuStore } from "@/app/hooks/UseMenu";

export default function Gallery2() {

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
        
    function RowTypeA({ src }) {

        return(
            <>
                <div className="grid-row a">
                    <div className="block">
                        <img src={src}/>
                    </div>
                </div>
            </>
        )
    }

    function RowTypeB({ src1, src2 }) {

        return(
            <>
                <div className="grid-row b">
                    <div className="block">
                        <img src={src1}/>
                    </div>
                    <div className="block">
                        <img src={src2}/>
                    </div>
                </div>
            </>
        )
    }

    function RowTypeC({ src1, src2 }) {

        return(
            <>
                <div className="grid-row c">
                    <div className="block">
                        <img src={src1} alt=""/>
                    </div>
                    <div className="block">
                        <img src={src2} alt=""/>
                    </div>
                </div>
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
             </section>
            )}
        </>
    )

}
        