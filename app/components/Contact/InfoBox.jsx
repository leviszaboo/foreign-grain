"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { PixelMail, PixelMapPin, PixelInstagram, PixelLinkedin } from "@/components/ui/8bit/icons";
import { infoBoxAnimationProps } from "./animation";

export default function InfoBox({ contactInfo }) {
  return (
    <motion.div className="flex-1 border-2 border-white/30 p-6 flex flex-col justify-center gap-6" {...infoBoxAnimationProps}>
      {/* Email */}
      {contactInfo.email && (
        <Link
          href={`mailto:${contactInfo.email}`}
          className="flex items-center gap-4 text-white/80 hover:text-[#ffd700] transition-colors group"
        >
          <div className="p-2 border-2 border-white/30 group-hover:border-[#ffd700] transition-colors">
            <PixelMail size={20} />
          </div>
          <div>
            <p className="retro text-[10px] uppercase tracking-wider text-white/50 mb-1">Email</p>
            <p className="text-sm">{contactInfo.email}</p>
          </div>
        </Link>
      )}

      {/* Location */}
      {contactInfo.location && (
        <div className="flex items-center gap-4 text-white/80">
          <div className="p-2 border-2 border-white/30">
            <PixelMapPin size={20} />
          </div>
          <div>
            <p className="retro text-[10px] uppercase tracking-wider text-white/50 mb-1">Location</p>
            <p className="text-sm">{contactInfo.location}</p>
          </div>
        </div>
      )}

      {/* Instagram */}
      {contactInfo.instagram && (
        <Link
          href={`https://instagram.com/${contactInfo.instagram}`}
          target="_blank"
          className="flex items-center gap-4 text-white/80 hover:text-[#ffd700] transition-colors group"
        >
          <div className="p-2 border-2 border-white/30 group-hover:border-[#ffd700] transition-colors">
            <PixelInstagram size={20} />
          </div>
          <div>
            <p className="retro text-[10px] uppercase tracking-wider text-white/50 mb-1">Instagram</p>
            <p className="text-sm">@{contactInfo.instagram}</p>
          </div>
        </Link>
      )}

      {/* LinkedIn */}
      {contactInfo.linkedin && (
        <Link
          href={contactInfo.linkedin}
          target="_blank"
          className="flex items-center gap-4 text-white/80 hover:text-[#ffd700] transition-colors group"
        >
          <div className="p-2 border-2 border-white/30 group-hover:border-[#ffd700] transition-colors">
            <PixelLinkedin size={20} />
          </div>
          <div>
            <p className="retro text-[10px] uppercase tracking-wider text-white/50 mb-1">LinkedIn</p>
            <p className="text-sm">Luigi Simiani</p>
          </div>
        </Link>
      )}
    </motion.div>
  );
}
