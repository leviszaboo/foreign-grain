"use client";

import { motion } from "framer-motion";
import FilmStrip from "./FilmStrip";

export default function HeroSection({ sources }) {
  return (
    <section className="h-screen relative overflow-hidden">
      {/* Background Film Strip */}
      <div className="absolute inset-0 z-0">
        <FilmStrip sources={sources} />
      </div>

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Title */}
      <div className="absolute inset-0 flex items-center justify-center z-20">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-8xl uppercase text-center"
        >
          About <span className="text-[#ffd700]">Me</span>
        </motion.h1>
      </div>
    </section>
  );
}
