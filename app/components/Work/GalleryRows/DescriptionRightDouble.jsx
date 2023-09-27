import { AnimatePresence } from "framer-motion";

import { useMenuStore } from "@/app/hooks/useMenuStore";
import ImageFrameBlock from "./ImageFrameBlock";
import DescriptionBlock from "./DescriptionBlock";

export default function DescriptionRightDouble({ src1, src2, title, subtitle, description }) {

  const { isMenuVisible } = useMenuStore();

  return(
    <AnimatePresence>
      {!isMenuVisible && (
        <div className="grid-row c">
          <ImageFrameBlock src={src1}/>
          <ImageFrameBlock src={src2} />
          <DescriptionBlock title={title} subtitle={subtitle} description={description}/>
        </div>
      )}
    </AnimatePresence>
  )
}