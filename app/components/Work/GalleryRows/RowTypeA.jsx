import { AnimatePresence, motion } from "framer-motion"

import { useMenuStore } from "@/app/hooks/useMenuStore"
import DescriptionBlock from "./DescriptionBlock";
import ImageFrameBlock from "./ImageFrameBlock";

export default function RowTypeA({ src }) {

  const { isMenuVisible } = useMenuStore()

  return(
    <AnimatePresence>
      {!isMenuVisible && (
        <div className="grid-row a">
          <ImageFrameBlock src={src}/>
          <DescriptionBlock />
        </div>
      )}
    </AnimatePresence>
  )
}