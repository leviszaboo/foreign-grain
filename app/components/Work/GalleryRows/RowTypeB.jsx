import { AnimatePresence } from "framer-motion"

import { useMenuStore } from "@/app/hooks/useMenuStore"
import ImageFrameBlock from "./ImageFrameBlock"
import DescriptionBlock from "./DescriptionBlock"

export default function RowTypeB({ src }) {
  
  const { isMenuVisible } = useMenuStore()

  return(
    <AnimatePresence>
      {!isMenuVisible && (
        <div className="grid-row b">
          <ImageFrameBlock src={src}/>
          <DescriptionBlock />
        </div>
      )}
    </AnimatePresence>
  )
}