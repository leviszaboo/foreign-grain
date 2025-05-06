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
        {contactInfo.instagram && (
          <Link href={contactInfo.instagram} target="_blank">
            <Instagram color="white" size={32} />
          </Link>
        )}
        {contactInfo.linkedIn && (
          <Link href={contactInfo.linkedIn} target="_blank">
            <Linkedin color="white" size={32} />
          </Link>
        )}
      </div>
    </motion.div>
  );
}
