import { AnimatePresence } from "framer-motion";

import { useMenuStore } from "@/app/hooks/useMenuStore";
import ImageFrameBlock from "./ImageFrameBlock";
import DescriptionBlock from "./DescriptionBlock";

export default function RowTypeC({ src1, src2 }) {

  const { isMenuVisible } = useMenuStore();

  return(
    <AnimatePresence>
      {!isMenuVisible && (
        <div className="grid-row c">
          <ImageFrameBlock src={src1}/>
          <ImageFrameBlock src={src2} />
          <DescriptionBlock />
        </div>
      )}
    </AnimatePresence>
  )
}