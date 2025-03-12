import { AnimatePresence, motion } from "framer-motion";

import { useMenuStore } from "@/app/hooks/useMenuStore";
import DescriptionBlock from "./DescriptionBlock";
import ImageFrameBlock from "./ImageFrameBlock";

export default function DescriptionLeftRow({
  doc,
  title,
  subtitle,
  description,
}) {
  const { isMenuVisible } = useMenuStore();

  return (
    <AnimatePresence>
      {!isMenuVisible && (
        <div className="grid-row a">
          <ImageFrameBlock src={doc.imageUrls[0]} base64={doc.base64[0]} />
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
