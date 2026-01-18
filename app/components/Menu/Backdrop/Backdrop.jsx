"use client";

import { motion } from "framer-motion";
import { backdropAnimation } from "@/app/lib/animations";
import { useMenuStore } from "@/app/context/UIContext";

export default function Backdrop() {
  const { toggleMenu } = useMenuStore();

  return (
    <motion.div
      className="fixed inset-0 bg-black/90 z-[50] cursor-pointer"
      {...backdropAnimation}
      onClick={toggleMenu}
    />
  );
}
