import { AnimatePresence } from "framer-motion"

import { useMenuStore } from "@/app/hooks/useMenuStore"
import ImageFrameBlock from "./ImageFrameBlock"
import DescriptionBlock from "./DescriptionBlock"

export default function DescriptionRightRow({ src, title, subtitle, description }) {
  
  const { isMenuVisible } = useMenuStore()

  return(
    <AnimatePresence>
      {!isMenuVisible && (
        <div className="grid-row b">
          <ImageFrameBlock src={src}/>
          <DescriptionBlock title={title} subtitle={subtitle} description={description}/>
        </div>
      )}
    </AnimatePresence>
  )
}