"use client"

import { motion, AnimatePresence } from "framer-motion";
import { useMenuStore } from "@/app/context/UIContext";

import ContactForm from "@/app/components/Contact/ContactForm";
import ContactLabel from "@/app/components/Contact/ContactLabel";
import InfoBox from "@/app/components/Contact/InfoBox";
import Signature from "@/app/components/Contact/Signature";
import { fadeInAnimationProps } from "./animation";
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
          <div className="flex flex-col lg:flex-row gap-8 px-8 py-8 max-w-6xl mx-auto">
            <ContactForm />
            <InfoBox contactInfo={contactInfo}/>
          </div>
          <Signature />
        </motion.div>
      )}
    </AnimatePresence>
  )
}