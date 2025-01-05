"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Instagram, Linkedin } from "lucide-react";
import { infoBoxAnimationProps } from "./animation";

export default function InfoBox({ contactInfo }) {
  return (
    <motion.div className="info-box" {...infoBoxAnimationProps}>
      <h2>{contactInfo.name}</h2>
      <h2>{contactInfo.email}</h2>
      <h2>{contactInfo.phoneNumber}</h2>
      <h2>{contactInfo.address}</h2>
      <div className="socials">
        <Link
          href={"https://www.instagram.com/greenmario.film/"}
          target="_blank"
        >
          <Instagram color="white" size={32} />
        </Link>
        <Link
          href={"https://www.linkedin.com/in/luigi-simiani-65643b228/"}
          target="_blank"
        >
          <Linkedin color="white" size={32} />
        </Link>
      </div>
    </motion.div>
  );
}
