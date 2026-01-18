"use client";

import { motion } from "framer-motion";
import { dividerAnimation } from "@/app/lib/animations";

export default function Divider() {
  return (
    <motion.div
      className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[60vh] w-1 bg-white max-md:right-10 max-md:left-auto max-sm:hidden"
      {...dividerAnimation}
    />
  );
}
