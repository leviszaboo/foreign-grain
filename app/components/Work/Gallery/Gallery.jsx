"use client";

import { motion, AnimatePresence } from "framer-motion";

import { useMenuStore } from "@/app/hooks/useMenuStore";

import { galleryAnimationProps } from "./animation";
import GalleryRow from "../GalleryRows/GalleryRow";
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
                <GalleryRow
                  doc={doc}
                  title={doc.title}
                  subtitle={doc.subTitle}
                  description={doc.description}
                />
              </FadeIn>
            ))}
          </div>
        </motion.section>
      )}
    </AnimatePresence>
  );
}
