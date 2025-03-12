import { AnimatePresence } from "framer-motion";

import { useMenuStore } from "@/app/hooks/useMenuStore";
import ImageFrameBlock from "./ImageFrameBlock";
import DescriptionBlock from "./DescriptionBlock";

export default function DescriptionRightDouble({
  doc,
  title,
  subtitle,
  description,
}) {
  const { isMenuVisible } = useMenuStore();

  return (
    <AnimatePresence>
      {!isMenuVisible && (
        <div className="grid-row c">
          <ImageFrameBlock
            src={doc.imageUrls[0]}
            vertical={true}
            base64={doc.base64[0]}
          />
          <ImageFrameBlock
            src={doc.imageUrls[1]}
            vertical={true}
            base64={doc.base64[1]}
          />
          <DescriptionBlock
            title={title}
            subtitle={subtitle}
            description={description}
          />
        </div>
      )}
    </AnimatePresence>
  );
}
