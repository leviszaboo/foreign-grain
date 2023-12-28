"use client"

import React, { useEffect, useRef } from 'react'
import { useScroll, useTransform, motion } from 'framer-motion';
import FadeIn from '../FadeIn';

export default function AboutMeGallery({ sources }) {
  const ref = useRef(null)
  const { scrollY } = useScroll({ target: ref })
  const y = useTransform(scrollY, [0, 7000], [0, -2000]);

  return (
    <motion.div ref={ref} style={{y}} className="aboutme-gallery-wrapper">
      {sources.map((source) => {
        return (
          <FadeIn key={source} className="aboutme-picture-wrapper">
            <img src={source.source} style={{width: `${source.width}%` }}/>
          </FadeIn>
        )
      })}
    </motion.div>
  )
}
