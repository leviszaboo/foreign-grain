import { AnimatePresence, motion } from "framer-motion";

import { useMenuStore } from "@/app/hooks/useMenuStore";
import DescriptionBlock from "./DescriptionBlock";
import ImageFrameBlock from "./ImageFrameBlock";

export default function DescriptionLeftRow({
  src,
  base64,
  title,
  subtitle,
  description,
}) {
  const { isMenuVisible } = useMenuStore();

  return (
    <AnimatePresence>
      {!isMenuVisible && (
        <div className="grid-row a">
          <ImageFrameBlock src={src} base64={base64} />
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
