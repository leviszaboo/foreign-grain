"use client"

import { motion, AnimatePresence } from "framer-motion";
import { useMenuStore } from "@/app/hooks/useMenuStore";

import ContactForm from "@/app/components/Contact/ContactForm";
import ContactLabel from "@/app/components/Contact/ContactLabel";
import InfoBox from "@/app/components/Contact/InfoBox";
import Signature from "@/app/components/Contact/Signature";
import { fadeInAnimationProps } from "./animation";
import { useEffect } from "react";
import FadeIn from "../FadeIn";

export default function ContactPage({ contactInfo }) {
  const { isMenuVisible } = useMenuStore();

  return (
    <AnimatePresence>
      {!isMenuVisible && (
        <motion.div {...fadeInAnimationProps}>
          <FadeIn>
            <ContactLabel />
          </FadeIn>
          <div className="contact-wrapper">
            <ContactForm />
            <InfoBox contactInfo={contactInfo}/>
          </div>
          <Signature />
        </motion.div>
      )}
    </AnimatePresence>
  )
}