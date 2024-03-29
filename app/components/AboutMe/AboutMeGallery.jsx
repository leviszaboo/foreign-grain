"use client"

import {  useRef } from 'react'
import { useScroll, useTransform, motion } from 'framer-motion';
import { useWindowSize } from 'rooks';
import FadeIn from '../FadeIn';
import { fadeInAnimationProps } from './animation';

export default function AboutMeGallery({ sources }) {
  const ref = useRef(null);
  const { scrollY } = useScroll({ target: ref });
  const transformed = useTransform(scrollY, [0, 7000], [0, 2000]);

  const { innerWidth } = useWindowSize();
  const shift = innerWidth < 1024 ? null : transformed
  //style={{y: shift}}

  return (
    <motion.div ref={ref} className="aboutme-gallery-wrapper" {...fadeInAnimationProps}>
      {sources.map((source) => {
        return (
          <FadeIn key={source} className="aboutme-picture-wrapper">
            <img src={source.url} style={{ width: "80%" }}/>
          </FadeIn>
        )
      })}
    </motion.div>
  )
}
