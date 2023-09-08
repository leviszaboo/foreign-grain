import { useRef } from "react"

import FadeIn from "../../Work/rows/FadeIn"
import RowTypeA from "../../Work/rows/RowTypeA"
import RowTypeB from "../../Work/rows/RowTypeB"
import ArcadeText from "./ArcadeText";


export default function LeftPanel() {
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
  return (
    <div className="div1">
    <FadeIn>
            <div style={{paddingTop: "5rem"}}>
            <RowTypeA src={sources[5]} />
            </div>
          </FadeIn>
          <FadeIn>
            <RowTypeB src1={sources[2]} src2={sources[3]} />
          </FadeIn>
          <ArcadeText text={"check out my work"} />
    </div>
  )
}
