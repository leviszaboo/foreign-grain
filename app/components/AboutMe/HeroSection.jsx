"use client";

import { motion } from "framer-motion";
import FilmStrip from "./FilmStrip";

export default function HeroSection({ sources }) {
  return (
    <section className="h-screen flex flex-col lg:flex-row items-center justify-between px-8 lg:px-16 relative">
      {/* Left side - Title */}
      <div className="flex-1 flex flex-col items-center lg:items-start justify-center gap-8">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-2xl md:text-8xl uppercase"
        >
          About <span className="text-[#ffd700]">Me</span>
        </motion.h1>
      </div>

      {/* Right side - Film Strip */}
      <div className="flex-1 flex justify-center lg:justify-end h-screen">
        <div className="w-64 lg:w-80">
          <FilmStrip sources={sources} />
        </div>
      </div>
    </section>
  );
}
