import { AnimatePresence } from "framer-motion";

import { useMenuStore } from "@/app/hooks/useMenuStore";
import DescriptionBlock from "./DescriptionBlock";
import ImageFrameBlock from "./ImageFrameBlock";

const LAYOUT_CLASSES = {
  left_single: "a",
  right_single: "b",
  right_double: "c",
  left_double: "d",
};

export default function GalleryRow({ doc, title, subtitle, description }) {
  const { isMenuVisible } = useMenuStore();

  const imageCount = doc.imageUrls.length;
  const layout = doc.descriptionLayout;

  // Determine the CSS class based on layout and image count
  const layoutKey = `${layout}_${imageCount === 1 ? "single" : "double"}`;
  const gridClass = LAYOUT_CLASSES[layoutKey] || "a";

  return (
    <AnimatePresence>
      {!isMenuVisible && (
        <div className={`grid-row ${gridClass}`}>
          {imageCount === 2 ? (
            <>
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
            </>
          ) : (
            <ImageFrameBlock src={doc.imageUrls[0]} base64={doc.base64[0]} />
          )}
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
