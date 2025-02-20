"use client";

import Image from "next/image";
import { useMenuStore } from "@/app/hooks/useMenuStore";
import { AnimatePresence } from "framer-motion";
import GridItem from "./GridItem";

export default function ProjectGrid({ docs }) {
  const { isMenuVisible } = useMenuStore();

  return (
    <AnimatePresence>
      {!isMenuVisible && (
        <div className="project-grid">
          {docs.map((doc) => (
            <GridItem doc={doc} key={doc.id} />
          ))}
        </div>
      )}
    </AnimatePresence>
  );
}
