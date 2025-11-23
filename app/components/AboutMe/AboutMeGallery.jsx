"use client";

import FadeIn from "../FadeIn";
import { motion } from "framer-motion";
import { fadeInAnimationProps } from "./animation";
import Image from "../Image";

export default function AboutMeGallery({ sources }) {
  return (
    <motion.div className="aboutme-gallery-wrapper" {...fadeInAnimationProps}>
      {sources.map((source) => {
        return (
          <FadeIn key={source.url} className="aboutme-picture-wrapper">
            <Image
              src={source.url}
              alt=""
              width={1000}
              height={1000 / source.aspectRatio}
              placeholder="blur"
              blurDataURL={source.base64}
              style={{ width: "80%" }}
            />
          </FadeIn>
        );
      })}
    </motion.div>
  );
}
