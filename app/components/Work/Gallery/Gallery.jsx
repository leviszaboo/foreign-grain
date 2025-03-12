"use client";

import { motion, AnimatePresence } from "framer-motion";

import { useMenuStore } from "@/app/hooks/useMenuStore";

import { galleryAnimationProps } from "./animation";
import DescriptionLeftRow from "../GalleryRows/DescriptionLeftRow";
import DescriptionLeftDouble from "../GalleryRows/DescriptionLeftDouble";
import DescriptionRightRow from "../GalleryRows/DescriptionRightRow";
import DescriptionRightDouble from "../GalleryRows/DescriptionRightDouble";
import FadeIn from "../../FadeIn";

export default function Gallery({ docs }) {
  const { isMenuVisible } = useMenuStore();

  return (
    <AnimatePresence>
      {!isMenuVisible && (
        <motion.section className="sec-work" {...galleryAnimationProps}>
          <div className="gallery">
            {docs.map((doc) => (
              <FadeIn key={doc.id}>
                {doc.imageUrls.length === 1 &&
                doc.descriptionLayout === "left" ? (
                  <DescriptionLeftRow
                    doc={doc}
                    title={doc.title}
                    subtitle={doc.subTitle}
                    description={doc.description}
                  />
                ) : doc.imageUrls.length === 2 &&
                  doc.descriptionLayout === "left" ? (
                  <DescriptionLeftDouble
                    doc={doc}
                    title={doc.title}
                    subtitle={doc.subTitle}
                    description={doc.description}
                  />
                ) : doc.imageUrls.length === 1 &&
                  doc.descriptionLayout === "right" ? (
                  <DescriptionRightRow
                    doc={doc}
                    title={doc.title}
                    subtitle={doc.subTitle}
                    description={doc.description}
                  />
                ) : doc.imageUrls.length === 2 &&
                  doc.descriptionLayout === "right" ? (
                  <DescriptionRightDouble
                    doc={doc}
                    title={doc.title}
                    subtitle={doc.subTitle}
                    description={doc.description}
                  />
                ) : (
                  <></>
                )}
              </FadeIn>
            ))}
          </div>
        </motion.section>
      )}
    </AnimatePresence>
  );
}
