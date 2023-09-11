import FadeIn from "../../Work/rows/FadeIn"
import { useIntroScrollStore } from "@/app/hooks/useIntroScroll";
import { useInView } from "framer-motion";

import Gallery2 from "../../Work/Gallery"
import RowTypeA from "../../Work/rows/RowTypeA";
import RowTypeB from "../../Work/rows/RowTypeB";
import { useEffect, useRef } from "react";
import LeftPanel from "./LeftPanel";
import RightPanel from "./RightPanel";

export default function IntroMainSection() {

  return (
    <>
      <div >
      <LeftPanel/>
      <RightPanel />
      </div>
   </>
  )
}
