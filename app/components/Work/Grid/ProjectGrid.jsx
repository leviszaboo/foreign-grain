"use client";

import { useMenuStore } from "@/app/context/UIContext";
import { AnimatePresence } from "framer-motion";
import GridItem from "./GridItem";

export default function ProjectGrid({ docs }) {
  const { isMenuVisible } = useMenuStore();

  return (
    <AnimatePresence>
      {!isMenuVisible && (
        <div className="project-grid">
          {docs.map((doc, index) => (
            <GridItem doc={doc} key={doc.id} index={index} />
          ))}
        </div>
      )}
    </AnimatePresence>
  );
}
